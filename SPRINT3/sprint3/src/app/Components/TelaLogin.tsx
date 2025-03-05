'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TelaLogin = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('user');
    if (usuarioArmazenado) {
      const user = JSON.parse(usuarioArmazenado);
      setFotoPerfil(user.foto);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (usuario === user.usuario && senha === user.senha) {
        setErroLogin('');
        router.push('/visos');
      } else {
        setErroLogin('Usuário ou senha incorretos!');
      }
    } else {
      setErroLogin('Nenhum usuário cadastrado!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-start px-4">
      <div className="mb-[5%] mx-auto p-4 border-6 border-solid border-green-800 lg:w-[670px] md:w-[550px] sm:w-[90%] w-[90%] h-[auto] bg-white border-[2px] border-gray-300 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] lg:h-[200px] lg:w-[190px]"
            src="img_icons/Logo_Fs.png"
            alt="Logo"
          />
          <h1 className="lg:text-3xl sm:text-[1.7rem] text-[1.4rem] w-[100%] sm:w-[70%] font-semibold text-center mb-4">
            Seu passageiro virtual nas horas certas!
          </h1>

          {fotoPerfil ? (
            <div className="flex justify-center mb-4">
              <img
                src={fotoPerfil}
                alt="Foto de Perfil"
                className="h-16 w-16 rounded-full border-2 border-gray-300"
              />
            </div>
          ) : (
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl">
                {usuario[0]?.toUpperCase()}
              </div>
            </div>
          )}
        </div>

        {erroLogin && <p className="text-red-500 p-3 text-[1.4rem] text-center">{erroLogin}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mt-13 lg:w-[90%] sm:w-[90%] mx-auto">
            <label htmlFor="usuario" className="pl-2 block lg:text-[1.4rem] sm:text-[1.2rem] font-medium text-gray-700">Usuário:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu usuário"
              className="w-full bg-[#42807D] p-4 lg:p-[3.5%] border border-gray-300 rounded-[30px] mt-2 text-[#fff] lg:text-[1.2rem] sm:text-[1rem] text-[1rem]"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="mb-4 mt-10 lg:w-[90%] sm:w-[90%] mx-auto">
            <label htmlFor="senha" className="pl-2 block lg:text-[1.4rem] sm:text-[1.2rem] font-medium text-gray-700">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="w-full bg-[#42807D] p-4 lg:p-[3.5%] border border-gray-300 rounded-[30px] mt-1 text-[#fff] lg:text-[1.2rem] sm:text-[1rem] text-[1rem]"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="mb-6 mt-10 mx-auto flex justify-center">
            <button
              type="submit"
              className="lg:w-[68%] sm:w-[80%] w-[70%] p-2 lg:p-4 mt-10 lg:mt-17 bg-[#42807D] text-white rounded-2xl hover:bg-green-500 mx-auto focus:outline-none focus:ring-2 text-[1.3rem]"
            >
              Entrar
            </button>
          </div>
        </form>

        <div>
          <p className="font-bold pl-4 lg:pl-4 mt-8 text-center lg:text-[1.5rem] sm:text-[1.2rem] text-[1rem] text-gray-600">
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
