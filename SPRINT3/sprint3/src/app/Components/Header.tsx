import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="text-center flex-col items-center justify-center">
                <h1 className="mx-auto mt-6 w-[60%] mb-5 lg:mb-13 font-bold text-[2.9rem] lg:text-6xl sm:text-6xl md:text-7xl">
                    FUTURE <span className="text-[#42807D]">STATION</span>
                </h1>

                <p className="mt-2 text-[1.3rem] lg:text-4xl md:text-3xl mb-7">
                    Selecione a linha desejada:
                </p>
                <div className="flex flex-col gap-12 items-center justify-center mt-[10%] w-full">
  <Link href="/esmeralda">
    <p className="bg-[#42807D] lg:text-[1.5rem] text-[1.3rem] mx-auto text-white p-5 lg:p-3 rounded-2xl lg:w-[544px] md:w-[544px] sm:w-[544px]">
      Linha 9 Esmeralda
    </p>
  </Link>
  <Link href="#" passHref>
  <p
    className="bg-gray-400 lg:text-[1.5rem] text-[1.3rem] mx-auto text-white p-5 lg:p-3 rounded-2xl lg:w-[544px] md:w-[544px] sm:w-[544px] cursor-not-allowed"
    title="Esta linha esta inativa o no momento"
  >
    Linha 8 Diamante
  </p>
</Link>

<Link href="#" passHref>
  <p
    className="bg-gray-400 lg:text-[1.5rem] text-[1.3rem] mx-auto text-white p-5 lg:p-3 rounded-2xl lg:w-[544px] md:w-[544px] sm:w-[544px] cursor-not-allowed"
    title="Esta linha esta inativa o no momento"
  >
    Linha 4 Amarela
  </p>
</Link>

</div>

            </div>
        </>
    );
};

export default Header;
