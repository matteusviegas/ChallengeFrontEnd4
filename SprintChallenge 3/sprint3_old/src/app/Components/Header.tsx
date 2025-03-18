'use client';

import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="text-center flex-col items-center justify-center">
                <h1 className="mx-auto mt-8 w-[50%] mb-5 font-bold text-[3rem]">
                    FUTURE <span className="text-[#42807D]">STATION</span>
                </h1>


      <p className="text-[1.4rem]  w-[90%] mx-auto  sm:text-[1.4rem] font-medium mb-12">
        Selecione a linha desejada para mais informações:
      </p>
                <div className="flex  flex-col  border-2 rounded-2xl p-5 w-[90%] mx-auto gap-12 items-center justify-center mt-[10%]">
                    <Link href="/esmeralda">
                        <p className="bg-[#357063] text-[1.2rem] mx-auto text-white  px-18 py-4 rounded-2xl">
                            Linha 9 Esmeralda
                        </p>
                    </Link>
                    <Link href="#" passHref>
                        <p
                            className="bg-[#6c757d] text-[1.2rem] mx-auto text-white px-18 py-4 rounded-2xl cursor-not-allowed"
                            title="Esta linha está inativa no momento"
                        >
                            Linha 8 Diamante 
                        </p>
                    </Link>

                    <Link href="#" passHref>
                        <p
                            className="bg-[#6c757d] text-[1.2rem] mx-auto text-white px-18 py-4 rounded-2xl cursor-not-allowed"
                            title="Esta linha está inativa no momento"
                        >
                            Linha 4 Amarela
                        </p>
                    </Link>
                </div>

              
                <div className="flex justify-center  mt-[19%]">
                    <Link href="/avisos">
                        <button className="bg-[#42807D] text-white px-26 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
                            Voltar
                        </button>
                    </Link>
                </div>
                <div className="mt-1 mb-[9%]">
                    <button 
                        className=" mx-auto  px-18 py-4 mt-[10%] bg-[#42807D] text-white rounded-lg hover:bg-green-600 transition"
                        onClick={() => window.location.reload()}
                    >
                        Atualizar Página
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
    