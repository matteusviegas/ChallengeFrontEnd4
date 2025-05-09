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

      <section className="bg-[#f2fdfc] border border-[#cce5e3] rounded-xl shadow-md p-6 mx-auto mt-6 w-[90%] sm:w-[70%]">
        <h2 className="text-[1.6rem] font-semibold mb-4 text-[#333]">Status das Linhas</h2>
        <ul className="text-left text-[1.2rem] font-medium space-y-2">
          <li><strong>Linha 8 Diamante:</strong> {status.diamante}</li>
          <li><strong>Linha 9 Esmeralda:</strong> {status.esmeralda}</li>
          <li><strong>Linha 4 Amarela:</strong> {status.amarela}</li>
        </ul>
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

      <section className="flex text-center mt-10 mb-5 mb-[33%] flex-col gap-9">
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center border-3 mx-auto rounded-2xl p-5 w-[80%] mt-[8%] gap-6 sm:gap-10">
            <Link href="/horariofuncionamento">
              <div className="text-center">
                <img className="h-[80px] sm:h-[98px] mx-auto" src="/img_Icons/horario.png" alt="Horario de Funcionamento" />
                <h3 className="font-bold mt-[5%] text-[1.4rem] sm:text-lg">Horario de Funcionamento</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>




      <MapaLinha />


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
        







      
      <div className="flex mt-10 justify-center mt-6 mb-[33%]">
          <Link href="/avisos">
            <motion.button
              className="bg-[#42807D] text-white px-23 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }} 
            >
              Voltar
            </motion.button>
          </Link>
        </div>
      <footer className="w-full mt-20 flex flex-col items-center">
        <Link href="/avisos">
          <Button
            label="Voltar"
            onClick={() => {}}
            className="bg-[#42807D] hover:bg-[#2f5e59] transition-all duration-300 text-white px-10 py-3 rounded-lg text-lg shadow-md hover:scale-105"
          />
        </Link>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 bg-[#42807D] hover:bg-green-600 transition-all duration-300 text-white px-8 py-3 rounded-lg shadow-md hover:scale-105"
        >
          Atualizar Página
        </button>
      </footer>
    </main>
  );
};

export default Header;
