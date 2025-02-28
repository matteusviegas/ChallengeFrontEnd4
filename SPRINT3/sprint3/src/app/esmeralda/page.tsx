import Link from "next/link";

const Esmeralda =()=>{
    return (
        <>
        <div className="text-center">
        <h1 className="mx-auto mt-6 w-[24%] font-bold text-5xl">ESTAÇÕES <span className="text-[#42807D] ">Linha</span> </h1>
<p className=" mt-10 text-[22px] text-[#42807D] ">Escolha a estação desejada:</p>
     
     
     <div className="w-[15%]  mx-auto">
        <ul>
            <li className="border-[2px] m-3 ">Osasco</li>
            <li className="border-[2px] m-3">Presidente Altino</li>
            <li className="border-[2px] m-3">Ceasa</li>
            <li className="border-[2px] m-3">Vila Lobos-Jaguaré</li>
            <li className="border-[2px] m-3">Cidade Universitária</li>
         <Link href="/pinheiros"><li className="border-[2px] m-3 p-2 cursor-pointer bg-[#42807D]">Pinheiros</li> </Link>   
            <li className="border-[2px] m-3">Hebraica-Rebouças</li>
        </ul>
     </div>
        </div>


        </>
    )
    }
    
    export default Esmeralda;