const Viagem = () => {
    return (
        <>
            <h1 className="mx-auto mt-6 w-[24%] font-bold text-5xl">COMEÇAR <span className="text-[#42807D] ">VIAGEM</span> </h1>
          
            <div className="flex flex-col justify-center items-center min-h-screen ">
                
                <div className="flex flex-col w-[25%]">
                    <label className="mb-[6%] text-[1.4rem]" htmlFor="opcoes">Selecione a estação de origem:</label>
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

                <div className="flex  flex-col mt-[5%] w-[25%]">
                    <label className="mb-[6%] text-[1.4rem]" htmlFor="opcoes">Selecione a estação que deseja ir:</label>
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
                  <div className=" mt-[5%] flex flex-col gap-8 text-[1.4rem]">
                  <button className="  text-white rounded-2xl bg-[#42807D] p-2 " type="button">Iniciar</button>
                  <button className="p-2 rounded-2xl text-white
                   bg-black" type="button">Exibir Relatorio</button>

                  </div>
            </div>



        </>
    )
}
export default Viagem