'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PerfilUsuario from "../Perfil/page";
import WatsonChat from "../WhatsonChatBot/WatsonChat";
import { motion } from "framer-motion";

const Avisos = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Lista de usuários com mais interatividade
  const [users, setUsers] = useState([
    { name: "Pedro Henrique Sena", rm: "RM561178" },
    { name: "Sulamita Viegas Dos Santos", rm: "RM561089" },
    { name: "Matteus Viegas Dos Santos", rm: "RM561090" },
  ]);

  // Atualizar a hora e data a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  // Função para expandir a div
  const handleExpand = (index: number) => {
    // Verifica se a div já está expandida, se sim, desfaz a expansão
    if (expandedIndex === index) {
      setExpandedIndex(null); // Colapsa a div
    } else {
      setExpandedIndex(index); // Expande a div
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6">
      <main>
        {/* Animação para o perfil */}
        <motion.div
          className="relative mb-2 flex flex-col gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-15 flex justify-center">
            <PerfilUsuario />
          </div>

          <div className="flex flex-col gap-5 sm:flex-row justify-between items-center mb-1 space-y-4 sm:space-y-0">
            <motion.button
              className="px-28 py-3 sm:w-[13%] py-3 px-4 bg-[#42807D] text-white rounded-lg hover:bg-green-400 transition duration-300"
              onClick={() => window.location.reload()}
              whileHover={{ scale: 1.1 }}
            >
              Atualizar
            </motion.button>
          </div>
        </motion.div>

        {/* Seção Consultar Linhas CCR */}
        <motion.div
          className="text-center border-2 p-3 rounded-2xl flex flex-col mt-12 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => handleExpand(0)} // Expansão ao clicar
          style={{
            boxShadow: expandedIndex === 0 ? "0 0 15px rgba(0, 255, 0, 0.7)" : "none", // Sombra verde
            borderColor: expandedIndex === 0 ? "#00FF00" : "#ccc", // Borda verde
            transform: expandedIndex === 0 ? "scale(1.05)" : "none", // Expansão suave
          }}
        >
          <h1 className="text-[1.7rem] sm:text-[1.8rem] mt-4 mx-auto font-bold text-black mb-4">
            Consultar Linhas CCR
          </h1>
          <p className="text-[1.2rem] sm:text-[1.1rem] mx-auto leading-snug text-gray-600 mb-6 px-4 sm:px-8">
            Verifique todas as linhas da CCR para encontrar as informações mais recentes sobre horários e trajetos.
            Use o botão abaixo para acessar a consulta de linhas.
          </p>

          <Link href="/header">
            <motion.button
              className="w-[70%] mx-auto py-4 p-2 bg-[#42807D] text-white rounded-lg hover:bg-green-600 transition duration-300 mb-8 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Consultar Linhas CCR
            </motion.button>
          </Link>
        </motion.div>

        {/* Seção de Opinião */}
        <motion.div
          className="text-center border-2 p-3 rounded-2xl flex flex-col mt-12 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => handleExpand(1)} // Expansão ao clicar
          style={{
            boxShadow: expandedIndex === 1 ? "0 0 15px rgba(0, 255, 0, 0.7)" : "none", // Sombra verde
            borderColor: expandedIndex === 1 ? "#00FF00" : "#ccc", // Borda verde
            transform: expandedIndex === 1 ? "scale(1.05)" : "none", // Expansão suave
          }}
        >
          <h1 className="text-[1.7rem] sm:text-[1.8rem] mx-auto font-bold text-black mb-8">
            Sua opinião importa!
          </h1>
          <p className="text-[1.2rem] sm:text-[1.1rem] mx-auto leading-snug text-gray-600 mb-6 px-4 sm:px-8">
            Sua contribuição é essencial para que possamos melhorar nossos serviços no futuro!
          </p>

          <div className="w-[70%] mx-auto mb-7">
            <Link href="/sugestao">
              <motion.img
                className="h-[66px] w-[72px] mx-auto transition-transform duration-300 hover:scale-110"
                src="/img_icons/image_form.png"
                alt="formulario"
                whileHover={{ rotate: 10 }}
              />
              <p className="text-[1.2rem] pt-4 leading-snug text-gray-600">
                Deixe aqui sua opinião!
              </p>
            </Link>
          </div>
        </motion.div>

        {/* Exibição dos usuários com animação */}
        <motion.div
          className="w-[69%] mt-[15%] rounded-2xl mx-auto p-4 text-center border-2 text-[1.4rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {users.map((user, index) => (
            <motion.div
              key={index}
              className={`user-item mb-4 p-4 bg-gray-100 rounded-xl transition-all duration-300 ease-in-out 
                ${expandedIndex === index ? 'scale-105 border-4 border-green-500 shadow-lg' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleExpand(index)} // Expansão ao clicar
            >
              <h1 className="font-semibold">{user.name}</h1>
              <p className="text-gray-500">{user.rm}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão de Logout com animação */}
        <div className="mt-[8%] text-center mb-[8%]">
          <motion.button
            className="px-28 py-3 sm:w-[13%] py-3 px-4 bg-[#42807D] text-white rounded-lg hover:bg-green-400 transition duration-300"
            onClick={() => router.push("/Login")}
            whileHover={{ scale: 1.1 }}
          >
            Sair
          </motion.button>
        </div>

        <WatsonChat />
      </main>
    </div>
  );
};

export default Avisos;
