'use client';

import Link from "next/link";
import Button from "../Botao/Botao";
import { motion } from "framer-motion";

const Esmeralda = () => {
  return (
    <main className="text-center">
      <header>
        <h1 className="mx-auto mt-12 w-[50%] font-bold text-[2.3rem]">
          ESTAÇÕES <span className="text-[#42807D]">LINHAS</span>
        </h1>
      </header>

      <section>
        <div className="flex justify-center mt-[19%]">
          <Link href="/header">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                label="Voltar para a estação"
                onClick={() => {}}
                className="bg-[#42807D] cursor-pointer text-white px-10 py-4 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
              />
            </motion.div>
          </Link>
        </div>
        <div className="border-3 mt-[9%] p-4 w-[80%] flex flex-col gap-7 mx-auto rounded-2xl">
          <p className="mt-[4%] text-[1.5rem] text-[#42807D]">
            Escolha a estação desejada:
          </p>
          <Link href="/HorarioPico">
            <motion.button
              className="bg-[#42807D] w-[60%] mt-[4%] text-[1rem] text-white rounded-[9px] p-4 cursor-pointer"
              type="button"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Previsão Pico
            </motion.button>
          </Link>
          <Link href="/viagem/EscolherEstacao
">
  <motion.button
    className="bg-[#42807D] mb-10 w-[60%] mt-[2%] text-[1rem] text-white rounded-[9px] p-4 cursor-pointer"
    type="button"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    Começar Viagem
  </motion.button>
</Link>

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

      <section className="mx-auto mt-[1%] relative">
        <h3 className="font-bold text-[1.9rem] mb-10">Estações</h3>

        <div className="overflow-y-auto max-h-[300px] w-[90%] mx-auto">
          <ul className="relative flex flex-col gap-4 z-10">
            <Link href="/pinheiros">
              <motion.li
                className="border-[2px] m-3 p-2 text-xl cursor-pointer bg-[#42807D] text-white rounded-[27px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.95 }} // Efeito de clique
              >
                Pinheiros
              </motion.li>
            </Link>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Osasco
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Presidente
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Altino
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Ceasa
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Vila Lobos
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Jaguaré
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Cidade Universitária
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Berrini
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Morumbi
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Granja Julieta
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Santo Amaro
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Socorro
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Jurubatuba
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Autódromo
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Grajaú
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Mendes
            </motion.li>

            <motion.li
              className="m-3 p-2 text-xl bg-gray-400 text-gray-600 rounded-[27px] cursor-not-allowed relative hover:bg-gray-500"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100"></div>
              Vila Natal
            </motion.li>
          </ul>
        </div>
      </section>

      <footer>
        <div className="flex mt-10 justify-center mt-6 mb-[33%]">
          <Link href="/header">
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
      </footer>
    </main>
  );
};

export default Esmeralda;
