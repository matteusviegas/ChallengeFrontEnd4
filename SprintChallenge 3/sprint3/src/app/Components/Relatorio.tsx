'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Relatorio = () => {
  const [historicoViagens, setHistoricoViagens] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const viagensPassadas = JSON.parse(localStorage.getItem('historicoViagens') || '[]');
    setHistoricoViagens(viagensPassadas);
  }, []);

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-blue-500'>
      <div className='w-[90%] max-w-4xl bg-[#000] p-8 rounded-3xl shadow-2xl overflow-auto transform transition duration-500 hover:scale-105'>
        <h1 className='text-4xl font-extrabold mb-8 text-center text-gray-800'>
          Relatório de Viagens
        </h1>
        {historicoViagens.length === 0 ? (
          <p className='text-xl text-center text-gray-600'>
            Nenhuma viagem registrada.
          </p>
        ) : (
          <ul className='space-y-6'>
            {historicoViagens.map((viagem, index) => (
              <li key={index} className='text-xl text-gray-700 border-b pb-4'>
                <div className='flex items-center justify-between'>
                  <span>{viagem}</span>
                  <span className='text-sm text-gray-500'>{new Date().toLocaleDateString()}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button
          className='mt-8 bg-[#42807D] text-white py-3 px-8 rounded-xl font-semibold w-full md:w-auto hover:bg-[#357c66] transition duration-300 transform hover:scale-105'
          onClick={() => router.push('/ViagemInicio')}
        >
          Voltar para Viagem
        </button>
      </div>
    </div>
  );
};

export default Relatorio;
