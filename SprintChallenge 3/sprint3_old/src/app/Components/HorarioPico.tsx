'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Botao/Botao';

const HorarioPico = () => {
  const [fluxos, setFluxos] = useState([]);
  const [statusOperacao, setStatusOperacao] = useState('');
  const [fluxosAltos, setFluxosAltos] = useState(0);
  const [fluxosBaixos, setFluxosBaixos] = useState(0);

  const obterFluxos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/previsao?estacao=Esmeralda');
      const data = await response.json();
      setFluxos(data);

      const altos = data.filter((f) => f.passageiros > 80).length;
      const baixos = data.filter((f) => f.passageiros <= 40).length;

      setFluxosAltos(altos);
      setFluxosBaixos(baixos);

      if (altos > 2) {
        setStatusOperacao('Atenção: Fluxo Alto!');
      } else if (baixos > altos) {
        setStatusOperacao('Fluxo Baixo');
      } else {
        setStatusOperacao('Operando normalmente');
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API Java:', error);
      setStatusOperacao('Erro ao carregar previsão');
    }
  };

  useEffect(() => {
    obterFluxos();
    const intervalo = setInterval(() => {
      obterFluxos();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-[2rem] w-[50%] mx-auto text-center font-semibold mb-6">
        <span className="text-[#42807D]">Linha 9</span> Esmeralda
      </h1>

      <div className="bg-[#42807D] text-center text-white p-2 text-[1rem] mb-6">
        {statusOperacao}
      </div>

      <div className="flex flex-col gap-4">
        {fluxos.map((fluxo, index) => (
          <div key={index} className="flex justify-between">
            <span>{fluxo.horario}</span>
            <span>{fluxo.passageiros > 80 ? 'Fluxo Alto' : fluxo.passageiros <= 40 ? 'Fluxo Baixo' : 'Fluxo Normal'}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/esmeralda">
          <Button
            label="Voltar."
            onClick={() => {}}
            className="bg-[#42807D] cursor-pointer text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default HorarioPico;
