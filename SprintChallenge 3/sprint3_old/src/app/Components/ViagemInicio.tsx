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
  const [grafico, setGrafico] = useState<any>(null);
  const [diamanteStatus, setDiamanteStatus] = useState<any>(null);

  const obterDados = async () => {
    try {
      const fluxoResponse = await fetch('http://localhost:8080/api/previsao?estacao=Esmeralda');
      const fluxoData: Fluxo = await fluxoResponse.json();
      setFluxo(fluxoData);

      const graficoResponse = await fetch('http://localhost:8080/api/previsao/grafico');
      const graficoData = await graficoResponse.json();
      setGrafico(graficoData);

      const diamanteResponse = await fetch('http://localhost:8080/status-linhas/diamante');
      const diamanteData = await diamanteResponse.json();
      setDiamanteStatus(diamanteData);

      if (fluxoData.passageiros > 80) {
        setStatusOperacao('Atenção: Fluxo Alto!');
      } else if (fluxoData.passageiros <= 40) {
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
    obterDados();
    const intervalo = setInterval(obterDados, 5000);
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

        {grafico && (
          <div className="mt-4">
            <h2 className="text-xl">Previsão de Fluxo (Gráfico)</h2>
            <pre>{JSON.stringify(grafico, null, 2)}</pre>
          </div>
        )}

        {diamanteStatus && (
          <div className="mt-4">
            <h2 className="text-xl">Status da Linha Diamante</h2>
            <pre>{JSON.stringify(diamanteStatus, null, 2)}</pre>
          </div>
        )}
      </div>

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
