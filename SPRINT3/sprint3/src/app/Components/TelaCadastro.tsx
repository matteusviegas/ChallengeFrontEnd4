import React from 'react';

const TelaCadastro = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">FUTURE <span className='-[#42807D]'>STATION</span></h1>

      <div className="mb-4">
        <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Nome de Usuário:</label>
        <input 
          type="text" 
          id="usuario" 
          name="usuario" 
          placeholder="Usuário" 
          className="w-full bg-[#42807D] p-3 border border-gray-300 rounded-[30px] mt-2 text-[#fff] tex-[1.9rem]"
        />
        </div>

<div className="mb-4">
  <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">Data de Nascimento:</label>
  <input 
    type="date" 
    id="dataNascimento" 
    name="dataNascimento" 
    className="w-full bg-[#42807D] p-3 border border-gray-300 rounded-[30px] mt-2 text-[#fff] tex-[1.9rem]"
    />
</div>

<div className="mb-4">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="Digite seu email" 
    className="w-full bg-[#42807D] p-3 border border-gray-300 rounded-[30px] mt-2 text-[#fff] tex-[1.9rem]"
    />
</div>
<div className="mb-4">
        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha:</label>
        <input 
          type="password" 
          id="senha" 
          name="senha" 
          placeholder="Digite sua senha" 
          className="w-full bg-[#42807D] p-3 border border-gray-300 rounded-[30px] mt-2 text-[#fff] tex-[1.9rem]"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">Confirmar Senha:</label>
        <input 
          type="password" 
          id="confirmarSenha" 
          name="confirmarSenha" 
          placeholder="Confirme sua senha" 
          className="w-full bg-[#42807D] p-3 border border-gray-300 rounded-[30px] mt-2 text-[#fff] tex-[1.9rem]"
        />
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600">
         <input 
         type="checkbox" 
         name="check"
          id="check" 
          className='p-4'
          />
          Ao continuar, você aceita nossa <button className="text-blue-500 hover:underline focus:outline-none">Política de Privacidade</button> e <button className="text-blue-500 hover:underline focus:outline-none">Termos de Uso</button>.
        </p>
      </div>

      <div className="mb-6">
        <button 
          className="w-full p-3 bg-[#42807D] text-white rounded-[30px] hover:bg-green-500  "
        >
          Cadastrar
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">Já tem uma conta? <button className="text-[#42807D] hover:underline focus:outline-none">Login</button></p>
      </div>
    </div>
  );
};

export default TelaCadastro;