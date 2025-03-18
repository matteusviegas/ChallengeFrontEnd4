import Link from "next/link";

const Acessibilidade = () => {
  return (
    <div className="mt-[33%]">
      <img  src="/img_Icons/acess.png" alt="" className="mx-auto" />
      <h1 className="text-center font-bold">ACESSIBILIDADE</h1>

      <div className="flex flex-col bg-[#42807D] text-white w-[80%] mx-auto my-4 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center mb-4">
          <img src="img_Icons/image1.png" alt="" className="mb-2 sm:mb-0 sm:mr-4" />
          <span className="text-[1.2rem] sm:text-[1.5rem] font-bold">| Elevadores</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center mb-4">
          <img src="img_Icons/image2.png" alt="" className="mb-2 sm:mb-0 sm:mr-4" />
          <span className="text-[1.2rem] sm:text-[1.5rem] font-bold">| Escadas Rolantes</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center mb-4">
          <img src="img_Icons/imags.png" alt="" className="mb-2 sm:mb-0 sm:mr-4" />
          <span className="text-[1.2rem] sm:text-[1.5rem] font-bold">| Sinalização</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center mb-4">
          <img src="img_Icons/imagem.png" alt="" className="mb-2 sm:mb-0 sm:mr-4" />
          <span className="text-[1.2rem] sm:text-[1.5rem] font-bold">| Assistência ao Usuário</span>
        </div>
    
    
      </div>

      <div className="flex justify-center mt-6">
        <Link href="/pinheiros">
          <button className="bg-[#42807D]  cursor-pointer  text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
            Voltar
          </button>
        </Link>
      </div>
      
    </div>
    
  );
};

export default Acessibilidade;
