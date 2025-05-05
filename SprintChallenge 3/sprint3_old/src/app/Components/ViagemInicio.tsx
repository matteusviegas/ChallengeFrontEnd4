'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const estacoes = [
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

const ViagemInicio = () => {
  const router = useRouter();
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  const iniciarViagem = () => {
    if (!origem || !destino) {
      alert('Selecione origem e destino!');
      return;
    }

    if (origem === destino) {
      alert('A estação de origem não pode ser igual à de destino.');
      return;
    }

    router.push(`/viagem/iniciada?origem=${origem}&destino=${destino}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold mb-6">Iniciar Viagem</h1>

      <div className="mb-4 w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">Estação de Origem</label>
        <select
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Selecione a origem</option>
          {estacoes.map((estacao) => (
            <option key={estacao} value={estacao}>
              {estacao}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">Estação de Destino</label>
        <select
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          className="w-full p-2 border rounded-md"
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
        onClick={iniciarViagem}
        className="bg-[#42807D] text-white px-6 py-3 rounded-xl"
      >
        Iniciar
      </button>
    </div>
  );
};

export default ViagemInicio;
