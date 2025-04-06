'use client';
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
      imgSrc: "img/paralizacao.jpg",
      description: "Metrô anuncia nova linha que leva passageiros para a Zona Leste.",
      date: "03/16/2025",
      aviso: "Aviso: Possível paralisação devido a chuvas fortes...",
      details: "A Linha Amarela está enfrentando atrasos devido à chuva intensa. Pedimos que os passageiros planejem suas viagens com antecedência."
    },
    {
      id: 2,
      imgSrc: "img/operando normalmente.jpeg",
      description: "Falha técnica afeta os trens da Linha Diamante.",
      date: "02/25/2025",
      aviso: "Aviso: Linhas operando parcialmente devido a falha técnica...",
      details: "Falha técnica afeta os trens da Linha Diamante. Estações estão sendo monitoradas, e há espera para embarque em várias paradas."
    },
    {
      id: 3,
      imgSrc: "img/lentidao.jpeg",
      description: "As linhas terão horários reduzidos durante o fim de semana.",
      date: "03/12/2025",
      aviso: "Aviso: Redução de horário nas linhas durante o final de semana...",
      details: "Devido a manutenções programadas, as linhas terão horários reduzidos durante o fim de semana. Verifique os horários de funcionamento."
    },
    {
      id: 4,
      imgSrc: "img/acidente.jpg",
      description: "A linha Esmeralda está operando com atrasos devido a um acidente.",
      date: "02/18/2025",
      aviso: "Aviso: Acidente na linha Esmeralda causa atrasos significativos...",
      details: "A linha Esmeralda está operando com atrasos devido a um acidente. Recomendamos alternativas de transporte."
    },
    {
      id: 5,
      imgSrc: "img/metro_amarela4.jpg",
      description: "Interdição parcial da Linha Amarela para reparos.",
      date: "01/10/2025",
      aviso: "Aviso: Interdição parcial na Linha Amarela por manutenção.",
      details: "Interdição parcial da Linha Amarela para reparos. Reprogramação dos horários pode causar impactos nos passageiros."
    },
    {
      id: 6,
      imgSrc: "img/novo trem.jpg",
      description: "Novos trens começam a operar na Linha Amarela",
      date: "03/05/2025",
      aviso: "Aviso: Chegada de novos trens na Linha Amarela.",
      details: "Novos trens começam a operar na Linha Amarela, prometendo maior conforto e redução no tempo de viagem."
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedNews, setSelectedNews] = useState<any | null>(null);
  const [showAvisos, setShowAvisos] = useState(false); 

  const handleImageClick = (noticia: any) => {
    setSelectedNews(noticia);
  };

  return (
    <div className="px-4 sm:px-6">
      <div className="relative mb-2 flex flex-col gap-5">
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-[1.7rem] text-center font-bold text-black w-full sm:w-[80%] transition-opacity duration-1000 opacity-100">
            ÚLTIMAS NOTÍCIAS
          </h2>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-[#42807D] mb-[16%] text-white px-6 py-4 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
            onClick={() => setShowAvisos(!showAvisos)} 
          >
            Ver Avisos Importantes
          </button>
        </div>

        {showAvisos && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {noticias.map((noticia) => (
              <div
                key={noticia.id}
                className="h-[300px] rounded overflow-hidden duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col bg-[#42807D] p-4">
                  <div className="text-xs text-[1.3rem] text-start text-black font-bold mb-2">
                    {noticia.date}
                  </div>

                  <div
                    className="w-full h-50 mb-4 flex items-center justify-center cursor-pointer"
                    onClick={() => handleImageClick(noticia)}
                  >
                    <img
                      src={noticia.imgSrc}
                      alt={noticia.description || "Imagem relacionada à notícia"}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="text-center text-white">
                    <p className="text-[1.2rem] text-start font-bold mb-2">
                      {noticia.aviso}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedNews && (
           <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-gray-900 z-50 p-4 sm:p-8 flex justify-center items-center">
            <div className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-[80%] max-w-[800px]">
              <div className="text-center">
                <img
                  src={selectedNews.imgSrc}
                  alt={selectedNews.description || "Notícia detalhada"}
                  className="w-full sm:h-[200px] object-cover mb-4"
                />
                <h3 className="text-[1.6rem] sm:text-[1.8rem] font-bold text-black mb-4">
                  {selectedNews.description}
                </h3>
                <p className="text-[1rem] sm:text-[1.2rem] text-gray-700">
                  {selectedNews.details}
                </p>
                <button
                  className="mt-6 py-3 px-6 bg-red-600 text-white rounded-lg"
                  onClick={() => setSelectedNews(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avisos;
