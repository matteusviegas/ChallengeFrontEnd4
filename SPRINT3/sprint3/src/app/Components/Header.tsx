import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="text-center flex-col items-center justify-center">
                <h1 className="mx-auto mt-15 w-[48%] mb-5 font-bold text-[2.9rem]">
                    FUTURE <span className="text-[#42807D]">STATION</span>
                </h1>

                <p className="mt-2 text-[1.3rem] mb-7">
                    Selecione a linha desejadas:
                </p>
                <div className="flex flex-col   gap-12 items-center justify-center mt-[10%] ">
                    <Link href="/esmeralda">
                        <p className="bg-[#42807D] text-[1.2rem] mx-auto text-white p-6 rounded-2xl">
                            Linha 9 Esmeralda
                            
                            
                        </p>
                    </Link>
                    <Link href="#" passHref>
                        <p
                            className="bg-gray-400  text-[1.2rem] mx-auto text-white p-5 rounded-2xl p-6  cursor-not-allowed"
                            title="Esta linha está inativa no momento"
                        >
                            Linha 8 Diamante 
                           
                        </p>
                    </Link>

                    <Link href="#" passHref>
                        <p
                            className="bg-gray-400 text-[1.2rem] mx-auto text-white p-5 rounded-2xl p-6  cursor-not-allowed"
                            title="Esta linha está inativa no momento"
                        >
                            Linha 4 Amarela
                           
                        </p>
                    </Link>
                </div>

                <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
            <Link href="/horariofuncionamento">
              <div className="text-center">
                <img className="h-[80px] sm:h-[98px]" src="/img_Icons/image_form.png" alt="Horario de Funcionamento" />
                <h3 className="font-bold text-sm sm:text-lg">Horario de Funcionamento</h3>
              </div>
            </Link>
          </div>
        </div>
            </div>
        </>
    );
};

export default Header;
