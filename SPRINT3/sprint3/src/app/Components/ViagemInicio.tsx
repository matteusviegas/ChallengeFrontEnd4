const Viagem = () => {
    return (
        <>
            <h1 className="mx-auto mt-6 w-[56%] text-center lg:w-[24%] font-bold text-[2.4rem] lg:text-5xl">COMEÇAR <span className="text-[#42807D] ">VIAGEM</span> </h1>
          
            <div className="flex flex-col justify-center items-center min-h-screen ">
                
                <div className="flex flex-col lg:w-[35%]">
                    <label className="mb-[6%]  text-[1.3rem] lg:text-[1.9rem]" htmlFor="opcoes">Selecione a estação de origem:</label>
                    <select
                        id="opcoes"
                        className="border p-2 rounded"
                    >
                        <option value="">Selecione...</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>


                </div>

                <div className="flex  flex-col mt-[5%] lg:w-[35%]">
                    <label className="mb-[6%]  text-[1.3rem] lg:text-[1.8rem]" htmlFor="opcoes">Selecione a estação que deseja ir:</label>
                    <select
                        id="opcoes"
                        className="border p-2 rounded"
                    >
                        <option value="">Selecione...</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>


                </div>
                  <div className="lg:mt-[10%] mt-[17%] flex flex-col gap-15 lg:gap-9 text-[1.4rem]">
                  <button className="  text-white rounded-2xl bg-[#42807D] p-2 " type="button">Iniciar</button>
                  <button className="p-2 rounded-2xl text-white
                   bg-black" type="button">Exibir Relatorio</button>

                  </div>
            </div>



        </>
    )
}
export default Viagem