'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PaineldeaAvios from './PaineldeaAvios';

const TelaLogin = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [loading, setLoading] = useState(false);

  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!usuario || !senha) {
      setMensagemErro('Por favor, preencha todos os campos.');
      return;
    }

    if (!isEmailValid(usuario)) {
      setMensagemErro('Por favor, insira um e-mail válido.');
      return;
    }

    setMensagemErro('');
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: usuario, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/avisos');
      } else {
        setMensagemErro(data.error || 'Usuário ou senha incorretos!');
      }
    } catch (error) {
      setMensagemErro('Erro ao realizar login. Tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="p-6 border-4 border-green-800 w-full sm:w-[90%] md:w-[50%] lg:w-[35%] xl:w-[30%] bg-white rounded-3xl">
        <div className="flex flex-col items-center">
          <img src="/img_icons/Logo_Fs.png" alt="Logo" className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px]" />
          <h1 className="text-[1.6rem] font-semibold text-center mb-4">Seu passageiro virtual nas horas certas!</h1>
        </div>

        {mensagemErro && <p className="text-red-500 text-center">{mensagemErro}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label htmlFor="usuario" className="block text-gray-700 font-medium">E-mail:</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              aria-label="Campo de e-mail"
              placeholder="Digite seu e-mail"
              className={`w-full p-4 rounded-[30px] bg-[#42807D] text-white border ${!isEmailValid(usuario) && usuario ? 'border-red-500' : 'border-gray-300'}`}
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-gray-700 font-medium">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              aria-label="Campo de senha"
              placeholder="Digite sua senha"
              className={`w-full p-4 rounded-[30px] bg-[#42807D] text-white border ${mensagemErro && !senha ? 'border-red-500' : 'border-gray-300'}`}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-[80%] p-3 bg-[#42807D] text-white rounded-2xl hover:bg-green-500 focus:outline-none focus:ring-2 text-[1.2rem]"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Não tem uma conta?
          <Link href="/Cadastro">
            <span className="text-green-500 hover:underline cursor-pointer"> Crie uma</span>
          </Link>
        </p>
      </div>

      <div className="w-full mt-10 flex justify-center">
        <PaineldeaAvios />
      </div>
    </div>
  );
};

export default TelaLogin;
