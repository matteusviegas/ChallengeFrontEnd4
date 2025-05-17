'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PerfilUsuario = () => {
  const [dadosUsuario, setDadosUsuario] = useState<any>(null);
  const [exibirPerfil, setExibirPerfil] = useState<boolean>(false);
  const [novaFoto, setNovaFoto] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('user');
    if (usuarioArmazenado) {
      setDadosUsuario(JSON.parse(usuarioArmazenado));
    }
  }, []);

  const togglePerfil = () => {
    setExibirPerfil(!exibirPerfil);
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNovaFoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const deslogar = () => {
    try {
      const confirmar = window.confirm('Tem certeza que deseja sair?');
      if (confirmar) {
        localStorage.removeItem('user');
        router.push('/Login');
      }
    } catch (error) {
      console.error('Erro ao tentar deslogar:', error);
      alert('Erro ao tentar deslogar. Tente novamente!');
    }
  };

  const fotoPerfil = novaFoto || dadosUsuario?.foto || '/img_icons/imgUser.jpg';

  return (
    <div className="relative">
      <div
        className="cursor-pointer fixed top-4 right-4 z-50"
        onClick={togglePerfil}
      >
        <Image
          src={fotoPerfil}
          alt="Foto de Perfil"
          width={60}
          height={60}
          className="w-15 h-15 border-[2px] border-black rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 object-cover"
        />
      </div>

      {exibirPerfil && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[60%] flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={fotoPerfil}
                alt="Foto de Perfil"
                width={128}
                height={128}
                className="w-32 h-32 border-[2px] border-black rounded-full mx-auto object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold">{dadosUsuario?.usuario}</h1>
            <p className="text-lg text-gray-600">{dadosUsuario?.email}</p>

            <div className="mt-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleFotoChange}
                className="hidden"
                id="inputFoto"
              />
              <button
                onClick={() => document.getElementById('inputFoto')?.click()}
                className="p-2 cursor-pointer bg-[#42807D] text-white rounded-lg hover:bg-[#42707D]"
              >
                Alterar Foto de Perfil
              </button>
            </div>

            <div className="mt-6">
              <button
                onClick={deslogar}
                className="p-2 bg-red-500 cursor-pointer text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Deslogar
              </button>
            </div>

            <button
              onClick={togglePerfil}
              className="mt-4 cursor-pointer text-[#42807D] hover:underline focus:outline-none"
            >
              Fechar Perfil
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuario;
