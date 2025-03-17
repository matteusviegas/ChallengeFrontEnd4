import Link from "next/link";

const HorarioFuncionamento = () => {
  return (
    <div className="bg-[#D9D9D9] min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-[3%] font-bold sm:w-[55%] md:w-[33%] w-[90%] p-5">
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

        <div className="flex justify-center mt-5">
          <Link href="/esmeralda">
            <button className="bg-[#42807D] text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorarioFuncionamento;
