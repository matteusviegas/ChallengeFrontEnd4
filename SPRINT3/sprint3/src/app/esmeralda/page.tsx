import Link from "next/link";

const Esmeralda = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="mx-auto mt-12 w-[50%] font-bold text-[2.3rem]">
          ESTAÇÕES <span className="text-[#42807D]">LINHAS</span>
        </h1>
        <p className="mt-8 mb-10 text-[1.4rem] text-[#42807D]">
          Escolha a estação desejada:
        </p>

        <div className="mx-auto mt-[4%] relative">
          <ul className="relative mx-auto flex flex-col gap-4 w-[90%] z-10">
            <Link href="/Pinheiros">
              <li className="border-[2px] m-3 p-2 text-xl cursor-pointer bg-[#42807D] rounded-[27px]">
                Pinheiros
              </li>
            </Link>
            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px]">Pinheiros</li>
            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px]">Pinheiros</li>
            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px]">Pinheiros</li>
            <li className="m-3 p-2 text-xl bg-gray-400 rounded-[27px]">Pinheiros</li>
          </ul>
        </div>
      </div>

      <div className="flex text-center mt-17 mb-5 flex-col gap-9">
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
      </div>
    </>
  );
};

export default Esmeralda;
