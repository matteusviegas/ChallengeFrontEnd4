import Link from "next/link";

const HorarioFuncionamento = () => {
  return (
    <div className="bg-[#D9D9D9] min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-[3%] font-bold sm:w-[55%] md:w-[33%] w-[80%] p-5">
        <h1 className="text-center text-3xl mb-5 decoration-violet-50">
          Horário de <span className="text-[#42807D]">Funcionamento</span>
        </h1>
        <div className="bg-white p-3 mx-auto w-[90%] rounded-2xl">
          <ul className="flex flex-col gap-7 mt-5 w-full mx-auto text-2xl">
            <li className="bg-[#D9D9D9] p-5 rounded-lg">
              <span className="text-[#42807D]">Domingos Dias de Semana: </span> 
              Das 4h até a meia-noite
            </li>
            <li className="bg-[#D9D9D9] p-5 rounded-lg">
              <span className="text-[#42807D]">Sábados: </span> Das 4h até a meia-noite
            </li>
            <li className="bg-[#D9D9D9] p-5  rounded-lg">
              <span className="text-[#42807D]">Domingos e Feriados: </span> 
              Das 4h até meia-noite
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-5">
          <Link href="/header">
            <button className="bg-[#42807D] text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
              Voltar ao Início
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorarioFuncionamento;
