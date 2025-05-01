'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Botao/Botao';

type Fluxo = {
  horario: string;
  passageiros: number;
};

const PrevisaoPico = () => {
  const [fluxo, setFluxo] = useState<Fluxo | null>(null);
  const [statusOperacao, setStatusOperacao] = useState('');

  // Função para buscar o fluxo de passageiros da API
  const obterFluxo = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/previsao?estacao=Esmeralda'); // URL da API para previsão
      const data: Fluxo = await response.json();
      setFluxo(data); // Armazenando os dados recebidos

      // Determinando o status da operação com base no número de passageiros
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

  // Hook para buscar os dados quando o componente é carregado
  useEffect(() => {
    obterFluxo(); // Chama a função na primeira renderização
    const intervalo = setInterval(obterFluxo, 5000); // Atualiza os dados a cada 5 segundos
    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-[2rem] w-[50%] mx-auto text-center font-semibold mb-6">
        <span className="text-[#42807D]">Linha 9</span> Esmeralda
      </h1>

      {/* Exibe o status da operação (fluxo de passageiros) */}
      <div className="bg-[#42807D] text-center text-white p-2 text-[1rem] mb-6">
        {statusOperacao}
      </div>

      <div className="flex flex-col gap-4">
        {/* Exibe os detalhes do fluxo de passageiros, se disponíveis */}
        {fluxo && (
          <div className="flex justify-between">
            <span>{fluxo.horario}</span>
            <span>
              {/* Classificando o fluxo de passageiros */}
              {fluxo.passageiros > 80
                ? 'Fluxo Alto'
                : fluxo.passageiros <= 40
                ? 'Fluxo Baixo'
                : 'Fluxo Normal'}
            </span>
          </div>
        )}
      </div>

      {/* Botão para voltar */}
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
