import Link from "next/link";

const Esmeralda =()=>{
    return (
        <>
        <div className="text-center ">
        <h1 className="mx-auto mt-6 w-[24%] font-bold text-5xl">ESTAÇÕES <span className="text-[#42807D] ">Linha</span> </h1>
<p className=" mt-10 text-[22px] text-[#42807D] ">Escolha a estação desejada:</p>
     
<div className=" mx-auto relative">
  <ul className="relative flex  w-[20%] z-10">
  <div className="flex top-[40px]">
   <li className=" m-3 p-2 cursor-pointer bg-[#42807D]">Pinheiros</li>
    <li className=" m-3 p-2 cursor-pointer bg-[#42807D]">Pinheiros</li>
    <Link href="/pinheiros">
      <li className="border-[2px] m-3 p-2 cursor-pointer bg-[#42807D]">Pinheiros</li>
    </Link>

  </div>
 
  <div className="flex ">
  <li className=" m-3 p-2 cursor-pointer bg-[#42807D]">Pinheiros</li>
    <li className="border-[2px] mb-7 m-3">Hebraica-Rebouças</li>
    <li className="border-[2px] mb-7 m-3">Hebraica-Rebouças</li>
  </div>

  </ul>
  <img className="h-[1020px] w-[700px] absolute top-100 left-90" src="img/image_Line.png" alt="" />
</div>


        </div>
        <div className="flex text-center flex-col gap-8 ">
          <Link href="/pinheiros "> 
          <button className="bg-[#42807D] w-[18%] mt-[3%] text-[1.4rem] text-white rounded-[9px] p-1 "  type="button" > Consultar Fluxo</button>
       
          </Link>
            
        <Link href="/viagem">
        <button className="bg-[#42807D] w-[18%] cursor-pointer mx-auto text-[1.4rem] text-white rounded-[9px] p-1 "  type="button" > Começar Viagem</button>


        </Link>
    </div>

        </>
    )
    }
    
    export default Esmeralda;