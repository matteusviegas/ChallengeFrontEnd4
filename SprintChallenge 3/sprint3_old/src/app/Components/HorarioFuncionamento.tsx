'use client';

import Link from "next/link";
import Button from "../Botao/Botao";
import { useState } from "react";

const HorarioFuncionamento = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const horarios = [
    {
      title: "Linha 8 - Diamante",
      horario: "Das 4h à meia-noite (00h)",
      descricao:
        "A Linha 8 serve a região de Sorocaba e atende diversas estações no trajeto. Ideal para quem se desloca pela zona oeste.",
    },
    {
      title: "Linha 9 - Esmeralda",
      horario: "Das 4h à meia-noite (00h)",
      descricao:
        "A Linha 9 serve a região sul e é fundamental para o trajeto entre os bairros e o centro de São Paulo.",
    },
    {
      title: "Linha 4 - Amarela",
      horario: "Das 5h à meia-noite (00h)",
      descricao:
        "A Linha 4 é administrada pela ViaQuatro e atende áreas como a Faria Lima e a região da Zona Oeste.",
    },
  ];

  return (
    <main className="bg-[#F4F7FA] min-h-screen flex justify-center items-center p-5">
      <section className="bg-white rounded-[3%] font-bold sm:w-[55%] md:w-[33%] w-[90%] p-6 shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-center text-3xl mb-6">
          Horário de <span className="text-[#4A7C5C]">Funcionamento</span>
        </h1>

        <div className="bg-[#FBE9E7] p-4 mb-6 rounded-lg text-center text-[#D46A00] text-xl shadow-sm">
          <strong>Atenção!</strong>{" "}
          <span className="text-[#4A7C5C] font-bold">
            A Linha Amarela inicia suas operações às{" "}
          </span>
          <strong>5h</strong>, <strong>4h</strong>.
        </div>

        <div className="bg-white p-4 mx-auto w-[90%] rounded-2xl">
          <ul className="flex flex-col gap-6 text-[1.2rem] leading-relaxed">
            {horarios.map((linha, index) => (
              <li
                key={index}
                className={`p-4 rounded-xl shadow-sm transition-all duration-300 cursor-pointer ${
                  expandedIndex === index
                    ? "bg-[#4A7C5C] text-white"
                    : "bg-white hover:bg-[#365d56] hover:text-white"
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold">
                  {linha.title}
                </span>{" "}
                (todos os dias):<br />
                <strong>{linha.horario}</strong>
                {expandedIndex === index && (
                  <p className="mt-3 text-sm">
                    {linha.descricao}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        

        <div className="flex justify-center mt-10">
          <Link href="/header">
            <Button
              label="Voltar"
              onClick={() => {}}
              className="bg-[#4A7C5C] cursor-pointer text-white px-10 py-3 rounded-[9px] text-lg hover:bg-[#365d56] transition-all duration-300"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HorarioFuncionamento;
