'use client';

import React, { useState } from 'react';
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
};

const ViagemInicio = () => {
  const [origem, setOrigem] = useState<Estacoes>('Osasco');
  const [destino, setDestino] = useState<Estacoes>('Quitaúna');
  const [historicoViagens, setHistoricoViagens] = useState<string[]>([]);

  const router = useRouter();

  const calcularTempoPercurso = () => {
    const tempo = TEMPOS_PERCURSO[origem][destino];
    return tempo !== undefined ? `${tempo} minutos` : 'Tempo não disponível';
  };

  const handleIniciarViagem = () => {
    const tempo = calcularTempoPercurso();
    alert(`Iniciando viagem de ${origem} para ${destino}. Tempo estimado: ${tempo}`);

    const novaViagem = `Origem: ${origem}, Destino: ${destino}, Tempo: ${tempo}`;
    const historicoAtual = JSON.parse(localStorage.getItem('historicoViagens') || '[]');
    localStorage.setItem('historicoViagens', JSON.stringify([...historicoAtual, novaViagem]));
    
    setHistoricoViagens([...historicoViagens, novaViagem]);
  };

  const handleExibirRelatorio = () => {
    router.push('/relatorio'); 
  };

  return (
    <div className=' w-[30%] p-8 text-center mx-auto mt-[10%]'>
      <h1>Iniciar Viagem</h1>
      <div className='mb-[7%]'>
        <label className='border-2 border-black p-3 rounded-2xl'>
          Origem:
          <select value={origem} onChange={(e) => setOrigem(e.target.value as Estacoes)}>
            <option value="Osasco">Osasco</option>
            <option value="Quitaúna">Quitaúna</option>
            <option value="Carapicuíba">Carapicuíba</option>
            <option value="Manga">Manga</option>
            <option value="Dom Pedro II">Dom Pedro II</option>
            <option value="Vila Progredior">Vila Progredior</option>
            <option value="Presidente Altino">Presidente Altino</option>
            <option value="Pinheiros">Pinheiros</option>
            <option value="Granja Julieta">Granja Julieta</option>
            <option value="Morumbi">Morumbi</option>
            <option value="Butantã">Butantã</option>
            <option value="Santo Amaro">Santo Amaro</option>
            <option value="Brooklin">Brooklin</option>
            <option value="Campo Belo">Campo Belo</option>
            <option value="Jabaquara">Jabaquara</option>
          </select>
        </label>
      </div>
      <div className='mt-[16%]'>
        <label className='border-2 border-black p-3 rounded-2xl'>
          Destino:
          <select value={destino} onChange={(e) => setDestino(e.target.value as Estacoes)}>
            <option value="Osasco">Osasco</option>
            <option value="Quitaúna">Quitaúna</option>
            <option value="Carapicuíba">Carapicuíba</option>
            <option value="Manga">Manga</option>
            <option value="Dom Pedro II">Dom Pedro II</option>
            <option value="Vila Progredior">Vila Progredior</option>
            <option value="Presidente Altino">Presidente Altino</option>
            <option value="Pinheiros">Pinheiros</option>
            <option value="Granja Julieta">Granja Julieta</option>
            <option value="Morumbi">Morumbi</option>
            <option value="Butantã">Butantã</option>
            <option value="Santo Amaro">Santo Amaro</option>
            <option value="Brooklin">Brooklin</option>
            <option value="Campo Belo">Campo Belo</option>
            <option value="Jabaquara">Jabaquara</option>
          </select>
        </label>
      </div>
      <div className='mt-[10%] flex gap-2 mx-auto '>
      <button className='bg-[#42807D] p-3 cursor-pointer text-white rounded-2xl' onClick={handleIniciarViagem}>Iniciar Viagem</button>
      <Link href="/Relatorio">
      <button  className='bg-[#42807D] p-3 cursor-pointer text-white rounded-2xl' onClick={handleExibirRelatorio}>Exibir Relatório</button>

      </Link>
      </div>
     
    </div>
  );
};

export default ViagemInicio;
