'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TelaLogin = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      
      if (usuario === user.usuario && senha === user.senha) {
        setErroLogin('');
        router.push('/perfil');
      } else {
        setErroLogin('Usuário ou senha incorretos!');
      }
    } else {
      setErroLogin('Nenhum usuário cadastrado!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  text-start px-4">
      <div className='mx-auto p-8 border-6 border-solid border-green-800 w-full lg:w-[700px]   lg:h-[644px] bg-white border-[2px] w-full  border-gray-300 rounded-lg'>
        <h1 className="text-2xl font-semibold text-center mb-4">LOGO</h1>

        {erroLogin && <p className="text-red-500 p-5 text-xl">{erroLogin}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-15 lg:w-[90%] mx-auto">
            <label htmlFor="usuario" className="pl-2 block text-[1.1rem] font-medium text-gray-700">Usuário:</label>
            <input 
              type="text" 
              id="usuario" 
              name="usuario" 
              placeholder="Digite seu usuário" 
              className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-[#fff] lg:text-[1.2rem] sm:text-[1rem] sm:p-3"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="senha" className="pl-2 block text-[1.1rem] font-medium text-gray-700">Senha:</label>
            <input 
              type="password" 
              id="senha" 
              name="senha" 
              placeholder="Digite sua senha" 
              className="w-full bg-[#42807D] text-[1.2rem] p-4 border border-gray-300 rounded-[30px] mt-2 text-[#fff] sm:text-[1rem] sm:p-3"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="mb-6 mt-6">
            <button 
              type="submit"
              className="w-full p-3 mt-5 bg-[#42807D] text-white rounded-2xl hover:bg-green-500 focus:outline-none focus:ring-2 text-[1.2rem] sm:text-[1rem] focus:ring-blue-500"
            >
              Entrar
            </button>
          </div>
        </form>

        <div>
          <p className="font-bold pl-3 text-center text-[1rem] sm:text-[0.9rem] text-gray-600">
            Não tem uma conta? 
            <Link href="/Cadastro">
              <span className="text-center text-green-500 cursor-pointer hover:underline"> Crie uma</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TelaLogin;
