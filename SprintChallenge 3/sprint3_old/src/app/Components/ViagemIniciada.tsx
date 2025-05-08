'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type Estacoes =
  | 'Osasco'
  | 'Quitaúna'
  | 'Carapicuíba'
  | 'Manga'
  | 'Dom Pedro II'
  | 'Vila Progredior'
  | 'Presidente Altino'
  | 'Pinheiros'
  | 'Granja Julieta'
  | 'Morumbi'
  | 'Butantã'
  | 'Santo Amaro'
  | 'Brooklin'
  | 'Campo Belo'
  | 'Jabaquara';

const estacaoIdMap: Record<Estacoes, number> = {
  'Osasco': 101,
  'Quitaúna': 102,
  'Carapicuíba': 103,
  'Manga': 104,
  'Dom Pedro II': 105,
  'Vila Progredior': 106,
  'Presidente Altino': 107,
  'Pinheiros': 108,
  'Granja Julieta': 109,
  'Morumbi': 110,
  'Butantã': 111,
  'Santo Amaro': 112,
  'Brooklin': 113,
  'Campo Belo': 114,
  'Jabaquara': 115,
};

const ViagemIniciada = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origem = searchParams.get('origem') as Estacoes;
  const destino = searchParams.get('destino') as Estacoes;

  const [tempoAtual, setTempoAtual] = useState(0);
  const [duracaoTotal, setDuracaoTotal] = useState(0);
  const [percentualConcluido, setPercentualConcluido] = useState(0);
  const [chegouAoDestino, setChegouAoDestino] = useState(false);
  const [horaChegada, setHoraChegada] = useState('');
  const [horaInicio, setHoraInicio] = useState('');

  const formatarHora = (hora: number, minutos: number) => {
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
    if (!origem || !destino) return;

    const obterDuracaoViagem = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/mapa/linha9?origem=${origem}&destino=${destino}`);
        const data = await response.json();

        if (data && data.duracao) {
          const tempo = data.duracao;
          setDuracaoTotal(tempo);
          calcularHoraChegada(tempo);
          calcularHoraInicio();

          // 🔥 POST para iniciar viagem
          const iniciarViagem = async () => {
            try {
              const res = await fetch('http://localhost:8080/api/viagem/iniciar', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  usuarioId: 221,
                  estacaoOrigemId: estacaoIdMap[origem],
                  estacaoDestinoId: estacaoIdMap[destino],
                  hPartida: new Date().toISOString(),
                }),
              });

              const postData = await res.json();
              console.log('Viagem registrada:', postData);
            } catch (err) {
              console.error('Erro ao registrar viagem:', err);
            }
          };

          iniciarViagem();

          // 🕒 Simulação de viagem
          const intervalo = setInterval(() => {
            setTempoAtual((prev) => {
              if (prev >= tempo) {
                clearInterval(intervalo);
                setChegouAoDestino(true);
                return prev;
              }
              return prev + 1;
            });
          }, 1000);
        } else {
          throw new Error('Erro ao obter dados de viagem');
        }
      } catch (error) {
        console.error('Erro ao buscar dados de viagem:', error);
      }
    };

    obterDuracaoViagem();
  }, [origem, destino]);

  useEffect(() => {
    const progresso = (tempoAtual / duracaoTotal) * 100;
    setPercentualConcluido(progresso);
  }, [tempoAtual, duracaoTotal]);

  const finalizarViagem = () => {
    router.push('/viagem');
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>Viagem em andamento...</h1>
      <p className="mt-2">{`Viagem de ${origem} para ${destino}`}</p>
      <p className="mt-2">{`Início: ${horaInicio}`}</p>

      {chegouAoDestino ? (
        <p className="mt-2 text-green-500">Viagem concluída!</p>
      ) : (
        <div className="mt-4 w-full max-w-xs">
          <div className="relative w-full bg-gray-300 h-2 rounded-full">
            <div
              style={{
                width: `${percentualConcluido}%`,
                transition: 'width 0.1s ease-out',
              }}
              className="bg-[#42807D] h-full rounded-full"
            ></div>
            <div
              className="absolute top-0 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${percentualConcluido}%`,
                transform: `translateX(-50%)`,
                width: '20px',
                height: '20px',
                backgroundColor: '#42807D',
                borderRadius: '50%',
                transition: 'left 0.1s ease-out',
              }}
            ></div>
          </div>
          <p className="mt-2 text-center">{`${Math.floor(percentualConcluido)}% Concluído`}</p>
          <p className="mt-2">{`Tempo decorrido: ${Math.floor(tempoAtual / 60)} minutos ${tempoAtual % 60} segundos`}</p>
          <p className="mt-2">{`Hora prevista de chegada: ${horaChegada}`}</p>
        </div>
      )}

      <button
        className="mt-4 bg-[#42807D] text-white p-3 rounded-xl"
        onClick={finalizarViagem}
      >
        {chegouAoDestino ? 'Finalizar Viagem' : 'Cancelar Viagem'}
      </button>
    </div>
  );
};

export default ViagemIniciada;
  