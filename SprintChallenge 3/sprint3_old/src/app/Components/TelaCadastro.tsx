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

  // Validação de email
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validações de campos
    if (!usuario || !email || !senha || !confirmarSenha) {
      setErroCampos('Por favor, preencha todos os campos.');
      return;
    } else {
      setErroCampos('');
    }

    if (usuario.length < 4) {
      setErroUsuario('O nome de usuário deve ter pelo menos 4 caracteres.');
      return;
    } else {
      setErroUsuario('');
    }

    if (!validateEmail(email)) {
      setErroEmail('Por favor, insira um e-mail válido.');
      return;
    } else {
      setErroEmail('');
    }

    if (senha.length < 6) {
      setErroSenhas('A senha deve ter pelo menos 6 caracteres.');
      return;
    } else {
      setErroSenhas('');
    }

    if (senha !== confirmarSenha) {
      setErroSenhas('As senhas não coincidem. Por favor, verifique novamente.');
      return;
    } else {
      setErroSenhas('');
    }

    if (!aceitouTermos) {
      alert('Você deve aceitar os termos de uso e política de privacidade.');
      return;
    }

    // Dados do usuário a serem enviados para o banco
    const userData = {
      usuario,
      email,
      senha,
    };

    try {
      setLoading(true);
      const res = await fetch('/api/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.ok) {
        // Se cadastro for bem-sucedido, redireciona para a página de login
        router.push('/Login');
      } else {
        // Exibe o erro retornado pela API, se houver
        alert(data.error || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro ao cadastrar. Tente novamente!');
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
            name="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuário"
            className="w-full bg-[#42807D] p-4 border border-gray-300 mb-4 rounded-[30px] mt-2 text-[#fff] text-sm sm:text-base"
          />
          {erroUsuario && <p className="text-red-500 text-sm">{erroUsuario}</p>}
        </div>

        <div className="mb-7">
          <label htmlFor="email" className="block ml-2 font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-sm sm:text-base"
          />
          {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}
        </div>

        <div className="mb-7">
          <label htmlFor="senha" className="block ml-2 font-medium text-gray-700">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-sm sm:text-base"
          />
        </div>

        <div className="mb-7">
          <label htmlFor="confirmarSenha" className="block ml-2 font-medium text-gray-700">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme sua senha"
            className="w-full bg-[#42807D] p-4 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-sm sm:text-base"
          />
          {erroSenhas && <p className="text-red-500 text-sm">{erroSenhas}</p>}
        </div>

        {erroCampos && <p className="text-red-500 text-sm">{erroCampos}</p>}

        <div className="mb-5 text-[1rem]">
          <label htmlFor="check" className="block ml-2 font-medium text-gray-700">
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={aceitouTermos}
              onChange={(e) => setAceitouTermos(e.target.checked)}
              className="m-2"
            />
            Ao continuar, você aceita nossa <span className="text-blue-500 hover:underline">
              <Link href='/TermosUso'>Política de Privacidade e Termos de Uso</Link>
            </span>.
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
