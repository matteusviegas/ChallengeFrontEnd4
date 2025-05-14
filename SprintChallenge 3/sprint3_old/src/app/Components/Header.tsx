'use client';

import Link from "next/link";
import Button from "../Botao/Botao";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MapaLinha from "../mapaLinha/page";

const Header = () => {
  const [status, setStatus] = useState({
    diamante: "Carregando...",
    esmeralda: "Carregando...",
    amarela: "Carregando..."
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const [diamanteRes, esmeraldaRes, amarelaRes] = await Promise.all([
          fetch("http://localhost:8080/status-linhas/diamante"),
          fetch("http://localhost:8080/status-linhas/esmeralda"),
          fetch("http://localhost:8080/status-linhas/amarela")
        ]);

        const [diamante, esmeralda, amarela] = await Promise.all([
          diamanteRes.json(),
          esmeraldaRes.json(),
          amarelaRes.json()
        ]);

        setStatus({
          diamante: diamante[0]?.status || "Indisponível",
          esmeralda: esmeralda[0]?.status || "Indisponível",
          amarela: amarela[0]?.status || "Indisponível"
        });
      } catch (err) {
        setStatus({
          diamante: "Erro ao carregar",
          esmeralda: "Erro ao carregar",
          amarela: "Erro ao carregar"
        });
      }
    };

    fetchStatus();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-[#f4fdfa] to-white min-h-screen">
      <header>
        <h1 className="mx-auto mt-10 w-full text-[2.8rem] sm:text-[3rem] font-extrabold tracking-wide">
          FUTURE <span className="text-[#42807D]">STATION</span>
        </h1>
      </header>
<section className="w-[90%] sm:w-[70%] mx-auto mt-10">
  <h2 className="text-center text-3xl sm:text-4xl font-semibold text-[#1F2937] mb-8">
    Status Operacional das Linhas
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {/* Linha 8 - Diamante */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center group">
      <svg
        className="w-12 h-12 text-gray-700 mb-4 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2.118m0 17.882l6-3m-6 3V2.118m6 15.764l5.447-2.724A2 2 0 0021 15.382V6.618a2 2 0 00-1.553-1.894L15 2.118m0 17.882V2.118" />
      </svg>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#357063]">
        Linha 8 Diamante
      </h3>
      <p className="text-sm font-medium text-gray-600">{status.diamante}</p>
    </div>

    {/* Linha 9 - Esmeralda */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center group">
      <svg
        className="w-12 h-12 text-emerald-600 mb-4 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M4.5 20.25l7.5-16.5 7.5 16.5m-15 0h15" />
      </svg>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#357063]">
        Linha 9 Esmeralda
      </h3>
      <p className="text-sm font-medium text-gray-600">{status.esmeralda}</p>
    </div>

    {/* Linha 4 - Amarela */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center group">
      <svg
        className="w-12 h-12 text-yellow-500 mb-4 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 9v2.25m0 4.5h.008v-.008H12v.008zm-.75 4.5A9 9 0 1112 21a9 9 0 01-.75-1.5z" />
      </svg>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#357063]">
        Linha 4 Amarela
      </h3>
      <p className="text-sm font-medium text-gray-600">{status.amarela}</p>
    </div>
  </div>
</section>


      <section className="w-[90%] sm:w-[70%] mt-12">
        <p className="text-[1.4rem] font-medium mb-8">
          Selecione a linha desejada para mais informações:
        </p>

        <div className="flex flex-col gap-6 items-center justify-center border-2 border-[#cce5e3] rounded-2xl p-6 shadow-lg">
          <Link href="/esmeralda">
            <button className="bg-[#357063] hover:bg-[#2a5d51] transition-all duration-300 text-white text-[1.2rem] px-10 py-4 rounded-xl shadow-md hover:scale-105">
              Linha 9 Esmeralda
            </button>
          </Link>

          <button
            className="bg-[#6c6960] text-white text-[1.2rem] px-10 py-4 rounded-xl cursor-not-allowed opacity-70 shadow-md"
            title="Esta linha está inativa no momento"
            disabled
          >
            Linha 8 Diamante
          </button>

          <button
            className="bg-[#e6e94d] text-[#333] text-[1.2rem] px-10 py-4 rounded-xl cursor-not-allowed opacity-80 shadow-md"
            title="Esta linha está inativa no momento"
            disabled
          >
            Linha 4 Amarela
          </button>
        </div>
      </section>

      <section className="flex text-center mt-10 flex-col gap-2">
        <div className="mt-8">
          <div className="flex bg-[#fff] flex-col gap-6 items-center justify-center border-2 border-[#cce5e3] rounded-2xl p-13 shadow-lg">
            <Link href="/horariofuncionamento">
              <div className="text-center">
                <img className="h-[80px] sm:h-[98px] mx-auto" src="/img_Icons/horario.png" alt="Horario de Funcionamento" />
                <h3 className="font-bold mt-[5%] text-[1.4rem] sm:text-lg">Horario de Funcionamento</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>





     

      <h1 className="text-[1.7rem] sm:text-[1.8rem] mx-auto mt-[19%] font-bold text-black mb-2">
            Sua opinião importa!
          </h1>
          <p className="text-[1.2rem] sm:text-[1.1rem] mx-auto leading-snug text-gray-600 mb-6 px-4 sm:px-8">
            Sua contribuição é essencial para que possamos melhorar nossos serviços no futuro!
          </p>
          <div className="flex flex-col gap-6 bg-[#fff] items-center justify-center border-2 border-[#cce5e3] rounded-2xl p-11 py-10 px-17 shadow-lg">
          <div className="w-[100%] mx-auto mb-7">
            <Link href="/sugestao">
              <motion.img
                className="h-[66px] w-[72px] mx-auto transition-transform duration-300 hover:scale-110"
                src="/img_icons/image_form.png"
                alt="formulario"
                whileHover={{ rotate: 10 }}
              />
              <p className="font-bold mt-[5%] text-[1.4rem] sm:text-lg">
                Deixe aqui sua opinião!
              </p>
            </Link>
          
          </div>
          </div>
        







      <div className="flex justify-center mt-19 mb-1 w-full px-4">
  <Link href="/avisos" className="w-full max-w-sm">
    <motion.button
      className="w-full bg-[#42807D] text-white text-lg sm:text-xl py-3 rounded-lg hover:bg-[#365d56] transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Voltar
    </motion.button>
  </Link>
</div>

      <footer className="w-full mt-11 flex flex-col items-center">
      

        <footer className="w-full  flex flex-col items-center px-4">
  <button
    onClick={() => window.location.reload()}
    className="w-full max-w-sm bg-[#42807D]  mt-1 mb-10 hover:bg-green-600 text-white py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
  >
    Atualizar Página
  </button>
</footer>

      </footer>
    </main>
  );
};

export default Header;
