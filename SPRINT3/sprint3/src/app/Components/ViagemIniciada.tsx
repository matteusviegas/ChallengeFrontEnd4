'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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

type TTempoPercurso = {
  [key in Estacoes]: {
    [key in Estacoes]?: number;
  };
};

const TEMPOS_PERCURSO: TTempoPercurso = {
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
      Osasco: 10,
      Quitaúna: 5,
      Manga: 7,
      'Dom Pedro II': 12,
      'Vila Progredior': 15,
      'Presidente Altino': 20,  
      Pinheiros: 25,
      'Granja Julieta': 30,
      Morumbi: 35,
      Butantã: 40,
      'Santo Amaro': 45,
      Brooklin: 50,
      'Campo Belo': 55,
      Jabaquara: 60,
    },
    Manga: {
      Osasco: 12,
      Quitaúna: 8,
      Carapicuíba: 7,
      'Dom Pedro II': 10,
      'Vila Progredior': 15,
      'Presidente Altino': 20,  
      Pinheiros: 25,
      'Granja Julieta': 30,
      Morumbi: 35,
      Butantã: 40,
      'Santo Amaro': 45,
      Brooklin: 50,
      'Campo Belo': 55,
      Jabaquara: 60,
    },
    'Dom Pedro II': {
      Osasco: 15,
      Quitaúna: 10,
      Carapicuíba: 12,
      Manga: 10,
      'Vila Progredior': 10,
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
  };
  
const ViagemIniciada = ({ origem, destino }: { origem: Estacoes; destino: Estacoes }) => {
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [tempoTotal, setTempoTotal] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [viagemConcluida, setViagemConcluida] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const tempo = TEMPOS_PERCURSO[origem]?.[destino] || 0; 
    setTempoTotal(tempo);

    const interval = setInterval(() => {
      setTempoDecorrido((prev) => {
        if (prev >= tempo) {
          clearInterval(interval);
          setViagemConcluida(true); 
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [origem, destino]);

  useEffect(() => {
    const progressoAtual = (tempoDecorrido / tempoTotal) * 100;
    setProgresso(progressoAtual);
  }, [tempoDecorrido, tempoTotal]);

  const handleEncerrarViagem = () => {
    router.push('/viagem'); 
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>Viagem em andamento...</h1>
      <p className="mt-2">{`Viagem de ${origem} para ${destino}`}</p>
      
      {viagemConcluida ? (
        <p className="mt-2 text-green-500">Tempo de viagem concluído!</p>
      ) : (
        <div className="mt-4">
          <div className="w-full bg-gray-300 h-2">
            <div
              style={{ width: `${progresso}%` }}
              className="bg-[#42807D] h-full transition-all duration-1000"
            ></div>
          </div>
          <p className="mt-2">{`Tempo decorrido: ${tempoDecorrido} minutos`}</p>
        </div>
      )}

      <button
        className="mt-4 bg-[#42807D] text-white p-3 rounded-xl"
        onClick={handleEncerrarViagem}
      >
        {viagemConcluida ? 'Encerrar Viagem' : 'Cancelar Viagem'}
      </button>
    </div>
  );
};

export default ViagemIniciada;
