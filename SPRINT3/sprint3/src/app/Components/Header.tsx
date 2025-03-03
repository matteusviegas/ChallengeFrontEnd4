import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="text-center mt-30 flex-col items-center justify-center">
                <h1 className="mx-auto mt-6 w-[30%] mb-13 font-bold text-7xl">FUTURE <span className="text-[#42807D] ">STATION</span> </h1>

                <p className="mt-2 text-3xl mb-7">Selecione a linha desejada:</p>
                <Link href="/esmeralda">
                    <p className="bg-[#42807D] text-[1.8rem] mx-auto mb-24 text-white p-2 rounded-2xl w-[35%]">Linha 9 Esmeralda</p>
                </Link>
                <Link href="/diamante">
                    <p className="bg-[#42807D] text-[1.8rem] mx-auto mb-24 text-white p-2 rounded-2xl w-[35%]">Linha 8 Diamante</p>
                </Link>
                <Link href="/amarela">
                    <p className="bg-black text-[1.8rem] mx-auto mb-14 text-white p-2 rounded-2xl w-[35%]">Linha 4 Amarela</p>
                </Link>
            </div>


        </>
    )
}

export default Header;