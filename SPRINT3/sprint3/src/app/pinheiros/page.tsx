import Link from "next/link";

const Pinheiros=()=>{
    return(
        <>
        <div>
        <h1 className="text-3xl w-[22%] mx-auto  font-semibold text-center mb-6"><span className='-[#42807D]'>Linha 9</span> Esmeralda</h1>
        <img className="h-[200px] mb-[50px] w-[200px] rounded-full object-cover mx-auto" src="img/you.jpg" alt="" />

<p className="bg-[#42807D] text-center  text-white w-[30%] p-2 text-[1.5rem] mx-auto">Operando normalmente</p>
     <p className="font-bold text-center m-8 text-[1.4rem]"> Lotação</p>
    <div className="flex w-[20%] mb-[60px] mx-auto">
    <img className="h-[30px]" src="img/Vector 3.png" alt="vagão1" />
       <img className="h-[30px]" src="img/Vector 3.png" alt="vagão1" />
       <img className="h-[30px]" src="img/Vector 3.png" alt="vagão1" />

    </div>
    <div className="bg-[#42807D] text-white w-[30%] text-center mx-auto p-4 rounded-2xl">
        <h2 className="font-bold">Relátorio</h2>
        <p>24/10/24</p>
        <ul className="mt-4 mb-4">
            <li ><span className="bg-white text-black p-2 mr-2 rounded-t-2xl mr-2 ">05h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 " >06h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 ">07h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 ">16h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 ">15h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2  mr-2 ">05h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 " >06h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 ">07h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 ">16h00</span>Fluxo alto</li>
            <li><span className="bg-white text-black p-2 mr-2 rounded-b-2xl">15h00</span>Fluxo alto</li>
        </ul>

    </div>
<div className="mx-auto mt-[60px] mx-auto">
 
  <Link href="/esmeralda">
  <button className="bg-green-400 p-2 cursor-pointe rounded-2xl  w-[30%]  ">Voltar</button> 

  </Link>
    </div>  

        </div>
        </>
    )
}

export default Pinheiros;