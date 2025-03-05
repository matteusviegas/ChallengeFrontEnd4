'use client'
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
          <button 
            className="absolute left-0 top-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-400 transition"
            onClick={() => router.push("/Login")}
          >
            Deslogar
          </button>

          <button 
            className="absolute right-0 top-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            onClick={() => window.location.reload()}
          >
            Atualizar
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <h2 className="lg:text-5xl text-[2.6rem] text-center mb-[7%] font-bold text-black w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
            Últimas Notícias
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className={`bg-white h-[300px] rounded-[10px] shadow-md overflow-hidden transition-all duration-300 ${hoveredId === noticia.id ? "scale-105 cursor-pointer" : ""}`}
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
            <p className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] text-center font-bold">
              {noticia.description}
            </p>
          </div>
        ))}
      </div>

      {/* Opiniao */}
      <div className="text-center flex flex-col  mt-12">
        <h1 className="lg:text-[3.3rem] text-[2rem]  mx-auto  font-bold text-black mb-8 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
          Sua opinião importa!
        </h1>
        <p className="text-[1.3rem] lg:text-[1.8rem] lg:w-[50%] mx-auto leading-snug text-gray-600 mb-6">
          É importante para que possamos trazer melhorias futuras!
        </p>

        <div className="lg:w-[5%] text-center mb-13 mx-auto">
          <Link href="/sugestao">
            <img className="lg:h-[66px] md:h-[69px] xl:h-[69px] w-[72px] mx-auto" src="/img_icons/image_form.png" alt="formulario" />
            <p className="text-[1.2rem] lg:text-[1.5rem] pt-4">Formulario</p>
          </Link>
        </div>

        <Link href="/header">
          <button className="w-[62%] cursor-pointer py-4 p-2 lg:px-8 bg-[#42807D] text text-white lg:text-xl rounded-lg hover:bg-green-600 transition duration-200">
            Consultar linhas ccr
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Avisos;
