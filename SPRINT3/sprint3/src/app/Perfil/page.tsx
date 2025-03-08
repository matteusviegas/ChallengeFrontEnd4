'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

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
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div className="relative">
      {/* Ícone de Foto de Perfil no Canto Direito */}
      <motion.div
        className="cursor-pointer fixed top-4 right-4 z-50"
        onClick={togglePerfil} 
      >
        <img
          src={novaFoto || dadosUsuario?.foto || '/img_icons/imgUser.jpg'}
          alt="Foto de Perfil"
          className="w-15 h-15 border-[2px] border-black rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110"
        />
      </motion.div>

      {/* Modal de Exibição de Perfil */}
      {exibirPerfil && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[60%] flex flex-col items-center">
            <div className="mb-4">
              {/* Foto de Perfil expandida */}
              <img
                src={novaFoto || dadosUsuario?.foto || '/img_icons/imgUser.jpg'}
                alt="Foto de Perfil"
                className="w-32 h-32 border-[2px] border-black rounded-full mx-auto"
              />
            </div>

            {/* Nome e Email */}
            <h1 className="text-2xl font-bold">{dadosUsuario?.usuario}</h1>
            <p className="text-lg text-gray-600">{dadosUsuario?.email}</p>

            {/* Alterar Foto de Perfil */}
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
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Alterar Foto de Perfil
              </button>
            </div>

            {/* Deslogar */}
            <div className="mt-6">
              <button
                onClick={deslogar}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Deslogar
              </button>
            </div>

            {/* Fechar Perfil */}
            <button
              onClick={togglePerfil}
              className="mt-4 text-blue-500 hover:underline focus:outline-none"
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
