'use client';

import Link from "next/link";
import Button from "../Botao/Botao";

const HorarioFuncionamento = () => {
  return (
    <main className="bg-[#D9D9D9] min-h-screen flex justify-center items-center">
      <section className="bg-white rounded-[3%] font-bold sm:w-[55%] md:w-[33%] w-[90%] p-5">
        <h1 className="text-center text-3xl mb-5 decoration-violet-50">
          Horário de <span className="text-[#42807D]">Funcionamento</span>
        </h1>

        <div className="bg-[#FFF4E0] p-4 mb-5 rounded-lg text-center text-[#D46A00] text-xl">
          <strong>Atenção!</strong>
          A <span className="font-bold text-[#42807D]">Linha Amarela</span> possui horário de funcionamento diferente das demais. 
          Ela abre às <span className="font-bold">5h da manhã</span>, enquanto as outras linhas abrem às <span className="font-bold">4h da manhã</span>.
        </div>

        <div className="bg-white p-3 mx-auto w-[90%] rounded-2xl">
          <ul className="flex flex-col gap-7 mt-5 w-full mx-auto text-2xl">
            <li className="bg-[#D9D9D9] p-5 rounded-lg">
              <span className="text-[#42807D]">Linha Diamante e Linha Esmeralda (Dias de Semana, Sábados, Domingos e Feriados): </span>
              Das 4h até a meia-noite
            </li>
            <li className="bg-[#D9D9D9] p-5 rounded-lg">
              <span className="text-[#42807D]">Linha Amarela (Dias de Semana, Sábados, Domingos e Feriados): </span>
              Das 5h até a meia-noite
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-[19%]">
          <Link href="/avisos">
          
            <Button
              label="Voltar"
              onClick={() => {}}
              className="bg-[#42807D] cursor-pointer text-white px-26 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HorarioFuncionamento;
