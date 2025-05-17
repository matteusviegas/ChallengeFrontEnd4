'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TelaCadastro = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erroSenhas, setErroSenhas] = useState('');
  const [erroCampos, setErroCampos] = useState('');
  const [erroUsuario, setErroUsuario] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErroCampos('');
    setErroUsuario('');
    setErroEmail('');
    setErroSenhas('');

    if (!usuario || !email || !senha || !confirmarSenha) {
      setErroCampos('Por favor, preencha todos os campos.');
      return;
    }

    if (usuario.length < 4) {
      setErroUsuario('O nome de usuário deve ter pelo menos 4 caracteres.');
      return;
    }

    if (!validateEmail(email)) {
      setErroEmail('Por favor, insira um e-mail válido.');
      return;
    }

    if (senha.length < 6) {
      setErroSenhas('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErroSenhas('As senhas não coincidem. Por favor, verifique novamente.');
      return;
    }

    if (!aceitouTermos) {
      alert('Você deve aceitar os termos de uso e política de privacidade.');
      return;
    }

    const userData = { nome: usuario, email, senha };

    try {
      setLoading(true);
      
      const response = await fetch('http://localhost:8080/api/usuario/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao cadastrar');
      }

      const data = await response.json();
      console.log('Usuário cadastrado com sucesso:', data);

      router.push('/Login');
    } catch (error: any) {
      console.error(error);
      setErroCampos(error.message || 'Erro ao cadastrar. Tente novamente!');
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
        <div className="mb-3">
          <label htmlFor="usuario" className="block ml-2 mb-1 font-medium text-gray-700">Nome de Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuário"
            className={`w-full bg-[#42807D] p-4 border ${erroUsuario ? 'border-red-500' : 'border-gray-300'} mb-4 rounded-[30px] mt-2 text-white text-sm`}
          />
          {erroUsuario && <p className="text-red-500 text-sm">{erroUsuario}</p>}
        </div>

        <div className="mb-7">
          <label htmlFor="email" className="block ml-2 font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className={`w-full bg-[#42807D] p-4 border ${erroEmail ? 'border-red-500' : 'border-gray-300'} rounded-[30px] mt-2 text-white text-sm`}
          />
          {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}
        </div>

        <div className="mb-7">
          <label htmlFor="senha" className="block ml-2 font-medium text-gray-700">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            className={`w-full bg-[#42807D] p-4 border ${erroSenhas ? 'border-red-500' : 'border-gray-300'} rounded-[30px] mt-2 text-white text-sm`}
          />
        </div>

        <div className="mb-7">
          <label htmlFor="confirmarSenha" className="block ml-2 font-medium text-gray-700">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme sua senha"
            className={`w-full bg-[#42807D] p-4 border ${erroSenhas ? 'border-red-500' : 'border-gray-300'} rounded-[30px] mt-2 text-white text-sm`}
          />
          {erroSenhas && <p className="text-red-500 text-sm">{erroSenhas}</p>}
        </div>

        {erroCampos && <p className="text-red-500 text-sm">{erroCampos}</p>}

        <div className="mb-5 text-[1rem]">
          <label htmlFor="check" className="block ml-2 font-medium text-gray-700">
            <input
              type="checkbox"
              id="check"
              checked={aceitouTermos}
              onChange={(e) => setAceitouTermos(e.target.checked)}
              className="m-2"
            />
            Ao continuar, você aceita nossa <Link href='/TermosUso'><span className="text-blue-500 hover:underline">Política de Privacidade e Termos de Uso</span></Link>.
          </label>
        </div>

        <div className="flex justify-center mb-5">
          <button
            type="submit"
            className="w-3/4 sm:w-2/3 p-3 bg-[#42807D] text-white rounded-2xl hover:bg-green-500"
            disabled={loading}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-lg text-gray-600">Já tem uma conta? <Link href="/Login"><span className="text-[#42807D] hover:underline cursor-pointer">Login</span></Link></p>
      </div>
    </div>
  );
};

export default TelaCadastro;
