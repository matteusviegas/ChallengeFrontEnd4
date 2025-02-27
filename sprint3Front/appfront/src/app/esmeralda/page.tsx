import Link from "next/link";


const Esmeralda =()=>{
    return (
        <>
        <h1>ESTAÇÕES <span>Linha</span></h1>
        <p>escolha a estação desejada</p>
        <ul className="flex flex-col mx-auto text-center border-[2px] w-[20%] p-5" >
      <li className=" border-[2px] m-2"><Link href="/#"><p>Osasco</p></Link></li>
      <li className=" border-[2px] m-2"><Link href="/#"><p>Presidente Altino </p></Link></li>
      <li className=" border-[2px] m-2"><Link href="/#"><p>Ceasa </p></Link></li>
      <li className=" border-[2px] m-2"><Link href="/#"><p>Vila Lobos-Jaguaré </p></Link></li>
      <li className=" border-[2px] m-2"><Link href="/#"><p>Cidade Universitária </p></Link></li>
      <li className=" border-[2px] m-2"><Link href="/#"><p> Pinheiros</p></Link></li>
    </ul>
        
       <div>
       <Link href="/consultarFluxo">
        <h1>Consultar Fluxo</h1>
        </Link>



        </div> 
        </>
    )
    }
    
    export default Esmeralda;