'use client';

import Link from "next/link";
import Button from "../Botao/Botao";
import { useState } from "react";

const HorarioFuncionamento = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-[#D9D9D9] min-h-screen flex justify-center items-center p-5">
      <section className="bg-white rounded-[3%] font-bold sm:w-[55%] md:w-[33%] w-[90%] p-6 shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-center text-3xl mb-6">
          Horário de <span className="text-[#42807D]">Funcionamento</span>
        </h1>

        <div className="bg-[#FFF4E0] p-4 mb-6 rounded-lg text-center text-[#D46A00] text-xl shadow-sm">
          <strong>Atenção!</strong> A <span className="text-[#42807D] font-bold">Linha Amarela</span> inicia suas operações às <strong>5h</strong>,
          enquanto as demais linhas abrem às <strong>4h</strong>.
        </div>

        <div className="bg-white p-4 mx-auto w-[90%] rounded-2xl">
          <ul className="flex flex-col gap-6 text-[1.2rem] leading-relaxed">
            <li
              className="bg-[#E6E6E6] p-4 rounded-xl shadow-sm transition-all duration-300 hover:bg-[#42807D] hover:text-white cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="text-[#42807D] font-semibold">Linha 8 - Diamante</span> (todos os dias):<br />
              <strong>Das 4h à meia-noite (00h)</strong>
              {isExpanded && (
                <p className="mt-3 text-gray-700 text-sm">
                  A Linha 8 serve a região de Sorocaba e atende diversas estações no trajeto. Ideal para quem se desloca pela zona oeste.
                </p>
              )}
            </li>

            <li
              className="bg-[#E6E6E6] p-4 rounded-xl shadow-sm transition-all duration-300 hover:bg-[#42807D] hover:text-white cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="text-[#42807D] font-semibold">Linha 9 - Esmeralda</span> (todos os dias):<br />
              <strong>Das 4h à meia-noite (00h)</strong>
              {isExpanded && (
                <p className="mt-3 text-gray-700 text-sm">
                  A Linha 9 serve a região sul e é fundamental para o trajeto entre os bairros e o centro de São Paulo.
                </p>
              )}
            </li>

            <li
              className="bg-[#E6E6E6] p-4 rounded-xl shadow-sm transition-all duration-300 hover:bg-[#42807D] hover:text-white cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="text-[#42807D] font-semibold">Linha 4 - Amarela</span> (todos os dias):<br />
              <strong>Das 5h à meia-noite (00h)</strong>
              {isExpanded && (
                <p className="mt-3 text-gray-700 text-sm">
                  A Linha 4 é administrada pela ViaQuatro e atende áreas como a Faria Lima e a região da Zona Oeste. 
                </p>
              )}
            </li>
          </ul>
        </div>

        <div className="text-sm text-center text-gray-600 mt-6">
          *Horários de operação confirmados com base nas informações oficiais da CPTM e ViaQuatro.
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/avisos">
            <Button
              label="Voltar"
              onClick={() => {}}
              className="bg-[#42807D] cursor-pointer text-white px-10 py-3 rounded-[9px] text-lg hover:bg-[#365d56] transition-all duration-300"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HorarioFuncionamento;
