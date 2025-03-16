'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
  | 'Jabaquara'
  | 'Luz'
  | 'República'
  | 'Consolação'
  | 'Paulista'
  | 'Faria Lima'
  | 'Barueri'
  | 'Jandira'
  | 'Vargem Grande Paulista';

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
    Luz: 30,
    República: 32,
    Consolação: 35,
    Paulista: 38,
    'Faria Lima': 42,
    Barueri: 45,
    Jandira: 50,
    'Vargem Grande Paulista': 55,
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
    Luz: 25,
    República: 28,
    Consolação: 30,
    Paulista: 33,
    'Faria Lima': 37,
    Barueri: 35,
    Jandira: 40,
    'Vargem Grande Paulista': 45,
  },
  Carapicuíba: {
    Osasco: 10,
    Quitaúna: 5,
    Manga: 7,
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
    Luz: 35,
    República: 38,
    Consolação: 40,
    Paulista: 43,
    'Faria Lima': 47,
    Barueri: 50,
    Jandira: 55,
    'Vargem Grande Paulista': 60,
  },
};

const ViagemInicio = () => {
  const [origem, setOrigem] = useState<Estacoes>('Osasco');
  const [destino, setDestino] = useState<Estacoes>('Quitaúna');
  const [historicoViagens, setHistoricoViagens] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const historicoSalvo = JSON.parse(localStorage.getItem('historicoViagens') || '[]');
    setHistoricoViagens(historicoSalvo);
  }, []);

  const calcularTempoPercurso = () => {
    const tempo = TEMPOS_PERCURSO[origem]?.[destino];
    return tempo !== undefined ? tempo : 0;
  };

  const handleIniciarViagem = () => {
    const tempo = calcularTempoPercurso();
    if (tempo === 0) {
      alert('Não há tempo registrado para essa rota.');
    } else {
      alert(`Iniciando viagem de ${origem} para ${destino}. Tempo estimado: ${tempo} minutos`);

      const novaViagem = `Origem: ${origem}, Destino: ${destino}, Tempo: ${tempo} minutos`;
      const historicoAtual = JSON.parse(localStorage.getItem('historicoViagens') || '[]');
      localStorage.setItem('historicoViagens', JSON.stringify([...historicoAtual, novaViagem]));
    
      setHistoricoViagens([...historicoViagens, novaViagem]);

      router.push(`/ViagemIniciada?origem=${origem}&destino=${destino}`);
    }
  };

  const linhasEstacoes = {
    Esmeralda: [
      'Osasco', 'Quitaúna', 'Carapicuíba', 'Manga', 'Dom Pedro II', 'Vila Progredior', 
      'Presidente Altino', 'Pinheiros', 'Granja Julieta', 'Morumbi', 'Butantã', 
      'Santo Amaro', 'Brooklin', 'Campo Belo', 'Jabaquara'
    ],
    Amarela: [
      'Luz', 'República', 'Consolação', 'Paulista', 'Faria Lima', 'Pinheiros', 'Vila Progredior', 'Morumbi'
    ],
    Diamante: [
      'Osasco', 'Quitaúna', 'Carapicuíba', 'Barueri', 'Jandira', 'Vargem Grande Paulista'
    ]
  };

  const todasAsEstacoes: Estacoes[] = [
    ...linhasEstacoes.Esmeralda, 
    ...linhasEstacoes.Amarela, 
    ...linhasEstacoes.Diamante
  ];

  return (
    <div className="h-screen">
      <h1 className="mx-auto mt-15 w-[48%] mb-5 font-bold text-[2.9rem]">
        COMEÇAR <span className="text-[#42807D]">VIAGEM</span>
      </h1>
      <div className="w-[22%] p-8 text-start mx-auto mt-[10%]">
        <div className="mb-6">
          <label className="text-left text-[1.2rem] font-semibold mb-2">
            Selecione a estação de origem:
          </label>
          <select
            value={origem}
            onChange={(e) => setOrigem(e.target.value as Estacoes)}
            className="w-full bg-gray-300 p-2 rounded-2xl text-[1.2rem] font-semibold"
          >
            <optgroup label="Linha Esmeralda">
              {linhasEstacoes.Esmeralda.map((estacao) => (
                <option key={estacao} value={estacao}>
                  {estacao}
                </option>
              ))}
            </optgroup>

            <optgroup label="Linha Amarela">
              {linhasEstacoes.Amarela.map((estacao) => (
                <option key={estacao} value={estacao}>
                  {estacao}
                </option>
              ))}
            </optgroup>

            <optgroup label="Linha Diamante">
              {linhasEstacoes.Diamante.map((estacao) => (
                <option key={estacao} value={estacao}>
                  {estacao}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="mb-6">
          <label className="text-left text-[1.2rem] font-semibold mb-2">
            Selecione a estação de destino:
          </label>
          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value as Estacoes)}
            className="w-full bg-gray-300 p-2 rounded-2xl text-[1.2rem] font-semibold"
          >
            <optgroup label="Linha Esmeralda">
              {linhasEstacoes.Esmeralda.map((estacao) => (
                <option key={estacao} value={estacao}>
                  {estacao}
                </option>
              ))}
            </optgroup>

            <optgroup label="Linha Amarela">
              {linhasEstacoes.Amarela.map((estacao) => (
                <option key={estacao} value={estacao}>
                  {estacao}
                </option>
              ))}
            </optgroup>

            <optgroup label="Linha Diamante">
              {linhasEstacoes.Diamante.map((estacao) => (
                <option key={estacao} value={estacao}>
                  {estacao}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <button
          className="bg-[#42807D] p-3  w-[100%] cursor-pointer text-white rounded-[1.4rem] font-bold"
          onClick={handleIniciarViagem}
        >
          Iniciar Viagem
        </button>

        <Link href="/Relatorio">
          <button className="bg-[#000]  w-[100%] p-2 cursor-pointer text-white rounded-2xl mt-4">
            Ver Relatório
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViagemInicio;
