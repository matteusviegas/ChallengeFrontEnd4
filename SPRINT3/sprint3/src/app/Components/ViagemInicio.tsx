const Viagem = () => {
    return (
      <>
        <h1 className="mx-auto mt-6 w-[80%] text-center lg:w-[24%] font-bold text-[2.4rem] lg:text-5xl">
          COMEÇAR <span className="text-[#42807D]">VIAGEM</span>
        </h1>
  
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
          {/* Seção de seleção da estação de origem */}
          <div className="flex flex-col mb-12 w-full max-w-[600px] mt-8 lg:w-[35%]">
            <label className="mb-2 text-[1.3rem] lg:text-[1.8rem]" htmlFor="origem">
              Selecione a estação de origem:
            </label>
            <select
              id="origem"
              className="border p-2 rounded-lg text-[1rem] lg:text-[1.3rem] focus:ring-2 focus:ring-[#42807D]"
            >
              <option value="">Selecione...</option>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>
  
          <div className="flex flex-col  mb-[8%]  w-full max-w-[600px] mt-6 lg:w-[35%]">
            <label className="mb-2 text-[1.3rem] lg:text-[1.8rem]" htmlFor="destino">
              Selecione a estação de destino:
            </label>
            <select
              id="destino"
              className="border p-2 rounded-lg text-[1rem] lg:text-[1.3rem] focus:ring-2 focus:ring-[#42807D]"
            >
              <option value="">Selecione...</option>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>
  
          <div className="flex flex-col gap-12 lg:mt-10  w-full max-w-[600px] lg:w-[35%]">
            <button className="text-white rounded-2xl bg-[#42807D] p-3 text-[1.2rem] lg:text-[1.4rem]">
              Iniciar
            </button>
            <button className="p-3 rounded-2xl text-white bg-black text-[1.2rem] lg:text-[1.4rem]">
              Exibir Relatório
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Viagem;
  