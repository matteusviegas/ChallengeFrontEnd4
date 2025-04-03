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

type TabelaTempos = {
  [key in Estacoes]: {
    [key in Estacoes]?: number;
  };
};

const TEMPOS_ENTRE_ESTACOES: TabelaTempos = {
  Osasco: {
    Quitaúna: 5,
    Carapicuíba: 10,
    Manga: 12,
    'Dom Pedro II': 15,
    'Vila Progredior': 20,
    'Presidente Altino': 25,
    Pinheiros: 30,
    'Granja Julieta': 35,
    Morumbi: 40,
    Butantã: 45,
    'Santo Amaro': 50,
    Brooklin: 55,
    'Campo Belo': 60,
    Jabaquara: 65,
  },
  Quitaúna: {
    Osasco: 5,
    Carapicuíba: 5,
    Manga: 8,
    'Dom Pedro II': 10,
    'Vila Progredior': 12,
    'Presidente Altino': 15,
    Pinheiros: 20,
    'Granja Julieta': 25,
    Morumbi: 30,
    Butantã: 35,
    'Santo Amaro': 40,
    Brooklin: 45,
    'Campo Belo': 50,
    Jabaquara: 55,
  },
  Carapicuíba: {
    Quitaúna: 5,
    Osasco: 10,
    Manga: 4,
    'Dom Pedro II': 7,
    'Vila Progredior': 10,
    'Presidente Altino': 13,
    Pinheiros: 18,
    'Granja Julieta': 22,
    Morumbi: 27,
    Butantã: 32,
    'Santo Amaro': 37,
    Brooklin: 42,
    'Campo Belo': 47,
    Jabaquara: 52,
  },
  Manga: {
    Carapicuíba: 4,
    Quitaúna: 8,
    Osasco: 12,
    'Dom Pedro II': 5,
    'Vila Progredior': 8,
    'Presidente Altino': 12,
    Pinheiros: 17,
    'Granja Julieta': 20,
    Morumbi: 25,
    Butantã: 30,
    'Santo Amaro': 35,
    Brooklin: 40,
    'Campo Belo': 45,
    Jabaquara: 50,
  },
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
  useEffect(() => {
    if (!origem || !destino || !TEMPOS_ENTRE_ESTACOES[origem]?.[destino]) {
      console.error('Origem ou destino inválidos');
      return;
    }
  
    const tempo = TEMPOS_ENTRE_ESTACOES[origem][destino];
    setDuracaoTotal(tempo);
  
    const intervalo = setInterval(() => {
      setTempoAtual((anterior) => {
        if (anterior >= tempo) {
          clearInterval(intervalo);
          setChegouAoDestino(true);
          return anterior;
        }
        return anterior + 1;
      });
    }, 1000);
  
    return () => clearInterval(intervalo);
  }, [origem, destino]);
  
  useEffect(() => {
    const progressoAtual = (tempoAtual / duracaoTotal) * 100;
    setPercentualConcluido(progressoAtual);
  }, [tempoAtual, duracaoTotal]);

  const finalizarViagem = () => {
    router.push('/viagem');
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>Viagem em andamento...</h1>
      <p className="mt-2">{`Viagem de ${origem} para ${destino}`}</p>

      {chegouAoDestino ? (
        <p className="mt-2 text-green-500">Viagem concluída!</p>
      ) : (
        <div className="mt-4">
          <div className="w-full bg-gray-300 h-2">
            <div
              style={{ width: `${percentualConcluido}%` }}
              className="bg-[#42807D] h-full transition-all duration-1000"
            ></div>
          </div>
          <p className="mt-2">{`Tempo atual: ${tempoAtual} minutos`}</p>
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
