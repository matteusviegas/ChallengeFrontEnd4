'use client';

import Link from "next/link";

const Esmeralda = () => {
  return (
    <>
      <div className="text-center">
        <div>
          <img src="" alt="" />
        </div>
        <h1 className="mx-auto mt-12 w-[50%] font-bold text-[2.3rem]">
          ESTAÇÕES <span className="text-[#42807D]">LINHAS</span>
        </h1>
        <p className="mt-8 mb-10 text-[1.4rem] text-[#42807D]">
          Escolha a estação desejada:
        </p>

        <div className="mx-auto mt-[4%] relative">
          <ul className="relative mx-auto flex flex-col gap-4 w-[90%] z-10">
            <Link href="/pinheiros">
              <li className="border-[2px] m-3 p-2 text-xl cursor-pointer bg-[#42807D] rounded-[27px]">
                Pinheiros
              </li>
            </Link>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Osasco
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Presidente
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Altino
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Ceasa
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Vila Lobos
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Jaguaré
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Cidade Universitária
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Berrini
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Morumbi
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Granja Julieta
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Santo Amaro
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Socorro
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Jurubatuba
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Autódromo
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Grajaú
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Mendes
            </li>

            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100">
                🚫
              </div>
              Vila Natal
            </li>
          </ul>
        </div>
      </div>

      <div className="flex text-center mt-17 mb-5  mb-[33%] flex-col gap-9">
        <Link href="/HorarioPico">
          <button className="bg-[#42807D] w-[60%] mt-[4%] text-[1rem] text-white rounded-[9px] p-4 cursor-pointer" type="button">
            Consultar Fluxo
          </button>
        </Link>

        <Link href="/viagem">
          <button className="bg-[#42807D] w-[60%] mt-[2%] text-[1rem] text-white rounded-[9px] p-4 cursor-pointer" type="button">
            Começar Viagem
          </button>
        </Link>
        <div>
        <div className="flex justify-center mt-6">
        <Link href="/header">
          <button className="bg-[#42807D] text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
            Voltar a estação
          </button>
        </Link>
      </div>
        </div>
      </div>
    </>
  );
};

export default Esmeralda;
