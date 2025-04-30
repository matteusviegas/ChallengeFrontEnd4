'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PaineldeaAvios from './PaineldeaAvios';

const TelaLogin = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState('');
  const [erroCampos, setErroCampos] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!usuario || !senha) {
      setErroCampos('Por favor, preencha todos os campos.');
      return;
    } else {
      setErroCampos('');
    }

    try {
      setLoading(true);
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: usuario, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/avisos');
      } else {
        setErroLogin(data.error || 'Usuário ou senha incorretos!');
      }
    } catch (error) {
      setErroLogin('Erro ao realizar login. Tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-start px-4">
      <div className="mb-6 mx-auto p-6 border-4 border-solid border-green-800 w-full sm:w-[90%] md:w-[50%] lg:w-[42%] h-auto bg-white border-gray-300 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px]"
            src="img_icons/Logo_Fs.png"
            alt="Logo"
          />
          <h1 className="text-[1.6rem] sm:text-[1.4rem] lg:w-[100%] w-[80%] font-semibold text-center mb-4">
            Seu passageiro virtual nas horas certas!
          </h1>
        </div>

        {erroLogin && <p className="text-red-500 p-3 text-[1.2rem] text-center">{erroLogin}</p>}
        {erroCampos && <p className="text-red-500 p-3 text-[1.2rem] text-center">{erroCampos}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mt-6 w-full mx-auto">
            <label htmlFor="usuario" className="pl-2 block font-medium text-gray-700">Usuário:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu usuário"
              className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-[1rem]"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="mb-4 mt-6 w-full mx-auto">
            <label htmlFor="senha" className="pl-2 block font-medium text-gray-700">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-[1rem]"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="mb-6 mt-6 mx-auto flex justify-center">
            <button
              type="submit"
              className="w-[80%] sm:w-[70%] p-3 bg-[#42807D] text-white rounded-2xl hover:bg-green-500 mx-auto focus:outline-none focus:ring-2 text-[1.2rem] sm:text-[1.3rem] mt-13"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>

        <div>
          <p className="font-bold mt-8 text-center text-[1.1rem] text-gray-600">
            Não tem uma conta?
            <Link href="/Cadastro">
              <span className="text-green-500 cursor-pointer hover:underline"> Crie uma</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-10">
        <PaineldeaAvios />
      </div>
    </div>
  );
};

export default TelaLogin;
