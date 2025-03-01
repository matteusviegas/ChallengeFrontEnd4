'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TelaCadastro = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erroSenhas, setErroSenhas] = useState('');
  const [erroCampos, setErroCampos] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!usuario || !dataNascimento || !email || !senha || !confirmarSenha) {
      setErroCampos('Por favor, preencha todos os campos.');
      return;
    } else {
      setErroCampos('');
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

    router.push('/avisos');
  };

  return (
    <div className="max-w-md text-start mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div>
        <h1 className="mx-auto mt-6 font-bold text-center mb-[10%] text-4xl sm:text-3xl md:text-4xl lg:text-5xl">FUTURE <span className="text-[#42807D]">STATION</span></h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Nome de Usuário:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuário"
            className="w-full bg-[#42807D] p-3 sm:p-4 md:p-5 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            className="w-full bg-[#42807D] p-3 sm:p-4 md:p-5 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="w-full bg-[#42807D] p-3 sm:p-4 md:p-5 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full bg-[#42807D] p-3 sm:p-4 md:p-5 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme sua senha"
            className="w-full bg-[#42807D] p-3 sm:p-4 md:p-5 border border-gray-300 rounded-[30px] mt-2 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
          {erroSenhas && <p className="text-red-500 text-sm">{erroSenhas}</p>}
        </div>

        {erroCampos && <p className="text-red-500 text-sm">{erroCampos}</p>}

        <div className="mb-6">
          <p className="text-sm text-gray-600">
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={aceitouTermos}
              onChange={(e) => setAceitouTermos(e.target.checked)}
              className="p-4"
            />
            Ao continuar, você aceita nossa <button className="text-blue-500 hover:underline focus:outline-none">Política de Privacidade</button> e <button className="text-blue-500 hover:underline focus:outline-none">Termos de Uso</button>.
          </p>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full p-3 sm:p-4 md:p-5 lg:p-6 bg-[#42807D] text-white rounded-[30px] hover:bg-green-500 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          >
            Cadastrar
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">Já tem uma conta?  <Link href="Login"><button className="text-[#42807D] hover:underline focus:outline-none cursor-pointer">Login</button></Link></p>
      </div>
    </div>
  );
};

export default TelaCadastro;
