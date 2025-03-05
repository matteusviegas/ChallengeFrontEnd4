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
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

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

    const userData = {
      usuario,
      email,
      senha,
      dataNascimento,
      foto: fotoPerfil,
    };

    localStorage.setItem('user', JSON.stringify(userData));

    router.push('/avisos');
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPerfil(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="lg:w-[670px] md:w-[550px] sm:w-[90%] w-[90%] border-2 border-solid border-green-800 text-start mx-auto p-6 lg:p-9 bg-white shadow-lg rounded-lg">
      <div className='lg:w-[60%] mx-auto p-2'>
        <h1 className="mx-auto mt-6 lg:w-[86%] w-[100%] p-2 lg:mb-13 font-bold text-[2.9rem] lg:text-7xl sm:text-4xl text-center">FUTURE <span className="text-[#42807D] ">STATION</span> </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-9 mt-10">
          <label htmlFor="usuario" className="block text-[1.2rem] mb-2 ml-2 font-medium text-gray-700">Nome de Usuário:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuário"
            className="w-full bg-[#42807D] p-4 lg:p-3 md:p-5 border border-gray-300 rounded-[39px] mt-2 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem] mb-2"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="dataNascimento" className="ml-2 block text-sm font-medium text-gray-700 text-[1.2rem] mb-3">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            className="w-full bg-[#42807D] p-4 lg:p-3 md:p-5 border border-gray-300 rounded-[30px] mt-1 mb-3 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
        </div>

        <div className="mb-2 mt-6">
          <label htmlFor="email" className="ml-2 block text-sm font-medium text-gray-700 text-[1.2rem] mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="w-full bg-[#42807D] p-4 lg:p-3 md:p-5 border border-gray-300 rounded-[30px] mt-2 mb-3 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
        </div>

        <div className="mb-4 mt-5">
          <label htmlFor="senha" className="ml-2 block text-sm font-medium text-gray-700 text-[1.2rem] mb-2">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full bg-[#42807D] p-4 lg:p-3 md:p-5 border border-gray-300 rounded-[30px] mt-2 mb-3 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
        </div>

        <div className="mb-6 mt-7">
          <label htmlFor="confirmarSenha" className="ml-2 block text-sm font-medium text-gray-700 text-[1.2rem] mb-2">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme sua senha"
            className="w-full bg-[#42807D] p-4 lg:p-3 md:p-5 border border-gray-300 rounded-[30px] mt-2 mb-3 text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]"
          />
          {erroSenhas && <p className="text-red-500 text-sm p-4 text-[1.2rem]">{erroSenhas}</p>}
        </div>

        {erroCampos && <p className="text-red-500 text-sm text-[1.3rem] p-2">{erroCampos}</p>}

        <div className="mb-6">
          <p className="text-[1.1rem] lg:text-[1.2rem] pl-3 text-gray-600">
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={aceitouTermos}
              onChange={(e) => setAceitouTermos(e.target.checked)}
              className="m-3 p-[33px]"
            />
            Ao continuar, você aceita nossa <button className="text-[1.2rem] text-blue-500 hover:underline focus:outline-none">Política de Privacidade</button> e <button className="text-blue-500 hover:underline focus:outline-none">Termos de Uso</button>.
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="fotoPerfil" className="ml-2 block text-sm font-medium text-gray-700 text-[1.2rem] mb-2">Foto de Perfil:</label>
          <input
            type="file"
            id="fotoPerfil"
            name="fotoPerfil"
            accept="image/*"
            onChange={handleFotoChange}
            className="w-full p-2 border border-gray-300 rounded-[30px] mb-3"
          />
          {fotoPerfil && (
            <div className="mb-4">
              <img src={fotoPerfil} alt="Foto de Perfil" className="w-20 h-20 rounded-full mx-auto" />
            </div>
          )}
        </div>

        <div className="mb-6 lg:w-[64%] flex justify-center">
          <button
            type="submit"
            className="lg:w-[68%] sm:w-[80%] w-[70%] p-2 lg:p-4 mt-10 lg:mt-17 bg-[#42807D] text-white rounded-2xl hover:bg-green-500 mx-auto focus:outline-none focus:ring-2 text-[1.3rem]"
          >
            Cadastrar
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-[1.1rem] text-gray-600">Já tem uma conta?  <Link href="Login"><button className="text-[#42807D] hover:underline focus:outline-none cursor-pointer">Login</button></Link></p>
      </div>
    </div>
  );
};

export default TelaCadastro;
