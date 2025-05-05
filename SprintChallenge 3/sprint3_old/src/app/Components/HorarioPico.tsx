'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Botao/Botao';

type Fluxo = {
  estacao: string;
  horario: string;
  passageiros: number;
};

const PrevisaoPico = () => {
  const [fluxo, setFluxo] = useState<Fluxo | null>(null);
  const [statusOperacao, setStatusOperacao] = useState('');

  // Função para buscar o fluxo de passageiros da API
  const obterFluxo = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/previsao?estacao=Osasco&horario=08:00');
      if (!response.ok) throw new Error('Erro HTTP: ' + response.status);
      const data: Fluxo = await response.json();
      console.log('Resposta da API:', data);
      setFluxo(data);

      // Determina o status com base na quantidade de passageiros
      if (data.passageiros > 80) {
        setStatusOperacao('Atenção: Fluxo Alto!');
      } else if (data.passageiros <= 40) {
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
    obterFluxo();
    const intervalo = setInterval(obterFluxo, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-[2rem] w-[50%] mx-auto text-center font-semibold mb-6">
        <span className="text-[#42807D]">Estação</span> {fluxo?.estacao || 'Carregando...'}
      </h1>

      <div className="bg-[#42807D] text-center text-white p-2 text-[1rem] mb-6">
        {statusOperacao}
      </div>

      <div className="flex flex-col gap-4">
        {fluxo && (
          <div className="flex justify-between">
            <span>{fluxo.horario}</span>
            <span>
              {fluxo.passageiros > 80
                ? 'Fluxo Alto'
                : fluxo.passageiros <= 40
                ? 'Fluxo Baixo'
                : 'Fluxo Normal'}
            </span>
          </div>
        )}
      </div>
return (
  <div className="p-4">
    <form className="flex flex-col gap-4">
      <label className="flex flex-col">
        Estação:
        <select className="border p-2">
          <option>Osasco</option>
          <option>Pinheiros</option>
        </select>
      </label>

      <label className="flex flex-col">
        Horário:
        <input type="time" className="border p-2" />
      </label>

      <button className="bg-blue-500 text-white p-2 rounded">Buscar</button>
    </form>
  </div>
);

      <div className="flex justify-center mt-4">
        <Link href="/esmeralda">
          <Button
            label="Voltar"
            onClick={() => {}}
            className="bg-[#42807D] cursor-pointer text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default PrevisaoPico;
