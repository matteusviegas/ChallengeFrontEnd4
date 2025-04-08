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

  const gerarFluxo = () => {
    const horas = [
      "05h00", "06h00", "07h00", "08h00", "09h00", "10h00", "11h00", "12h00",
      "13h00", "14h00", "15h00", "16h00", "17h00", "18h00", "19h00", "20h00",
      "21h00", "22h00", "23h00", "00h00"
    ];

    return horas.map((hora) => {
      let fluxo;
      if (Math.random() > 0.7) {
        fluxo = 'Fluxo alto';
      } else if (Math.random() > 0.4) {
        fluxo = 'Fluxo normal';
      } else {
        fluxo = 'Fluxo baixo';
      }
      return { hora, fluxo };
    });
  };

  const atualizarInformacoes = () => {
    const dataAtual = new Date().toLocaleDateString();
    setDataHoje(dataAtual);

    const fluxosGerados = gerarFluxo();
    setFluxos(fluxosGerados);

    const numeroDeFluxosAltos = fluxosGerados.filter((fluxo) => fluxo.fluxo === 'Fluxo alto').length;
    const numeroDeFluxosBaixos = fluxosGerados.filter((fluxo) => fluxo.fluxo === 'Fluxo baixo').length;

    setFluxosAltos(numeroDeFluxosAltos);
    setFluxosBaixos(numeroDeFluxosBaixos);

    if (numeroDeFluxosAltos > 10) {
      setStatusOperacao('Atenção: Fluxo Alto!');
    } else if (numeroDeFluxosBaixos > numeroDeFluxosAltos) {
      setStatusOperacao('Fluxo Baixo');
    } else {
      setStatusOperacao('Fluxo Normal');
    }
  };

  useEffect(() => {
    atualizarInformacoes();

    const intervalo = setInterval(() => {
      atualizarInformacoes();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const calcularAlturaGrafico = () => {
    const maxHeight = 100;
    if (fluxosAltos > 10) {
      return maxHeight;
    } else if (fluxosBaixos > fluxosAltos) {
      return 30;
    } else {
      return 50;
    }
  };

  const corGrafico = () => {
    if (fluxosAltos > 10) {
      return 'bg-red-600';
    } else if (fluxosBaixos > fluxosAltos) {
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
        {[...Array(3)].map((_, index) => (
          <div key={index} className="relative w-[80px] h-[200px] bg-gray-200 rounded-lg overflow-hidden">
            <div
              className={`absolute bottom-0 w-full transition-all ease-in-out duration-300 ${corGrafico()}`}
              style={{
                height: `${calcularAlturaGrafico()}%`,
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="bg-[#42807D] text-white text-center p-4 rounded-2xl">
        <h2 className="font-bold">Relatório</h2>
        <p>{dataHoje}</p>
        <ul className="flex flex-col mt-4 mb-2">
          {fluxos.length > 0 ? (
            fluxos.map((fluxo, index) => (
              <li key={index} className="flex gap-7 items-center p-1">
                <span className="bg-white text-black p-2 mr-2">{fluxo.hora}</span>
                <span className='text-[1.3rem] font-bold'>{fluxo.fluxo}</span>
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
