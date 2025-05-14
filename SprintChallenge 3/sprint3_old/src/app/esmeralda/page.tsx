'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBus, FaClock, FaMapMarkedAlt, FaRoute } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";

const estacoesLinha9 = [
  { nome: "Osasco", ativa: false },
  { nome: "Presidente Altino", ativa: false },
  { nome: "Ceasa", ativa: false },
  { nome: "Villa Lobos-Jaguaré", ativa: false },
  { nome: "Cidade Universitária", ativa: false },
  { nome: "Pinheiros", ativa: true, link: "/pinheiro" },  
  { nome: "Hebraica-Rebouças", ativa: false },
  { nome: "Cidade Jardim", ativa: false },
  { nome: "Vila Olímpia", ativa: false },
  { nome: "Berrini", ativa: false },
  { nome: "Morumbi", ativa: false },
  { nome: "Granja Julieta", ativa: false },
  { nome: "Santo Amaro", ativa: false },
  { nome: "Socorro", ativa: false },
  { nome: "Jurubatuba", ativa: false },
  { nome: "Autódromo", ativa: false },
  { nome: "Interlagos", ativa: false },
  { nome: "Grajaú", ativa: false },
  { nome: "Mendes-Vila Natal", ativa: false },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const Esmeralda = () => {
  const [expandedStation, setExpandedStation] = useState<string | null>(null);
  const [showMapa, setShowMapa] = useState(false);
  const [trainIndex, setTrainIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const toggleStation = (station: string) => {
    setExpandedStation(expandedStation === station ? null : station);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainIndex((prev) => (prev + 1) % estacoesLinha9.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTrainIndex = hoverIndex !== null ? hoverIndex : trainIndex;

  return (
    <main className="text-center px-4 pt-10 pb-28 max-w-md mx-auto relative bg-white min-h-screen">
      <header>
        <h1 className="font-bold text-[1.8rem] sm:text-[2.3rem] mt-4">
          ESTAÇÕES <span className="text-[#42807D]">LINHAS</span>
        </h1>
      </header>

      <section className="mt-8 space-y-3">
        {[ 
          { label: "Previsão Pico", href: "/HorarioPico", icon: <FaClock /> },
          { label: "Começar Viagem", href: "/ViagemInicio", icon: <FaRoute /> },
          { label: "Ver Relatório de viagem", href: "/Relatorio", icon: <FaBus /> },
          { label: "Mapa Linha", href: "/mapaLinha", icon: <FaMapMarkedAlt /> }
        ].map((btn, idx) => (
          <Link key={idx} href={btn.href}>
            <motion.button
              className="bg-[#42807D] hover:bg-[#5db6ab] text-white w-full py-4 rounded-[9px] text-sm font-medium flex items-center justify-center gap-2 mt-5 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {btn.icon}
              {btn.label}
            </motion.button>
          </Link>
        ))}
      </section>

      <motion.button
        className="bg-[#42807D] hover:bg-[#5db6ab] text-white w-full mt-8 py-4 rounded-[9px] text-sm font-medium"
        onClick={() => setShowMapa(!showMapa)}
        whileHover={{ scale: 1.05 }}
      >
        {showMapa ? "Fechar Mapa" : "Ver Mapa das Estações"}
      </motion.button>

      {showMapa && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mt-6 w-full h-[600px] bg-[#eef7f6] rounded-lg overflow-hidden"
        >
          {estacoesLinha9.map((estacao, i) => {
            const top = 50 + i * 25;
            const left = i % 2 === 0 ? 40 : 200;
            return (
              <motion.div
                key={estacao.nome}
                className={`absolute text-xs px-3 py-2 rounded-full shadow-md z-10 ${estacao.ativa ? "bg-[#42807D] text-white cursor-pointer" : "bg-[#d6eae9] text-gray-600 cursor-default"}`}
                style={{ top, left }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {estacao.link ? (
                  // Para Pinheiros, link dinâmico com [info] na URL
                  <Link href={estacao.link}>
                    {estacao.nome}
                  </Link>
                ) : (
                  estacao.nome
                )}
                
                {hoverIndex === i && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-md text-xs text-gray-700">
                    Informações sobre {estacao.nome}
                  </div>
                )}
              </motion.div>
            );
          })}

          <svg className="absolute w-full h-full pointer-events-none z-0" viewBox="0 0 400 600">
            {estacoesLinha9.map((_, i) => {
              if (i === estacoesLinha9.length - 1) return null;
              const y1 = 60 + i * 25 + 10;
              const y2 = 60 + (i + 1) * 25 + 10;
              const x1 = i % 2 === 0 ? 40 + 40 : 200 + 40;
              const x2 = (i + 1) % 2 === 0 ? 40 + 40 : 200 + 40;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#42807D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          <motion.div
            className="absolute z-20"
            initial={false}
            animate={{
              top: `${50 + currentTrainIndex * 25}px`,
              left: `${currentTrainIndex % 2 === 0 ? 40 : 200}px`,
            }}
            transition={{ duration: 0.5 }}
          >
            <FaTrain className="text-[#42807D] text-xl" />
          </motion.div>
        </motion.div>
      )}

      <footer className="fixed bottom-4 left-0 w-full px-4">
        <Link href="/header">
          <motion.button
            className="bg-[#42807D] text-white w-full py-3 rounded-[9px] text-base hover:bg-[#365d56]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voltar
          </motion.button>
        </Link>
      </footer>
    </main>
  );
};

export default Esmeralda;
