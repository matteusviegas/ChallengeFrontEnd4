'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Importando o Link para navegação
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
  }
  useEffect(() => {
    atualizarInformacoes();

    const intervalo = setInterval(() => {
      atualizarInformacoes();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-[2rem] w-[50%] mx-auto text-center font-semibold mb-6">
        <span className="text-[#42807D]">Linha 9</span> Esmeralda
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        {fluxosAltos > 10 && (
          <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/triste.png" alt="Imagem Fluxo Alto 1" />
        )}

        {fluxosAltos > 5 && fluxosAltos <= 10 && (
          <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/neutro.jpeg" alt="Imagem Fluxo Médio 2" />
        )}

        {fluxosAltos <= 5 && (
          <img className="w-[80px] h-[80px] object-cover rounded-full" src="img_icons/feliz.png" alt="Imagem Fluxo Baixo 3" />
        )}
      </div>

      <p className={`bg-[#42807D] text-center text-white p-2 text-[1rem] mb-6`}>
        {statusOperacao}
      </p>

      <p className="font-bold text-center mb-6 text-[1.2rem]">Lotação</p>
      <div className="flex justify-center gap-4 mb-6">
        <div className="relative w-[80px] h-[40px]">
          <img className="w-full h-full object-contain" src="img_icons/Vector 3.png" alt="Vagão 1" />
          <div
            className="absolute bottom-0 left-0 w-full bg-green-500"
            style={{
              height: `${(fluxosAltos / fluxos.length) * 100}%`,
              transition: 'height 0.3s ease',
            }}
          ></div>
        </div>
        <div className="relative w-[80px] h-[40px]">
          <img className="w-full h-full object-contain" src="img_icons/Vector 3.png" alt="Vagão 2" />
          <div
            className="absolute bottom-0 left-0 w-full bg-green-500"
            style={{
              height: `${(fluxosAltos / fluxos.length) * 100}%`,
              transition: 'height 0.3s ease',
            }}
          ></div>
        </div>
        <div className="relative w-[80px] h-[40px]">
          <img className="w-full h-full object-contain" src="img_icons/Vector 3.png" alt="Vagão 3" />
          <div
            className="absolute bottom-0 left-0 w-full bg-green-500"
            style={{
              height: `${(fluxosAltos / fluxos.length) * 100}%`,
              transition: 'height 0.3s ease',
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#42807D] text-white text-center p-4 rounded-2xl">
        <h2 className="font-bold">Relatório</h2>
        <p>{dataHoje}</p>
        <ul className="flex  flex-col  mt-4 mb-2">
          {fluxos.length > 0 ? (
            fluxos.map((fluxo, index) => (
              <li key={index} className="flex  gap-7 items-center p-1">
                <span className="bg-white text-black  p-2 mr-2 ">{fluxo.hora}</span>
                <span className='text-[1.3rem] text-bold'>{fluxo.fluxo}</span>
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
