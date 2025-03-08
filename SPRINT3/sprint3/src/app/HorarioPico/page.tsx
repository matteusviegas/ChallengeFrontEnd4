import Link from "next/link";

const HorarioPico = () => {
  return (
    <>
      <div>
        <h1 className="text-[2.2rem] w-[58%] mt-10 mx-auto font-semibold text-center mb-11">
          <span className="text-[#42807D]">Linha 9</span> Esmeralda
        </h1>
        <img
          className="h-[190px] mb-[45px] w-[200px] rounded-full object-cover mx-auto"
          src="img/metro_amarela4.jpg"
          alt="Imagem da Linha 9"
        />

        <p className="bg-[#42807D] text-center text-white w-[77%] p-2 text-[1.2rem] mx-auto">
          Operando normalmente
        </p>

        <p className="font-bold text-center m-8 text-[1.4rem]">Lotação</p>
        <div className="flex flex-wrap gap-4 w-[77%] mb-[60px] mx-auto justify-center gap-2">
          <img className="h-[30px]" src="img_icons/Vector 3.png" alt="Vagão 1" />
          <img className="h-[30px]" src="img_icons/Vector 3.png" alt="Vagão 2" />
          <img className="h-[30px]" src="img_icons/Vector 3.png" alt="Vagão 3" />
        </div>

        <div className="bg-[#42807D] text-white lg:w-[30%] w-[77%] text-center mx-auto p-4 rounded-2xl">
          <h2 className="font-bold">Relatório</h2>
          <p>24/10/24</p>
          <ul className="flex flex-col gap-2 text-[1rem] font-bold mt-4 mb-4">
            <li>
              <span className="bg-white text-black p-2 mr-2 rounded-t-2xl">05h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">06h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">07h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">16h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">15h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">05h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">06h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">07h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2">16h00</span> Fluxo alto
            </li>
            <li>
              <span className="bg-white text-black p-2 mr-2 rounded-b-2xl">15h00</span> Fluxo alto
            </li>
          </ul>
        </div>

       
         
      </div>
    </>
  );
};

export default HorarioPico;
