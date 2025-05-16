'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Relatorio = () => {
  const [historicoViagens, setHistoricoViagens] = useState<any[]>([]); // Mudança para um array de qualquer tipo
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchHistorico = async () => {
      try {
        const response = await fetch('http://localhost:8080/relatorio/usuario/162?usuario=Fulano');
        if (!response.ok) {
          throw new Error('Falha ao carregar histórico');
        }
        const dados = await response.json();
        
        if (Array.isArray(dados)) {
          setHistoricoViagens(dados);
        } else {
          setHistoricoViagens([]); 
        }
      } catch (error) {
        setErro('Erro ao carregar histórico');
      } finally {
        setCarregando(false);
      }
    };

    fetchHistorico();
  }, []);

  const limparHistorico = () => {
    setHistoricoViagens([]);
    setErro('');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[90%] sm:w-/5 max-w-4xl bg-white p-8 rounded-3xl shadow-2xl overflow-auto transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-black">Relatório de Viagens</h1>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-start font-semibold">Última viagem:</p>

        {carregando ? (
          <p className="text-lg sm:text-xl text-center text-black">Carregando...</p>
        ) : erro ? (
          <p className="text-lg sm:text-xl text-center text-red-500">{erro}</p>
        ) : historicoViagens.length === 0 ? (
          <p className="text-lg sm:text-xl text-center text-black">Nenhuma viagem registrada.</p>
        ) : (
          <div className="h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-teal-100">
            <ul className="space-y-6">
              {historicoViagens.map((viagem, index) => (
                <li key={index} className="text-base sm:text-xl text-black border-b pb-4">
                  <div className="flex items-center justify-between">
                    <span>{viagem}</span>
                    <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col w-[68%] mx-auto gap-7 justify-center mt-8 space-x-4">
          <button
            className="bg-[#42807D] text-white py-3 px-8 rounded-xl font-semibold w-full md:w-auto hover:bg-[#357c66] transition duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => router.push('/esmeralda')}
          >
            Voltar
          </button>
          <button
            className="bg-[#469894] text-white py-3 px-8 rounded-xl font-semibold w-full md:w-auto hover:bg-red-400 transition duration-300 cursor-pointer transform hover:scale-105"
            onClick={limparHistorico}
          >
            Limpar Histórico
          </button>
        </div>
      </div>
    </div>
  );
};

export default Relatorio;
