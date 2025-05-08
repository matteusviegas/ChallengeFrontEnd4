'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const BASE_URL = 'http://localhost:8080/api/viagem/iniciar';

type Estacoes =
  | 'Osasco' | 'Quitaúna' | 'Carapicuíba' | 'Manga' | 'Dom Pedro II'
  | 'Vila Progredior' | 'Presidente Altino' | 'Pinheiros' | 'Granja Julieta'
  | 'Morumbi' | 'Butantã' | 'Santo Amaro' | 'Brooklin' | 'Campo Belo'
  | 'Jabaquara' | 'Luz' | 'República' | 'Consolação' | 'Paulista'
  | 'Faria Lima' | 'Barueri' | 'Jandira' | 'Vargem Grande Paulista';

const estacaoIdMap: Record<Estacoes, number> = {
  'Osasco': 101, 'Quitaúna': 102, 'Carapicuíba': 103, 'Manga': 104, 'Dom Pedro II': 105,
  'Vila Progredior': 106, 'Presidente Altino': 107, 'Pinheiros': 108, 'Granja Julieta': 109,
  'Morumbi': 110, 'Butantã': 111, 'Santo Amaro': 112, 'Brooklin': 113, 'Campo Belo': 114,
  'Jabaquara': 115, 'Luz': 116, 'República': 117, 'Consolação': 118, 'Paulista': 119,
  'Faria Lima': 120, 'Barueri': 121, 'Jandira': 122, 'Vargem Grande Paulista': 123,
};

const ViagemIniciada = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origem = searchParams.get('origem') as Estacoes | null;
  const destino = searchParams.get('destino') as Estacoes | null;

  const [tempoAtual, setTempoAtual] = useState(0);
  const [duracaoTotal, setDuracaoTotal] = useState(0);
  const [percentualConcluido, setPercentualConcluido] = useState(0);
  const [chegouAoDestino, setChegouAoDestino] = useState(false);
  const [horaChegada, setHoraChegada] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [erro, setErro] = useState('');
  const [viagemFinalizada, setViagemFinalizada] = useState(false);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  const formatarHora = (h: number, minutos: number) => {
    let hora = h;
    let periodo = 'AM';
    if (hora >= 12) {
      periodo = 'PM';
      if (hora > 12) hora -= 12;
    }
    if (hora === 0) hora = 12;
    return `${hora}:${minutos < 10 ? '0' + minutos : minutos} ${periodo}`;
  };

  const calcularHoraChegada = (tempoTotal: number) => {
    const agora = new Date();
    const chegada = new Date(agora.getTime() + tempoTotal * 1000);
    const hora = chegada.getHours();
    const minutos = chegada.getMinutes();
    setHoraChegada(formatarHora(hora, minutos));
  };

  const calcularHoraInicio = () => {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    setHoraInicio(formatarHora(hora, minutos));
  };

  useEffect(() => {
    if (!origem || !destino) {
      setErro('Origem ou destino não informados.');
      return;
    }

    if (!(origem in estacaoIdMap) || !(destino in estacaoIdMap)) {
      setErro('Estação de origem ou destino inválida.');
      return;
    }

    setErro('');
    setTempoAtual(0);
    setDuracaoTotal(0);
    setPercentualConcluido(0);
    setChegouAoDestino(false);
    setViagemFinalizada(false);

    const obterDuracaoViagem = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/mapa/linha9?origem=${encodeURIComponent(origem)}&destino=${encodeURIComponent(destino)}`);
        if (!response.ok) throw new Error('Erro ao buscar dados da viagem.');

        const data = await response.json();

        if (!data || !data.duracao) {
          setErro('Não foi possível obter a duração da viagem.');
          return;
        }

        const tempo = data.duracao;
        setDuracaoTotal(tempo);
        calcularHoraChegada(tempo);
        calcularHoraInicio();

        try {
          const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              usuarioId: 221,
              estacaoOrigemId: estacaoIdMap[origem],
              estacaoDestinoId: estacaoIdMap[destino],
            }),
          });

          if (!res.ok) throw new Error();
          await res.json();
        } catch (err) {
          console.error('Erro ao registrar viagem (ignorado para não quebrar UI)');
        }

        intervaloRef.current = setInterval(() => {
          setTempoAtual((prev) => {
            if (prev >= tempo) {
              if (intervaloRef.current) clearInterval(intervaloRef.current);
              setChegouAoDestino(true);
              setViagemFinalizada(true);
              return prev;
            }
            return prev + 1;
          });
        }, 1000);
      } catch (error) {
        setErro('Erro ao buscar dados da viagem.');
      }
    };

    obterDuracaoViagem();

    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, [origem, destino]);

  useEffect(() => {
    const progresso = duracaoTotal > 0 ? (tempoAtual / duracaoTotal) * 100 : 0;
    setPercentualConcluido(progresso);
  }, [tempoAtual, duracaoTotal]);

  const finalizarViagem = () => {
    router.push('/viagem/EscolherEstacao');
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-2xl font-bold mb-4">Viagem em andamento</h1>
      {origem && destino && !erro && (
        <>
          <p className="mb-2">{`De ${origem} para ${destino}`}</p>
          <p className="mb-2">{`Início: ${horaInicio || '---'}`}</p>
        </>
      )}

      {erro && !viagemFinalizada && (
        <div className="text-red-500 mt-4">
          <p>⚠️ {erro}</p>
        </div>
      )}

      {!erro || viagemFinalizada ? (
        <>
          {chegouAoDestino ? (
            <p className="text-green-600 mt-4 font-semibold">Viagem concluída!</p>
          ) : (
            <div className="mt-4 w-full max-w-xs">
              <div className="relative w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
                  style={{ width: `${percentualConcluido}%` }}
                />
              </div>
              <p>{`Progresso: ${percentualConcluido.toFixed(0)}%`}</p>
            </div>
          )}
        </>
      ) : null}

      {chegouAoDestino && (
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full"
          onClick={finalizarViagem}
        >
          Finalizar Viagem
        </button>
      )}
    </div>
  );
};

export default ViagemIniciada;
