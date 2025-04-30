'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Botao/Botao';

const HorarioPico = () => {
  const [fluxos, setFluxos] = useState<{ hora: string; fluxo: string }[]>([]);
  const [dataHoje, setDataHoje] = useState('');
  const [statusOperacao, setStatusOperacao] = useState('Operando normalmente');
  const [fluxosAltos, setFluxosAltos] = useState(0);
  const [fluxosBaixos, setFluxosBaixos] = useState(0);

  const atualizarInformacoes = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/previsao?estacao=Esmeralda');
      const data = await response.json();

      const fluxosFormatados = Array.isArray(data)
        ? data.map((item: any) => {
            let fluxo;
            if (item.passageiros > 80) {
              fluxo = 'Fluxo alto';
            } else if (item.passageiros > 40) {
              fluxo = 'Fluxo normal';
            } else {
              fluxo = 'Fluxo baixo';
            }

            return {
              hora: item.horario,
              fluxo: fluxo,
            };
          })
        : [];

      setFluxos(fluxosFormatados);
      setDataHoje(new Date().toLocaleDateString());

      const altos = fluxosFormatados.filter((f) => f.fluxo === 'Fluxo alto').length;
      const baixos = fluxosFormatados.filter((f) => f.fluxo === 'Fluxo baixo').length;

      setFluxosAltos(altos);
      setFluxosBaixos(baixos);

      if (altos > 10) {
        setStatusOperacao('Atenção: Fluxo Alto!');
      } else if (baixos > altos) {
        setStatusOperacao('Fluxo Baixo');
      } else {
        setStatusOperacao('Fluxo Normal');
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API Java:', error);
      setStatusOperacao('Erro ao carregar previsão');
    }
  };

  useEffect(() => {
    atualizarInformacoes();
    const intervalo = setInterval(() => {
      atualizarInformacoes();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const calcularAlturaGrafico = (fluxo: string) => {
    const maxHeight = 100;
    if (fluxo === 'Fluxo alto') {
      return 100; // 100% de altura para fluxo alto
    } else if (fluxo === 'Fluxo baixo') {
      return 30; // 30% de altura para fluxo baixo
    } else {
      return 50; // 50% de altura para fluxo normal
    }
  };

  const corGrafico = (fluxo: string) => {
    if (fluxo === 'Fluxo alto') {
      return 'bg-red-600';
    } else if (fluxo === 'Fluxo baixo') {
      return 'bg-green-600';
    } else {
      return 'bg-yellow-400';
    }
  };

  const exibirCarinha = () => {
    if (fluxosAltos > 10) {
      return <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/triste.png" alt="Imagem Fluxo Alto" />;
    } else if (fluxosBaixos > fluxosAltos) {
      return <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/feliz.png" alt="Imagem Fluxo Baixo" />;
    } else {
      return <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/neutro.jpeg" alt="Imagem Fluxo Normal" />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-[2rem] w-[50%] mx-auto text-center font-semibold mb-6">
        <span className="text-[#42807D]">Linha 9</span> Esmeralda
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        {exibirCarinha()}
      </div>

      <p className={`bg-[#42807D] text-center text-white p-2 text-[1rem] mb-6`}>
        {statusOperacao}
      </p>

      <p className="font-bold text-center mb-6 text-[1.2rem]">Gráfico de Fluxo</p>

      <div className="flex justify-center gap-6 mb-6">
        {fluxos.length > 0 ? (
          fluxos.map((fluxo, index) => (
            <div key={index} className="relative w-[80px] h-[200px] bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`absolute bottom-0 w-full transition-all ease-in-out duration-300 ${corGrafico(fluxo.fluxo)}`}
                style={{
                  height: `${calcularAlturaGrafico(fluxo.fluxo)}%`,
                }}
              ></div>
            </div>
          ))
        ) : (
          <div>Carregando fluxos...</div>
        )}
      </div>

      <div className="bg-[#42807D] text-white text-center p-4 rounded-2xl">
        <h2 className="font-bold">Relatório</h2>
        <p>{dataHoje}</p>
        <ul className="flex flex-col mt-4 mb-2">
          {fluxos.length > 0 ? (
            fluxos.map((fluxo, index) => (
              <li key={index} className="flex gap-7 items-center p-1">
                <span className="bg-white text-black p-2 mr-2">{fluxo.hora}</span>
                <span className="text-[1.3rem] font-bold">{fluxo.fluxo}</span>
              </li>
            ))
          ) : (
            <li>Carregando fluxos...</li>
          )}
        </ul>
      </div>

      <div className="flex justify-center mt-[19%]">
        <Link href="/esmeralda">
          <Button
            label="Voltar"
            onClick={() => {}}
            className="bg-[#42807D] cursor-pointer text-white px-26 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default HorarioPico;
