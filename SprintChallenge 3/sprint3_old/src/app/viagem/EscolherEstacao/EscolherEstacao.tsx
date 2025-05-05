'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Estacoes = 'Osasco' | 'Quitaúna' | 'Carapicuíba' | 'Manga' | 'Dom Pedro II' | 'Vila Progredior' | 'Presidente Altino' | 'Pinheiros' | 'Granja Julieta' | 'Morumbi' | 'Butantã' | 'Santo Amaro' | 'Brooklin' | 'Campo Belo' | 'Jabaquara';

const EscolherEstacao = () => {
  const [origem, setOrigem] = useState<Estacoes | null>(null);
  const [destino, setDestino] = useState<Estacoes | null>(null);

  const router = useRouter();

  const estacoes: Estacoes[] = [
    'Osasco', 'Quitaúna', 'Carapicuíba', 'Manga', 'Dom Pedro II', 'Vila Progredior',
    'Presidente Altino', 'Pinheiros', 'Granja Julieta', 'Morumbi', 'Butantã', 'Santo Amaro',
    'Brooklin', 'Campo Belo', 'Jabaquara'
  ];

  const handleConfirmarViagem = () => {
    if (origem && destino) {
      router.push(`/viagem/iniciada?origem=${origem}&destino=${destino}`);
    } else {
      alert('Por favor, selecione uma estação de origem e destino.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-xl font-bold mb-4">Escolha sua viagem</h1>
      
      <div className="mb-4">
        <label htmlFor="origem" className="block mb-2">Origem</label>
        <select
          id="origem"
          className="border p-2"
          value={origem || ''}
          onChange={(e) => setOrigem(e.target.value as Estacoes)}
        >
          <option value="">Selecione a origem</option>
          {estacoes.map((estacao) => (
            <option key={estacao} value={estacao}>
              {estacao}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="destino" className="block mb-2">Destino</label>
        <select
          id="destino"
          className="border p-2"
          value={destino || ''}
          onChange={(e) => setDestino(e.target.value as Estacoes)}
        >
          <option value="">Selecione o destino</option>
          {estacoes.map((estacao) => (
            <option key={estacao} value={estacao}>
              {estacao}
            </option>
          ))}
        </select>
      </div>

      <button
        className="bg-green-500 text-white px-6 py-3 rounded-xl"
        onClick={handleConfirmarViagem}
      >
        Confirmar Viagem
      </button>
    </div>
  );
};

export default EscolherEstacao;
  