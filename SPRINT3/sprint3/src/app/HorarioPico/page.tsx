'use client';

import React, { useState, useEffect } from 'react';

const HorarioPico = () => {
  const [fluxos, setFluxos] = useState([]);
  const [dataHoje, setDataHoje] = useState('');
  
  const gerarFluxo = () => {
    const horas = [
      "05h00", "06h00", "07h00", "08h00", "09h00", "10h00", "11h00", "12h00",
      "13h00", "14h00", "15h00", "16h00", "17h00", "18h00", "19h00", "20h00",
      "21h00", "22h00", "23h00", "00h00"
    ];

    return horas.map((hora, index) => ({
      hora,
      fluxo: index % 2 === 0 ? 'Fluxo alto' : 'Fluxo baixo',
    }));
  };

  useEffect(() => {
    const dataAtual = new Date().toLocaleDateString();
    setDataHoje(dataAtual);
    
    const fluxosGerados = gerarFluxo();
    setFluxos(fluxosGerados);

    const intervalo = setInterval(() => {
      const fluxosAtualizados = gerarFluxo();
      setFluxos(fluxosAtualizados);
    }, 10000); // Atualiza a cada 10 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div className="w-full max-w-md mx-auto p-4">
        <h1 className="text-[2rem] text-center font-semibold mb-6">
          <span className="text-[#42807D]">Linha 9</span> Esmeralda
        </h1>

        <p className="bg-[#42807D] text-center text-white p-2 text-[1rem] mb-6">
          Operando normalmente
        </p>

        <p className="font-bold text-center mb-6 text-[1.2rem]">Lotação</p>
        <div className="flex justify-center gap-4 mb-6">
          <img className="h-[25px]" src="img_icons/Vector 3.png" alt="Vagão 1" />
          <img className="h-[25px]" src="img_icons/Vector 3.png" alt="Vagão 2" />
          <img className="h-[25px]" src="img_icons/Vector 3.png" alt="Vagão 3" />
        </div>

        <div className="bg-[#42807D] text-white text-center p-4 rounded-2xl">
          <h2 className="font-bold">Relatório</h2>
          <p>{dataHoje}</p>
          <ul className="flex flex-col gap-2 mt-4 mb-4">
            {fluxos.map((fluxo, index) => (
              <li key={index}>
                <span className="bg-white text-black p-2 mr-2 rounded-t-2xl">{fluxo.hora}</span>
                {fluxo.fluxo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HorarioPico;
