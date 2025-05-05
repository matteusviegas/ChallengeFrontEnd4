'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Viagem {
  nome: string;
  data: string;
}

const Relatorio = () => {
  const [historicoViagens, setHistoricoViagens] = useState<Viagem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const obterHistoricoViagens = async () => {
      try {
        const response = await fetch(`http://localhost:8080/relatorio/usuario/162?nome=Fulano`);
        if (!response.ok) throw new Error('Falha ao carregar o histórico de viagens');

        const data: { viagens: Viagem[] } = await response.json();
        setHistoricoViagens(data.viagens); // assume que backend retorna { viagens: [...] }
      } catch (error) {
        setError('Erro ao carregar histórico de viagens.');
        console.error('Erro na requisição para o histórico de viagens', error);
      } finally {
        setLoading(false);
      }
    };

    obterHistoricoViagens();
  }, []);

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-blue-500">
      <section className="w-[90%] max-w-4xl bg-[#000] p-8 rounded-3xl shadow-2xl overflow-auto transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Relatório de Viagens</h1>

        {loading ? (
          <p className="text-xl text-center text-gray-600">Carregando dados...</p>
        ) : error ? (
          <p className="text-xl text-center text-gray-600">{error}</p>
        ) : historicoViagens.length === 0 ? (
          <p className="text-xl text-center text-gray-600">Nenhuma viagem registrada.</p>
        ) : (
          <ul className="space-y-6">
            {historicoViagens.map((viagem, index) => (
              <li key={index} className="text-xl text-gray-700 border-b pb-4">
                <div className="flex items-center justify-between">
                  <span>{viagem.nome}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(viagem.data).toLocaleDateString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button
          className="mt-8 bg-[#42807D] text-white py-3 px-8 rounded-xl font-semibold w-full md:w-auto hover:bg-[#357c66] transition duration-300 transform hover:scale-105"
          onClick={() => router.push('/ViagemInicio')}
        >
          Voltar para Viagem
        </button>
      </section>
    </main>
  );
};

export default Relatorio;
