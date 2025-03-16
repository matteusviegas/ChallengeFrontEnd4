'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Avisos = () => {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  const noticias = [
    {
      id: 1,
      imgSrc: "img/linhaAmaela2.jpg",
      description: "Metrô anuncia nova linha que leva passageiros para ...",
      date: formattedDate,
    },
    {
      id: 2,
      imgSrc: "img/linha_diamante.jpg",
      description: "Notícia sobre o evento 2",
      date: "02/25/2025",
    },
    {
      id: 3,
      imgSrc: "img/imgmetro1.png",
      description: "Notícia sobre o evento 3",
      date: "02/25/2025",
    },
    {
      id: 4,
      imgSrc: "img/metro_esmeralda1.jpg",
      description: "Notícia sobre o evento 4",
      date: "02/25/2025",
    },
    {
      id: 5,
      imgSrc: "img/metro_amarela4.jpg",
      description: "Notícia sobre o evento 5",
      date: "02/25/2025",
    },
    {
      id: 6,
      imgSrc: "img/metro_linhaAmarela5.jpg",
      description: "Notícia sobre o evento 6",
      date: "02/25/2025",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="relative mb-6 flex flex-col gap-5">
        <div className="mb-[10%]">
          {/* Deslogar Button */}
          <motion.button 
            className="absolute left-0 top-4 w-[40%] py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-400 transition"
            onClick={() => router.push("/Login")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Deslogar
          </motion.button>
        </div>

        <div className="flex justify-between items-center mt-10">
          {/* Últimas Notícias Title */}
          <motion.h2 
            className="text-[2.4rem] text-center font-bold text-black w-[80%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ÚLTIMAS NOTÍCIAS
          </motion.h2>

          {/* Atualizar Button */}
          <motion.button 
            className="w-[20%] py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Atualizar
          </motion.button>
        </div>
      </div>

      {/* Noticias List */}
      <div className="grid lg:w-[86%] mx-auto sm:grid-cols-3 gap-8 mb-6">
        {noticias.map((noticia) => (
          <motion.div
            key={noticia.id}
            className={`bg-white h-[300px] rounded-[10px] shadow-md overflow-hidden transition-all duration-300 ${hoveredId === noticia.id ? "scale-105 cursor-pointer" : ""}`}
            onMouseEnter={() => setHoveredId(noticia.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full relative">
              <motion.div
                className="absolute top-2 left-2 text-sm text-white bg-black bg-opacity-60 px-2 py-1 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {noticia.date === formattedDate
                  ? `${formattedDate} ${formattedTime}`
                  : noticia.date}
              </motion.div>

              {/* Div for Image with background color #42807D */}
              <div className="w-full h-59 overflow-hidden rounded-lg mb-4 flex items-center justify-center bg-[#42807D]">
                <motion.img
                  src={noticia.imgSrc}
                  alt={`Notícia ${noticia.id}`}
                  className="object-cover w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>

            <motion.p
              className="text-[1.2rem] text-center font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {noticia.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Opinion Section */}
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
            className="w-[62%] cursor-pointer py-4 p-2 bg-[#42807D] text text-white rounded-lg hover:bg-green-600 transition duration-200"
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
