import Link from "next/link";

const Esmeralda = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="mx-auto mt-6 w-[60%] lg:w-[24%] font-bold text-[2rem] lg:text-5xl">
          ESTAÇÕES <span className="text-[#42807D]">Linha</span>
        </h1>
        <p className="mt-8 mb-10 lg:mt-10 text-[22px] text-[#42807D]">
          Escolha a estação desejada:
        </p>

        <div className="mx-auto mt-[4%] relative">
          <ul className="relative mx-auto flex flex-col w-[80%] lg:w-[20%] z-10">
            <li className="m-3 p-2 bg-gray-400 rounded-[27px]">Pinheiros</li>
            <li className="m-3 p-2 bg-gray-400 rounded-[27px]">Pinheiros</li>
            <Link href="/pinheiros">
              <li className="border-[2px] m-3 p-2 cursor-pointer bg-[#42807D] rounded-[27px]">
                Pinheiros
              </li>
            </Link>
            <li className="m-3 p-2 bg-gray-400 rounded-[27px]">Pinheiros</li>
            <li className="m-3 p-2 bg-gray-400 rounded-[27px]">Pinheiros</li>
            <li className="m-3 p-2 bg-gray-400 rounded-[27px]">Pinheiros</li>
          </ul>
        </div>
      </div>

      <div className="flex text-center mt-10 mb-5 flex-col gap-8">
        <Link href="/pinheiros">
          <button className="bg-[#42807D] w-[65%] lg:w-[18%] mt-[3%] text-[1.3rem] text-white rounded-[9px] p-2 cursor-pointer" type="button">
            Consultar Fluxo
          </button>
        </Link>

        <Link href="/viagem">
          <button className="bg-[#42807D] w-[65%] lg:w-[18%] mt-[3%] text-[1.3rem] text-white rounded-[9px] p-2 cursor-pointer" type="button">
            Começar Viagem
          </button>
        </Link>
      </div>
    </>
  );
};

export default Esmeralda;
