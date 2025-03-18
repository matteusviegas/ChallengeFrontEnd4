'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
      if (hora === "00h00" || hora === "23h00") {
        fluxo = 'Fluxo baixo';
      } else {
        fluxo = Math.random() > 0.5 ? 'Fluxo alto' : 'Fluxo baixo';
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
    } else if (numeroDeFluxosBaixos < 9) {
      setStatusOperacao('Fluxo baixo');
    } else {
      setStatusOperacao('Fluxo normal');
    }
  };

  useEffect(() => {
    atualizarInformacoes();

    const intervalo = setInterval(() => {
      atualizarInformacoes();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="w-full max-w-md mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-[2rem] font-semibold">
          <span className="text-[#42807D]">Linha 9</span> Esmeralda
        </h1>
      </header>

      <div className="flex justify-center gap-4 mb-6">
        {fluxosAltos > 10 && (
          <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/triste.png" alt="Fluxo Alto" />
        )}

        {fluxosAltos > 5 && fluxosAltos <= 10 && (
          <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/neutro.jpeg" alt="Fluxo Médio" />
        )}

        {fluxosAltos <= 5 && (
          <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/feliz.png" alt="Fluxo Baixo" />
        )}
      </div>

      <p className={`bg-[#42807D] text-center text-white p-2 text-[1rem] mb-6`}>
        {statusOperacao}
      </p>

      <section className="mb-6">
        <h2 className="font-bold text-center text-[1.2rem] mb-2">Lotação</h2>
        <div className="flex justify-center gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative w-[80px] h-[40px]">
              <img className="w-full h-full object-contain" src="img_icons/Vector 3.png" alt={`Vagão ${index + 1}`} />
              <div
                className="absolute bottom-0 left-0 w-full bg-green-500"
                style={{
                  height: `${(fluxosAltos / fluxos.length) * 100}%`,
                  transition: 'height 0.3s ease',
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#42807D] text-white text-center p-4 rounded-2xl">
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
      </section>

      <div className="flex justify-center mt-6">
        <Link href="/esmeralda">
          <button className="bg-[#42807D] text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
            Voltar ao Início
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HorarioPico;
