import React from 'react';

const TelaLogin = () => {
  return (
    <>
      <div className=' mx-auto p-6 bg-white border-[2px] w-[430px] border-gray-300 rounded-lg'>
        <h1 className="text-3xl font-semibold text-center mb-4">LOGO</h1>
        <p className="text-center mx-auto text-[1.4rem] w-[70%]  font-bold mb-6">Seu passageiro virtual nas horas certas!</p>
        
        <div className="mb-4">
          <label htmlFor="usuario" className="pl-2 block text-[1.2rem] font-medium text-white">Usuário:</label>
          <input 
            type="text" 
            id="usuario" 
            name="usuario" 
            placeholder="Digite seu usuário" 
            className="w-full bg-[#42807D] p-3 border border-gray-300 rounded-[30px] mt-2 text-[#fff] tex-[1.9rem]"
            />
        </div>

        <div className="mb-4">
          <label htmlFor="senha" className=" pl-2 block text-[1.2rem]  block text-sm font-medium text-gray-700">Senha:</label>
          <input 
            type="password" 
            id="senha" 
            name="senha" 
            placeholder="Digite sua senha" 
            className="w-full bg-[#42807D] p-3 border border-gray-300 rounded-[30px] mt-2 text-[#fff] tex-[1.9rem]"
            />
        </div>

        <div className="mb-6">
          <button 
            className="w-full p-[8px] mt-[30px]  bg-[#42807D] text-white rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Voltar
          </button>
        </div>
<div >
<p  className=" FONT-BOLD pl-3 text-center text-[1.1rem] text-gray-600">
          Não tem uma conta? 
          <span className="text-center text-green-500 cursor-pointer hover:underline"> Crie uma</span>
        </p>
</div>
     

      </div>
    </>
  );
};

export default TelaLogin;