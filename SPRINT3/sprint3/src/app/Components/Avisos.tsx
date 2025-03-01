'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Avisos = () => {
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
      <div className="flex justify-between items-center mb-6">
        <button className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-400 transition">
          Deslogar
        </button>
        <h2 className="text-5xl font-bold text-black">Últimas Notícias</h2>
        <button className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Atualizar
        </button>
      </div>

      <div className="grid grid-cols-1 p-8 bg-[#42807D] sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className={`bg-white h-[300px] p-4 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
              hoveredId === noticia.id
                ? "scale-105 opacity-100" 
                : "opacity-50" 
            }`}
            onMouseEnter={() => setHoveredId(noticia.id)} 
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="w-full relative">
              <div className="absolute top-2 left-2 text-sm text-white bg-black bg-opacity-60 px-2 py-1 rounded">
                {noticia.date === formattedDate
                  ? `${formattedDate} ${formattedTime}`
                  : noticia.date}
              </div>
              <div className="w-full h-59 overflow-hidden rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={noticia.imgSrc}
                  alt={`Notícia ${noticia.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-sm font-medium">{noticia.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center  flex flex-col mt-12">
        <h1 className="text-[2rem] font-bold text-[#42807D] mb-4">Sua opinião importa!</h1>
        <p className="text-lg text-gray-600 mb-6">
          É importante para que possamos trazer melhorias futuras!
        </p>
     <Link href="/sugestao">
     <p className="cursor-pointer p-8 text-3xl  ">IMAGE AONDE VAI TER O ICONE PRO FORMULARIO </p>
     </Link>
      

        <Link href="/header">
          <button className=" cursor-pointer py-4 px-8 bg-[#42807D] text-white text-xl rounded-lg hover:bg-green-600 transition duration-200">
            Consultar LINHAS CCR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Avisos;
