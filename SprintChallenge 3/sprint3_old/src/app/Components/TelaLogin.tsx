'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TelaLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro no login');
      }

      const user = await response.json();
      localStorage.setItem('usuarioLogado', JSON.stringify(user));
      router.push('/avisos');
    } catch (error: any) {
      setErro(error.message || 'Email ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[420px] mx-auto border-4 border-solid mt-[23%] border-green-800 p-6 bg-white rounded-lg sm:max-w-[350px]">
      <div className="w-[80%] mx-auto mt-8 mb-9">
        <h1 className="font-bold text-center text-3xl sm:text-4xl">
          FUTURE <span className="text-[#42807D]">STATION</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="block ml-2 font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-white text-sm"
          />
        </div>

        <div className="mb-7">
          <label htmlFor="senha" className="block ml-2 font-medium text-gray-700">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-white text-sm"
          />
        </div>

        {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}

        <div className="flex justify-center mb-5">
          <button
            type="submit"
            className="w-3/4 sm:w-2/3 p-3 bg-[#42807D] text-white rounded-2xl hover:bg-green-500"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-lg text-gray-600">
          Ainda não tem uma conta? <Link href="/cadastro"><span className="text-[#42807D] hover:underline cursor-pointer">Cadastre-se</span></Link>
        </p>
      </div>
    </div>
  );
};

export default TelaLogin;
