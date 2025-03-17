'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Avisos = () => {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  const noticias = [
    {
      id: 1,
      imgSrc: "img/linhaAmaela2.jpg",
      description: "Metrô anuncia nova linha que leva passageiros para a Zona Leste.",
      date: "03/16/2025",
      aviso: "Aviso: Possível paralisação devido a chuvas fortes.",
      details: "A Linha Amarela está enfrentando atrasos devido à chuva intensa. Pedimos que os passageiros planejem suas viagens com antecedência."
    },
    {
      id: 2,
      imgSrc: "img/linha_diamante.jpg",
      description: "Notícia sobre o evento 2",
      date: "02/25/2025",
      aviso: "Aviso: Linhas operando parcialmente devido a falha técnica.",
      details: "Falha técnica afeta os trens da Linha Diamante. Estações estão sendo monitoradas, e há espera para embarque em várias paradas."
    },
    {
      id: 3,
      imgSrc: "img/imgmetro1.png",
      description: "Notícia sobre o evento 3",
      date: "03/12/2025",
      aviso: "Aviso: Redução de horário nas linhas durante o final de semana.",
      details: "Devido a manutenções programadas, as linhas terão horários reduzidos durante o fim de semana. Verifique os horários de funcionamento."
    },
    {
      id: 4,
      imgSrc: "img/metro_esmeralda1.jpg",
      description: "Notícia sobre o evento 4",
      date: "02/18/2025",
      aviso: "Aviso: Acidente na linha Esmeralda causa atrasos significativos.",
      details: "A linha Esmeralda está operando com atrasos devido a um acidente. Recomendamos alternativas de transporte."
    },
    {
      id: 5,
      imgSrc: "img/metro_amarela4.jpg",
      description: "Notícia sobre o evento 5",
      date: "01/10/2025",
      aviso: "Aviso: Interdição parcial na Linha Amarela por manutenção.",
      details: "Interdição parcial da Linha Amarela para reparos. Reprogramação dos horários pode causar impactos nos passageiros."
    },
    {
      id: 6,
      imgSrc: "img/metro_linhaAmarela5.jpg",
      description: "Notícia sobre o evento 6",
      date: "03/05/2025",
      aviso: "Aviso: Chegada de novos trens na Linha Amarela.",
      details: "Novos trens começam a operar na Linha Amarela, prometendo maior conforto e redução no tempo de viagem."
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedNews, setSelectedNews] = useState<any | null>(null);

  const handleImageClick = (noticia: any) => {
    setSelectedNews(noticia);
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 sm:px-6">
      <div className="relative mb-2 flex flex-col gap-5">
        <div className="mb-[10%]">
          <motion.button 
            className="absolute left-0 top-4 w-[30%] py-3 px-4 bg-[#42807D] text-white rounded-lg hover:bg-green-400 transition"
            onClick={() => router.push("/Login")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Deslogar
          </motion.button>
        </div>

        <div className="flex justify-between items-center mt-10">
          <motion.h2 
            className="text-[1.7rem] text-start  font-bold text-black w-full sm:w-[80%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ÚLTIMAS NOTÍCIAS
          </motion.h2>

          <motion.button 
            className="w-[30%] py-3 px-4 bg-[#42807D] text-white rounded-lg mb-2 hover:bg-green-700 transition"
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Atualizar
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {noticias.map((noticia) => (
          <motion.div
            key={noticia.id}
            className="h-[300px] rounded overflow-hidden duration-300"
          >
            <div className="flex flex-col bg-[#42807D] p-4">
              <motion.div
                className="text-xs text-[1.3rem] text-start text-black font-bold mb-2"
              >
                {noticia.date}
              </motion.div>

              {/* Imagem */}
              <div 
                className="w-full h-50 mb-4 flex items-center justify-center cursor-pointer"
                onClick={() => handleImageClick(noticia)}
              >
                <motion.img
                  src={noticia.imgSrc}
                  alt={`Notícia ${noticia.id}`}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="text-center text-white">
                <motion.p
                  className="text-[1.2rem] text-start font-bold mb-2"
                >
                  {noticia.aviso}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
{/* Modal Ajustado */}
{selectedNews && (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-gray-900 z-50 p-4 sm:p-8 flex justify-center items-center">
    <div className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-[80%] max-w-[800px]">
      <motion.div className="text-center">
        <motion.img 
          src={selectedNews.imgSrc} 
          alt="Notícia detalhada" 
          className="w-full sm:h-[200px] object-cover mb-4"
        />
        <motion.h3 className="text-[1.6rem] sm:text-[1.8rem] font-bold text-black mb-4">
          {selectedNews.description}
        </motion.h3>
        <motion.p className="text-[1rem] sm:text-[1.2rem] text-gray-700">
          {selectedNews.details}
        </motion.p>
        <motion.button
          className="mt-6 py-3 px-6 bg-red-600 text-white rounded-lg"
          onClick={() => setSelectedNews(null)}
        >
          Fechar
        </motion.button>
      </motion.div>
    </div>
  </div>
)}


      <div className="text-center flex flex-col mt-12">
        <motion.h1
          className="text-[2rem] mx-auto font-bold text-black mb-8 w-[99%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sua opinião importa!
        </motion.h1>

        <motion.p
          className="text-[1.3rem] mx-auto leading-snug text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          É importante para que possamos trazer melhorias futuras!
        </motion.p>

        <div className="w-[30%] mx-auto mb-13">
          <Link href="/sugestao">
            <motion.img
              className="h-[66px] w-[72px] mx-auto"
              src="/img_icons/image_form.png"
              alt="formulario"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-[1.2rem] pt-4">Formulario</p>
          </Link>
        </div>

        <Link href="/header">
          <motion.button
            className="w-[62%] cursor-pointer py-4 p-2 bg-[#42807D] text text-white rounded-lg hover:bg-green-600 transition duration-200 mb-[18%]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Consultar linhas ccr
          </motion.button>
        </Link>

      </div>
    </div>
  );
};

export default Avisos;
