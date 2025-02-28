import Link from "next/link";

const Header =()=>{
return (
    <>
        <h1 className="mx-auto mt-6 w-[30%] font-bold text-5xl">FUTURE <span className="text-[#42807D] ">STATION</span> </h1>

    <p className="mt-2 text-2xl mb-6 ">Selecione a linha desejada:</p>
    <Link href="/esmeralda">
   <p  className="bg-[#42807D]  mx-auto mb-14 text-white p-2 rounded-2xl w-[20%]">Linha 9 Esmeralda</p>
    </Link>
    <Link href="/diamante">
   <p  className="bg-[#42807D]  mx-auto mb-14 text-white p-2 rounded-2xl w-[20%]">Linha 8 Diamante</p>
    </Link>
    <Link href="/amarela">
   <p  className="bg-black  mx-auto mb-4 text-white p-2 rounded-2xl w-[20%]">Linha 4 Amarela</p>
    </Link>
    <div>
        <button className="bg-blue-500"  type="button" > Consultar Fluxo</button>
        <button type="button" >Começar </button>
    </div>
    </>
)
}

export default Header;