'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrainFront } from 'lucide-react';

interface Estacao {
  id_estacao: number;
  nome: string;
  localizacao: string;
  passageirosSimulados: number;
}

const MapaLinha = () => {
  const [estacoes, setEstacoes] = useState<Estacao[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/mapa/linha9')
      .then(res => res.json())
      .then(data => {
        const estacoesFormatadas = data.estacoes.map((nome: string, index: number) => ({
          id_estacao: index,
          nome,
          localizacao: 'Zona Sul - SP',
          passageirosSimulados: Math.floor(Math.random() * 1000)
        }));
        setEstacoes(estacoesFormatadas);
      });
  }, []);

  return (
    <div className="flex justify-center w-full py-10 bg-gray-50">
      <div className="relative border-l-4 border-green-600 pl-6 space-y-14">
        
        <motion.div
          className="absolute -left-5 top-0 z-10 text-green-600"
          animate={{
            y: hovered !== null
              ? `${(hovered) * 80}px` 
              : `${(estacoes.length - 1) * 80}px`, // Caso contrário, o trem continua se movendo.
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <TrainFront className="w-8 h-8 animate-pulse" />
        </motion.div>

        {/* Estações */}
        {estacoes.map((estacao, index) => (
          <div
            key={estacao.id_estacao}
            className="relative flex flex-col items-start group"
            onMouseEnter={() => setHovered(estacao.id_estacao)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center space-x-4">
              <div className="w-5 h-5 bg-green-600 rounded-full z-10 transition-transform shadow-md"></div>
              <div className="text-sm sm:text-base text-gray-800 font-medium">{estacao.nome}</div>
              <div className="ml-auto text-xs text-gray-500">👥 {estacao.passageirosSimulados}</div>
            </div>

            {/* Info box animada */}
            <AnimatePresence>
              {hovered === estacao.id_estacao && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-green-200 rounded-lg p-3 mt-2 shadow-xl w-72 text-sm"
                >
                  <p><strong>Estação:</strong> {estacao.nome}</p>
                  <p><strong>Local:</strong> {estacao.localizacao}</p>
                  <p><strong>Passageiros:</strong> {estacao.passageirosSimulados}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapaLinha;
