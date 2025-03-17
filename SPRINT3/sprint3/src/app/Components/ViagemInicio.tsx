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
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-center w-[50%] mx-auto font-bold text-4xl mt-8 mb-4">
        COMEÇAR <span className="text-[#42807D] w-[50%] mx-auto">VIAGEM</span>
      </h1>

      <div className="w-[80%] max-w-md p-6 mt-13">
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Selecione a estação de origem:</label>
          <select
            value={origem}
            onChange={(e) => setOrigem(e.target.value as Estacoes)}
            className="w-full bg-gray-200 p-3 rounded-lg text-lg mb-10 font-semibold"
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

        <div className="mb-6 mb-[25%] ">
          <label className="block text-lg font-semibold mb-2">Selecione a estação de destino:</label>
          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value as Estacoes)}
            className="w-full bg-gray-200 p-3 rounded-lg text-lg font-semibold"
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

      
<div>
<button
          className="bg-[#42807D] w-full p-3 rounded-lg text-white font-bold text-lg mb-10"
          onClick={handleIniciarViagem}
        >
          Iniciar Viagem
        </button>
         <Link href="/Relatorio ">
          <button className="bg-black w-full mx-auto  p-2 rounded-lg text-white font-semibold text-lg">
            Ver Relatório
          </button>
        </Link>
</div>
<div className="flex justify-center mt-6">
        <Link href="/esmeralda">
          <button className="bg-[#42807D] text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
            Voltar ao Início
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ViagemInicio;
