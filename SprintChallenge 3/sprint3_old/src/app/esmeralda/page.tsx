'use client';

import Link from "next/link";
import Button from "../Botao/Botao";

const Esmeralda = () => {
  return (
    <main className="text-center">
      <header>
        <h1 className="mx-auto mt-12 w-[50%] font-bold text-[2.3rem]">
          ESTAÇÕES <span className="text-[#42807D]">LINHAS</span>
        </h1>
      </header>

      <section>
      <div className="flex justify-center mt-[19%]">
          <Link href="/header">
          
            <Button
              label="Voltar para a estação"
              onClick={() => {}}
              className="bg-[#42807D] cursor-pointer text-white px-10 py-4 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
            />
          </Link>
        </div>
        <div className="border-3 mt-[9%] p-4 w-[80%] flex flex-col gap-7 mx-auto rounded-2xl">
          <p className="mt-[4%] text-[1.5rem] text-[#42807D]">
            Escolha a estação desejada:
          </p>
          <Link href="/HorarioPico">
            <button className="bg-[#42807D] w-[60%] mt-[4%] text-[1rem] text-white rounded-[9px] p-4 cursor-pointer" type="button">
              Consultar Fluxo
            </button>
          </Link>

          <Link href="/viagem">
            <button className="bg-[#42807D] mb-10 w-[60%] mt-[2%] text-[1rem] text-white rounded-[9px] p-4 cursor-pointer" type="button">
              Começar Viagem
            </button>
          </Link>
        </div>
      </section>

      <section className="flex text-center mt-10 mb-5 mb-[33%] flex-col gap-9">
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center border-3 mx-auto rounded-2xl p-5 w-[80%] mt-[8%] gap-6 sm:gap-10">
            <Link href="/horariofuncionamento">
              <div className="text-center">
                <img className="h-[80px] sm:h-[98px] mx-auto" src="/img_Icons/horario.png" alt="Horario de Funcionamento" />
                <h3 className="font-bold mt-[5%] text-[1.4rem] sm:text-lg">Horario de Funcionamento</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-[1%] relative">
        <h3 className="font-bold text-[1.9rem] mb-10">Estações</h3>
        <ul className="relative mx-auto flex flex-col gap-4 w-[90%] z-10">
          <Link href="/pinheiros">
            <li className="border-[2px] m-3 p-2 text-xl cursor-pointer bg-[#42807D] text-white rounded-[27px]">
              Pinheiros
            </li>
          </Link>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Osasco
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Presidente
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Altino
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Ceasa
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Vila Lobos
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Jaguaré
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Cidade Universitária
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Berrini
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Morumbi
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Granja Julieta
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Santo Amaro
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Socorro
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Jurubatuba
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Autódromo
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Grajaú
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Mendes
          </li>

          <li className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
            Vila Natal
          </li>
        </ul>
      </section>

      <footer>
        <div className="flex mt-10 justify-center mt-6 mb-[33%]">
          <Link href="/header">
            <button className="bg-[#42807D] text-white px-23 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
              Voltar
            </button>
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Esmeralda;
