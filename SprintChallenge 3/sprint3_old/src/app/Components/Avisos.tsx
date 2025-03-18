'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PerfilUsuario from "../Perfil/page";

const Avisos = () => {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6">
      {/* O elemento main foi adicionado aqui */}
      <main>
        <div className="relative mb-2 flex flex-col gap-5">
          <div className="mb-15 flex justify-center">
            <PerfilUsuario />
          </div>

          <div className="flex flex-col gap-5 sm:flex-row justify-between items-center mb-1 space-y-4 sm:space-y-0">
            <button
              className="px-28 py-3 sm:w-[1 3%] py-3 px-4 bg-[#42807D] text-white rounded-lg hover:bg-green-400 transition duration-300"
              onClick={() => window.location.reload()}
            >
              Atualizar
            </button>
          </div>
        </div>

        <div className="text-center border-2 p-3 rounded-2xl flex flex-col mt-12">
          <h1 className="text-[1.7rem] sm:text-[1.8rem] mt-4 mx-auto font-bold text-black mb-4">
            Consultar Linhas CCR
          </h1>
          <p className="text-[1.2rem] sm:text-[1.1rem] mx-auto leading-snug text-gray-600 mb-6 px-4 sm:px-8">
            Verifique todas as linhas da CCR para encontrar as informações mais recentes sobre horários e trajetos.
            Use o botão abaixo para acessar a consulta de linhas.
          </p>

          <Link href="/header">
            <button
              className="w-[70%] mx-auto py-4 p-2 bg-[#42807D] text-white rounded-lg hover:bg-green-600 transition duration-300 mb-8 transform hover:scale-105"
            >
              Consultar Linhas CCR
            </button>
          </Link>
        </div>

        <div className="text-center border-2 p-3 rounded-2xl flex flex-col mt-12">
          <h1 className="text-[1.7rem] sm:text-[1.8rem] mx-auto font-bold text-black mb-8">
            Sua opinião importa!
          </h1>
          <p className="text-[1.2rem] sm:text-[1.1rem] mx-auto leading-snug text-gray-600 mb-6 px-4 sm:px-8">
            Sua contribuição é essencial para que possamos melhorar nossos serviços no futuro!
          </p>

          <div className="w-[70%] mx-auto mb-7">
            <Link href="/sugestao">
              <img
                className="h-[66px] w-[72px] mx-auto transition-transform duration-300 hover:scale-110"
                src="/img_icons/image_form.png"
                alt="formulario"
              />
              <p className="text-[1.2rem] pt-4  leading-snug text-gray-600 ">Deixe aqui sua opinião!</p>
            </Link>
          </div>
        </div>

        <div className="mt-[8%] text-center mb-[8%]">
          <button
            className=" px-28 py-3 sm:w-[1 3%] py-3 px-4 bg-[#42807D] text-white rounded-lg hover:bg-green-400 transition duration-300"
            onClick={() => router.push("/Login")}
          >
            Sair
          </button>
        </div>
      </main>
    </div>
  );
};

export default Avisos;
