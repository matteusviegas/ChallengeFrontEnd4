'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const PerfilUsuario = () => {
  const [dadosUsuario, setDadosUsuario] = useState<any>(null);
  const [exibirInformacoes, setExibirInformacoes] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('user');
    if (usuarioArmazenado) {
      setDadosUsuario(JSON.parse(usuarioArmazenado));
    }
  }, []);

  const toggleInformacoes = () => {
    setExibirInformacoes(!exibirInformacoes);
  };

  const deslogar = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div className="w-full max-w-[700px] mx-auto p-6 lg:p-9 bg-white shadow-lg rounded-lg">
      {dadosUsuario ? (
        <div className="text-center">
          <div className="mb-4">
            {dadosUsuario.foto && (
              <motion.img
                src={dadosUsuario.foto}
                alt="Foto de Perfil"
                className="w-32 h-32 rounded-full mx-auto cursor-pointer transition-all duration-300 transform hover:scale-110"
                onClick={toggleInformacoes}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            )}
          </div>
          
          <h1 className="text-2xl font-bold">{dadosUsuario.usuario}</h1>
          <p className="text-lg text-gray-600">{dadosUsuario.email}</p>
          
          <button
            onClick={toggleInformacoes}
            className="mt-4 text-blue-500 hover:underline focus:outline-none"
          >
            {exibirInformacoes ? 'Mostrar Menos' : 'Mostrar Mais'}
          </button>

          {exibirInformacoes && (
            <motion.div
              className="mt-4 text-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p><strong>Data de Nascimento:</strong> {dadosUsuario.dataNascimento}</p>
            </motion.div>
          )}

          <button
            onClick={deslogar}
            className="mt-6 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            Deslogar
          </button>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default PerfilUsuario;
