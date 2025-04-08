'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '../Botao/Botao';

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

  const formatarTempo = (tempo: number) => {
    const minutos = Math.floor(tempo);
    const segundos = Math.round((tempo - minutos) * 60);
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  };

  const handleIniciarViagem = () => {
    const tempo = calcularTempoPercurso();
    if (tempo === 0) {
      alert('Não há tempo registrado para essa rota.');
    } else {
      const tempoFormatado = formatarTempo(tempo);
      alert(`Iniciando viagem de ${origem} para ${destino}. Tempo estimado: ${tempoFormatado}`);

      const novaViagem = `Origem: ${origem}, Destino: ${destino}, Tempo: ${tempoFormatado}`;
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

      <div className="w-[80%] border-3 rounded-2xl border-[#42807d] max-w-md p-6 mt-13">
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
      </div>

      <div className="flex justify-center mt-[19%]">
        <Link href="/avisos">
          <Button
            label="Voltar"
            onClick={() => {}}
            className="bg-[#42807D] cursor-pointer text-white px-26 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all mb-8 duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ViagemInicio;
