'use client';

import React, { useState, useEffect } from 'react';

const Relatorio = () => {
  const [historicoViagens, setHistoricoViagens] = useState([]);

  useEffect(() => {
    const viagensPassadas = JSON.parse(localStorage.getItem('historicoViagens') || '[]');
    setHistoricoViagens(viagensPassadas);
  }, []);

  return (
    <div className='w-[50%] mx-auto text-center bg-amber-300'>
      <h1>Relatório de Viagens</h1>
      {historicoViagens.length === 0 ? (
        <p>Nenhuma viagem registrada.</p>
      ) : (
        <ul>
          {historicoViagens.map((viagem, index) => (
            <li key={index}>{viagem}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Relatorio;
