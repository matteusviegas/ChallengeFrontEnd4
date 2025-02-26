function Formulario() {
    return (
        <>
          
            {/* Formulário de Sugestões */}
            <section className="py-10 bg-gray-100 text-center">
                <div className="max-w-xl mx-auto bg-[#42807D]  p-8 rounded-lg shadow-lg">
                    <h2 className="text-[2rem] mb-8 text-white">Formulário de Sugestões</h2>
                    <form className="text-start ">
                        <div className="mb-6">
                            <label htmlFor="name" className="text-lg text-white-600  text-[1.4rem] block mb-5">Nome:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Digite seu nome" 
                                className="w-full p-3 text-lg border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-lg text-white-600 text-[1.4rem] block mb-5 ">E-mail:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Digite seu e-mail" 
                                className="w-full p-3 text-lg border border-white-300 rounded-md"
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="suggestion" className="text-lg text-white-600 text-[1.4rem] block mb-4">Sugestão:</label>
                            <textarea 
                                id="suggestion" 
                                name="suggestion" 
                                placeholder="Digite sua sugestão" 
                                className="w-full p-3 text-lg border border-gray-300 rounded-md h-32"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="bg-teal-600 font-bold text-white py-3 px-5 text-lg rounded-md w-full"
                        >
                            Enviar Sugestão
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Formulario;
