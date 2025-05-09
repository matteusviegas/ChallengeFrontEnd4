'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const estacoes = [
  { id: 1, nome: 'Osasco' },
  { id: 2, nome: 'Quitaúna' },
  { id: 3, nome: 'Carapicuíba' },
  { id: 4, nome: 'Manga' },
  { id: 5, nome: 'Dom Pedro II' },
  { id: 6, nome: 'Vila Progredior' },
  { id: 7, nome: 'Presidente Altino' },
  { id: 8, nome: 'Pinheiros' },
  { id: 9, nome: 'Granja Julieta' },
  { id: 10, nome: 'Morumbi' },
  { id: 11, nome: 'Butantã' },
  { id: 12, nome: 'Santo Amaro' },
  { id: 13, nome: 'Brooklin' },
  { id: 14, nome: 'Campo Belo' },
  { id: 15, nome: 'Jabaquara' },
];

const ViagemInicio = () => {
  const router = useRouter();
  const [origemId, setOrigemId] = useState('');
  const [destinoId, setDestinoId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState('');

  const iniciarViagem = async () => {
    if (!origemId || !destinoId) {
      alert('Selecione origem e destino!');
      return;
    }

    if (origemId === destinoId) {
      alert('A estação de origem não pode ser igual à de destino.');
      return;
    }

    setIsLoading(true);
    setErro('');

    try {
      const resposta = await fetch('http://localhost:8080/api/viagem/iniciar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          estacaoOrigemId: parseInt(origemId),
          estacaoDestinoId: parseInt(destinoId),
          usuarioId: 1, 
          hPartida: new Date().toISOString()
        })
      });

      if (!resposta.ok) {
        throw new Error('Falha ao iniciar a viagem');
      }

      const viagemData = await resposta.json();
      router.push(`/viagem/iniciada?viagemId=${viagemData.id}`);
    } catch (err) {
      if (err instanceof Error) {
        setErro(err.message);
      } else {
        setErro('Erro desconhecido');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold mb-6">Iniciar Viagem</h1>

      <div className="mb-4 w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Estação de Origem
        </label>
        <select
          value={origemId}
          onChange={(e) => setOrigemId(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Selecione a origem</option>
          {estacoes.map((estacao) => (
            <option key={estacao.id} value={estacao.id}>
              {estacao.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Estação de Destino
        </label>
        <select
          value={destinoId}
          onChange={(e) => setDestinoId(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Selecione o destino</option>
          {estacoes.map((estacao) => (
            <option key={estacao.id} value={estacao.id}>
              {estacao.nome}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={iniciarViagem}
        className="bg-[#42807D] text-white px-6 py-3 rounded-xl hover:scale-105 transition"
        disabled={isLoading || !origemId || !destinoId || origemId === destinoId}
      >
        {isLoading ? 'Iniciando...' : 'Iniciar'}
      </button>

      {erro && <div className="mt-4 text-red-500">{erro}</div>}
      {isLoading && <div className="mt-2 text-gray-600">Carregando...</div>}
    </div>
  );
};

export default ViagemInicio;
