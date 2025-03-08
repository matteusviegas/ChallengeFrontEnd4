'use client';
import React, { useState } from 'react';

type Estacoes = 'Osasco' | 'Quitaúna' | 'Carapicuíba' | 'Manga' | 'Dom Pedro II' | 'Vila Progredior' | 'Presidente Altino' | 'Pinheiros' | 'Granja Julieta' | 'Morumbi' | 'Butantã' | 'Santo Amaro' | 'Brooklin' | 'Campo Belo' | 'Jabaquara';

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
    Manga: 10,
    'Dom Pedro II': 12,
    'Vila Progredior': 18,
    'Presidente Altino': 22,
    Pinheiros: 28,
    'Granja Julieta': 32,
    Morumbi: 38,
    Butantã: 42,
    'Santo Amaro': 47,
    Brooklin: 52,
    'Campo Belo': 57,
    Jabaquara: 62,
  },
  Carapicuíba: {
    Osasco: 10,
    Quitaúna: 5,
    Manga: 7,
    'Dom Pedro II': 13,
    'Vila Progredior': 17,
    'Presidente Altino': 21,
    Pinheiros: 26,
    'Granja Julieta': 30,
    Morumbi: 36,
    Butantã: 41,
    'Santo Amaro': 45,
    Brooklin: 50,
    'Campo Belo': 55,
    Jabaquara: 60,
  },
  Manga: {
    Osasco: 12,
    Quitaúna: 10,
    Carapicuíba: 7,
    'Dom Pedro II': 16,
    'Vila Progredior': 18,
    'Presidente Altino': 22,
    Pinheiros: 28,
    'Granja Julieta': 32,
    Morumbi: 38,
    Butantã: 43,
    'Santo Amaro': 48,
    Brooklin: 53,
    'Campo Belo': 58,
    Jabaquara: 63,
  },
  'Dom Pedro II': {
    Osasco: 15,
    Quitaúna: 12,
    Carapicuíba: 13,
    Manga: 16,
    'Vila Progredior': 18,
    'Presidente Altino': 21,
    Pinheiros: 27,
    'Granja Julieta': 31,
    Morumbi: 36,
    Butantã: 41,
    'Santo Amaro': 46,
    Brooklin: 51,
    'Campo Belo': 56,
    Jabaquara: 61,
  },
  'Vila Progredior': {
    Osasco: 20,
    Quitaúna: 18,
    Carapicuíba: 17,
    Manga: 18,
    'Dom Pedro II': 18,
    'Presidente Altino': 22,
    Pinheiros: 30,
    'Granja Julieta': 34,
    Morumbi: 39,
    Butantã: 44,
    'Santo Amaro': 50,
    Brooklin: 55,
    'Campo Belo': 60,
    Jabaquara: 65,
  },
  'Presidente Altino': {
    Osasco: 25,
    Quitaúna: 22,
    Carapicuíba: 21,
    Manga: 22,
    'Dom Pedro II': 21,
    'Vila Progredior': 22,
    Pinheiros: 33,
    'Granja Julieta': 37,
    Morumbi: 43,
    Butantã: 47,
    'Santo Amaro': 53,
    Brooklin: 58,
    'Campo Belo': 63,
    Jabaquara: 68,
  },
  Pinheiros: {
    Osasco: 30,
    Quitaúna: 28,
    Carapicuíba: 26,
    Manga: 28,
    'Dom Pedro II': 27,
    'Vila Progredior': 30,
    'Presidente Altino': 33,
    'Granja Julieta': 39,
    Morumbi: 45,
    Butantã: 50,
    'Santo Amaro': 56,
    Brooklin: 60,
    'Campo Belo': 65,
    Jabaquara: 70,
  },
  'Granja Julieta': {
    Osasco: 35,
    Quitaúna: 32,
    Carapicuíba: 30,
    Manga: 32,
    'Dom Pedro II': 31,
    'Vila Progredior': 34,
    'Presidente Altino': 37,
    Pinheiros: 39,
    Morumbi: 48,
    Butantã: 54,
    'Santo Amaro': 59,
    Brooklin: 64,
    'Campo Belo': 68,
    Jabaquara: 73,
  },
  Morumbi: {
    Osasco: 40,
    Quitaúna: 38,
    Carapicuíba: 36,
    Manga: 38,
    'Dom Pedro II': 36,
    'Vila Progredior': 39,
    'Presidente Altino': 43,
    Pinheiros: 45,
    'Granja Julieta': 48,
    Butantã: 59,
    'Santo Amaro': 64,
    Brooklin: 69,
    'Campo Belo': 73,
    Jabaquara: 78,
  },
  Butantã: {
    Osasco: 45,
    Quitaúna: 42,
    Carapicuíba: 41,
    Manga: 43,
    'Dom Pedro II': 41,
    'Vila Progredior': 44,
    'Presidente Altino': 47,
    Pinheiros: 50,
    'Granja Julieta': 54,
    Morumbi: 59,
    'Santo Amaro': 68,
    Brooklin: 73,
    'Campo Belo': 77,
    Jabaquara: 82,
  },
  'Santo Amaro': {
    Osasco: 50,
    Quitaúna: 47,
    Carapicuíba: 45,
    Manga: 48,
    'Dom Pedro II': 46,
    'Vila Progredior': 50,
    'Presidente Altino': 53,
    Pinheiros: 56,
    'Granja Julieta': 59,
    Morumbi: 64,
    Butantã: 68,
    Brooklin: 78,
    'Campo Belo': 80,
    Jabaquara: 85,
  },
  Brooklin: {
    Osasco: 55,
    Quitaúna: 52,
    Carapicuíba: 50,
    Manga: 53,
    'Dom Pedro II': 51,
    'Vila Progredior': 55,
    'Presidente Altino': 58,
    Pinheiros: 60,
    'Granja Julieta': 64,
    Morumbi: 69,
    Butantã: 73,
    'Santo Amaro': 78,
    'Campo Belo': 83,
    Jabaquara: 88,
  },
  'Campo Belo': {
    Osasco: 60,
    Quitaúna: 57,
    Carapicuíba: 55,
    Manga: 58,
    'Dom Pedro II': 56,
    'Vila Progredior': 60,
    'Presidente Altino': 63,
    Pinheiros: 65,
    'Granja Julieta': 68,
    Morumbi: 73,
    Butantã: 77,
    'Santo Amaro': 80,
    Brooklin: 83,
    Jabaquara: 90,
  },
  Jabaquara: {
    Osasco: 65,
    Quitaúna: 62,
    Carapicuíba: 60,
    Manga: 63,
    'Dom Pedro II': 61,
    'Vila Progredior': 65,
    'Presidente Altino': 68,
    Pinheiros: 70,
    'Granja Julieta': 73,
    Morumbi: 78,
    Butantã: 82,
    'Santo Amaro': 85,
    Brooklin: 88,
    'Campo Belo': 90,
  },
};

const ESTACOES = [
  'Osasco',
  'Quitaúna',
  'Carapicuíba',
  'Manga',
  'Dom Pedro II',
  'Vila Progredior',
  'Presidente Altino',
  'Pinheiros',
  'Granja Julieta',
  'Morumbi',
  'Butantã',
  'Santo Amaro',
  'Brooklin',
  'Campo Belo',
  'Jabaquara',
];

const Viagem = () => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [tempoPercurso, setTempoPercurso] = useState<number | null>(null);
  const [iniciarViagem, setIniciarViagem] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<number | null>(null);

  const calcularTempo = () => {
    if (origem && destino) {
      const tempo = TEMPOS_PERCURSO[origem as Estacoes]?.[destino as Estacoes];
      setTempoPercurso(tempo || 0);
    }
  };

  const iniciarViagemHandler = () => {
    setIniciarViagem(true);
    setCurrentPosition(0);
  };

  const updatePosition = () => {
    if (currentPosition !== null && currentPosition < ESTACOES.length - 1) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const renderLinhaMetro = () => {
    if (!iniciarViagem || currentPosition === null) return null;
    return (
      <div>
        <h2>Você está em: {ESTACOES[currentPosition]}</h2>
        <button onClick={updatePosition}>Avançar para próxima estação</button>
      </div>
    );
  };

  return (
    <>
      <h1 className="mx-auto mt-13 w-[50%] text-center font-bold text-[2.4rem]">
        COMEÇAR <span className="text-[#42807D]">VIAGEM</span>
      </h1>

      <div className="flex flex-col justify-center items-center mt-16 px-4">
        <div className="flex flex-col mb-7 w-full max-w-[360px] mt-2">
          <label className="mb-2 text-[1.3rem]" htmlFor="origem">
            Selecione a estação de origem:
          </label>
          <select
            id="origem"
            className="border p-2 rounded-lg text-[1rem] focus:ring-2 focus:ring-[#42807D]"
            value={origem}
            onChange={(e) => {
              setOrigem(e.target.value);
              setDestino('');
              setTempoPercurso(null);
            }}
          >
            <option value="">Selecione...</option>
            {ESTACOES.map((estacao) => (
              <option key={estacao} value={estacao}>
                {estacao}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-7 w-full max-w-[360px] mt-6 lg:w-[35%]">
          <label className="mb-2 text-[1.3rem] lg:text-[1.8rem]" htmlFor="destino">
            Selecione a estação de destino:
          </label>
          <select
            id="destino"
            className="border p-2 rounded-lg text-[1rem] focus:ring-2 focus:ring-[#42807D]"
            value={destino}
            onChange={(e) => {
              setDestino(e.target.value);
              calcularTempo();
            }}
          >
            <option value="">Selecione...</option>
            {ESTACOES.filter((estacao) => estacao !== origem).map((estacao) => (
              <option key={estacao} value={estacao}>
                {estacao}
              </option>
            ))}
          </select>
        </div>

        {tempoPercurso !== null && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">
              Tempo estimado: {tempoPercurso} minutos
            </h2>
          </div>
        )}

        <div className="flex flex-col gap-8 mt-8 w-full max-w-[330px]">
          <button
            className="text-white rounded-2xl bg-[#42807D] p-3 text-[1.2rem]"
            onClick={iniciarViagemHandler}
            disabled={!tempoPercurso}
          >
            Iniciar
          </button>
          <button className="p-3 rounded-2xl text-white bg-black text-[1.2rem] lg:text-[1.4rem]">
            Exibir Relatório
          </button>
        </div>

        {renderLinhaMetro()}
      </div>
    </>
  );
};

export default Viagem;
