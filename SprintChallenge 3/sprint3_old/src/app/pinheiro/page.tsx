'use client';

import Link from "next/link";

type ItemType = {
  name: string;
  icon: string;
  disabled: boolean;
  link?: string;
};

const items: ItemType[] = [
  { name: "Wi-Fi", icon: "/img_Icons/Wi-fi.png", disabled: false, link: "/pinheiros/wifi" },
  { name: "Banheiro", icon: "/img_Icons/img2.webp", disabled: false, link: "/pinheiros/banheiro" },
  { name: "Acessibilidade", icon: "/img_Icons/img3.webp", disabled: false, link: "/pinheiros/acessibilidade" },
  { name: "Achados & Perdidos", icon: "/img_Icons/img4.webp", disabled: true },
  { name: "Pontos turísticos e culturais", icon: "/img_Icons/img5.webp", disabled: false, link: "/pinheiros/pontos" },
  { name: "Mapa CPTM", icon: "/img_Icons/img6.webp", disabled: false, link: "/pinheiros/mapa" },
  { name: "Vagas", icon: "/img_Icons/img7.webp", disabled: false, link: "/pinheiros/vagas" },
  { name: "Terminais", icon: "/img_Icons/img8.webp", disabled: false, link: "/pinheiros/terminais" },
  { name: "Sobre", icon: "/img_Icons/img9.webp", disabled: false, link: "/pinheiros/sobre" },
  { name: "Aeroportos", icon: "/img_Icons/img10.webp", disabled: false, link: "/pinheiros/aeroporto" },
  { name: "Banco 24H", icon: "/img_Icons/img12.webp", disabled: false, link: "/pinheiros/banco" },
  { name: "Denuncie", icon: "/img_Icons/img11.webp", disabled: false, link: "/pinheiros/denuncie" },
];

export default function Pinheiros() {
  return (
    <>
      <div className="w-full sm:w-[90%] mx-auto mt-12 text-center">
        <h1 className="text-[#42807D] text-3xl font-bold mb-6">PINHEIROS</h1>
        <p className="text-[1.7rem] mb-8">
          Acesso às linhas:{" "}
          <span className="inline-block w-6 h-6 bg-[#42807D] rounded-full text-white font-bold text-lg sm:text-2xl">9</span>{" "}
          e{" "}
          <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full text-white font-bold text-lg sm:text-xl">4</span>
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.link && !item.disabled ? (
                <Link href={`/pinheiros/${item.link.split('/').pop()}`}>
                  <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-all">
                    <img className="h-[60px] sm:h-[70px] mb-2" src={item.icon} alt={item.name} />
                    <h2 className="font-bold text-sm sm:text-lg">{item.name}</h2>
                  </div>
                </Link>
              ) : (
                <div
                  className="flex flex-col items-center opacity-50 cursor-not-allowed pointer-events-none"
                  aria-disabled="true"
                >
                  <img className="h-[60px] sm:h-[70px] mb-2" src={item.icon} alt={item.name} />
                  <h2 className="font-bold text-sm sm:text-lg text-gray-400">{item.name}</h2>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-[10%]">
        <Link href="/esmeralda">
          <button className="bg-[#42807D] text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
            Voltar à estação
          </button>
        </Link>
      </div>
    </>
  );
}
