'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Relatorio = () => {
  const [historicoViagens, setHistoricoViagens] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const viagensPassadas = JSON.parse(localStorage.getItem('historicoViagens') || '[]');
    setHistoricoViagens(viagensPassadas);
  }, []);

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-full sm:w-4/5 max-w-4xl bg-grey p-8 rounded-3xl shadow-2xl overflow-auto transform transition duration-500 hover:scale-105'>
        <h1 className='text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-black'>
          Relatório de Viagens
        </h1>
        <p className='mb-4 sm:mb-6 text-base sm:text-lg text-start text-bold '>Última viagem</p>

        {historicoViagens.length === 0 ? (
          <p className='text-lg sm:text-xl text-center text-black'>
            Nenhuma viagem registrada.
          </p>
        ) : (
          <div className="h-64 overflow-y-auto">
            <ul className='space-y-6'>
              {historicoViagens.map((viagem, index) => (
                <li key={index} className='text-base sm:text-xl text-black border-b pb-4'>
                  <div className='flex items-center justify-between'>
                    <span>{viagem}</span>
                    <span className='text-sm text-gray-500'>{new Date().toLocaleDateString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button
            className='bg-[#42807D] text-white py-3 px-8 rounded-xl font-semibold w-full md:w-auto hover:bg-[#357c66] transition duration-300 cursor-pointer  transform hover:scale-105'
            onClick={() => router.push('/viagem')}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Relatorio;
