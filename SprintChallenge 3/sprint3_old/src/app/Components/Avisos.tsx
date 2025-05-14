'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PerfilUsuario from '../Perfil/page';
import WatsonChat from '../WhatsonChatBot/WatsonChat';

const Avisos = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);

  const users = [
    {
      name: 'Pedro Henrique Sena',
      rm: 'RM561178',
      role: 'Responsável pelo back-end',
      contributions: 'Integração com APIs, autenticação e lógica de dados em tempo real.',
      details: 'Pedro é especializado em construir a base sólida do sistema. Trabalhou no backend e integração com serviços externos.',
      github: 'https://github.com/pedrohenrique',
      linkedin: 'https://www.linkedin.com/in/pedrohenrique',
      photo: '/img/pedro.JPEG'
,
    },
    {
      name: 'Sulamita Viegas Dos Santos',
      rm: 'RM561089',
      role: 'UX/UI Designer',
      contributions: 'Criou a identidade visual e interações da interface.',
      details: 'Sulamita se destacou ao entregar uma interface bonita e acessível para usuários de todas as idades.',
      github: 'https://github.com/sulamita',
      linkedin: 'https://www.linkedin.com/in/sulamita',
      photo: '/images/sulamita.png',
    },
    {
      name: 'Matteus Viegas Dos Santos',
      rm: 'RM561090',
      role: 'Front-end Developer',
      contributions: 'Criou componentes dinâmicos e garantiu responsividade.',
      details: 'Matteus codificou a maior parte do layout com animações, performance e fluidez de navegação.',
      github: 'https://github.com/matteus',
      linkedin: 'https://www.linkedin.com/in/matteus',
      photo: '/img/you-mortes-joe-em-ordem-750x430.png',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] px-4 py-6 flex flex-col items-center relative overflow-hidden">
      <main className="w-full max-w-5xl">
        <motion.div
          className="mb-6 flex flex-col gap-5 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PerfilUsuario />
          <motion.button
            className="w-full sm:w-auto px-6 py-3 bg-[#42807D] text-white rounded-lg hover:bg-[#357066] transition duration-300"
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
          >
            Atualizar
          </motion.button>
        </motion.div>

        <motion.div
          className="text-center border p-5 rounded-2xl flex flex-col items-center mt-8 bg-white shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-[#42807D] mb-4">Consultar Linhas CCR</h1>
          <p className="text-base text-gray-600 mb-6 px-4">
            Verifique todas as linhas da CCR para encontrar as informações mais recentes sobre horários e trajetos.
          </p>

          <Link href="/header">
            <motion.button
              className="w-full sm:w-2/3 py-3 bg-[#42807D] text-white rounded-lg hover:bg-[#357066] transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Consultar Linhas CCR
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 w-full grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {users.map((user, index) => (
            <motion.div
              key={index}
              className="relative p-6 pt-16 rounded-xl shadow-md bg-white border hover:shadow-xl cursor-pointer text-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedUserIndex(index)}
            >
              <img
                src={user.photo}
                alt={user.name}
                className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <h1 className="font-bold text-xl text-[#42807D]">{user.name}</h1>
              <p className="text-sm text-gray-500">{user.rm}</p>
              <div className="flex justify-center gap-4 mt-2">
                <motion.a
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href={user.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Dinâmico de Detalhes */}
        <AnimatePresence>
          {selectedUserIndex !== null && (
            <motion.div
              key="info-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed top-1/2 left-1/2 z-50 bg-white rounded-xl shadow-2xl p-6 border w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2"
            >
              <h2 className="text-2xl font-semibold text-[#42807D] text-center mb-2">
                {users[selectedUserIndex].role}
              </h2>
              <p className="text-md text-gray-700 text-center">
                {users[selectedUserIndex].details}
              </p>
              <p className="text-sm text-gray-400 text-center mt-3 italic">
                “{users[selectedUserIndex].contributions}”
              </p>
              <div className="mt-4 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#42807D] text-white py-2 px-6 rounded-full hover:bg-[#357066]"
                  onClick={() => setSelectedUserIndex(null)}
                >
                  Fechar
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão Sair */}
        <div className="mt-12 flex justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#42807D] text-white py-3 px-8 rounded-full hover:bg-[#357066] transition duration-300"
            >
              Sair
            </motion.button>
          </Link>
        </div>

        <WatsonChat />
      </main>
    </div>
  );
};

export default Avisos;
