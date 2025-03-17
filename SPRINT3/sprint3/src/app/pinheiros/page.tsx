import Link from "next/link";

const Pinheiros = () => {
  return (
    <>
      <div className="w-full sm:w-[90%] mx-auto mt-12 text-center">
        <h1 className="text-[#42807D] text-3xl  font-bold mb-6">PINHEIROS</h1>
        <p className=" text-[1.7rem] mb-8">
          Acesso às linhas:{" "}
          <span className="inline-block w-6 h-6 bg-[#42807D] rounded-full text-center text-white font-bold text-lg sm:text-2xl">
            9
          </span>{" "}
          e{" "}
          <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full text-center text-white font-bold text-lg sm:text-xl">
            4
          </span>
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 sm:gap-6 mx-auto">
          {[ 
            { name: "Wi-Fi", icon: "/img_Icons/Wi-fi.png", disabled: true },
            { name: "Banheiro", icon: "/img_Icons/img2.webp", disabled: true },
            { name: "Acessibilidade", icon: "/img_Icons/img3.webp", disabled: false, link: "/acessibilidade" },
            { name: "Achados & Perdidos", icon: "/img_Icons/img4.webp", disabled: true },
            { name: "Pontos turísticos e culturais", icon: "/img_Icons/img5.webp", disabled: true },
            { name: "Mapa CPTM", icon: "/img_Icons/img6.webp", disabled: true },
            { name: "Vagas", icon: "/img_Icons/img7.webp", disabled: true },
            { name: "Terminais", icon: "/img_Icons/img8.webp", disabled: true },
            { name: "Sobre", icon: "/img_Icons/img9.webp", disabled: true },
            { name: "Aeroportos", icon: "/img_Icons/img10.webp", disabled: true },
            { name: "Banco 24H", icon: "/img_Icons/img11.webp", disabled: true },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-between h-full"> 
              {item.link ? (
                <Link href={item.link}>
                  <div className="flex flex-col items-center">
                    <img 
                      className={`h-[60px] sm:h-[70px] mb-2 ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
                      src={item.icon} 
                      alt={item.name} 
                    />
                    <h2 className={`font-bold text-sm sm:text-lg ${item.disabled ? 'text-gray-400' : ''}`}>
                      {item.name}
                    </h2>
                  </div>
                </Link>
              ) : (
                <div className="flex flex-col items-center">
                  <img 
                    className={`h-[60px] sm:h-[70px] mb-2 ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    src={item.icon} 
                    alt={item.name} 
                  />
                  <h2 className={`font-bold text-sm sm:text-lg ${item.disabled ? 'text-gray-400' : ''}`}>
                    {item.name}
                  </h2>
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col items-center justify-between h-full"> 
            <Link href="/denuncie">
              <div className="flex flex-col items-center">
                <img 
                  className="h-[60px] sm:h-[70px] mb-2" 
                  src="/img_Icons/Wi-fi.png" 
                  alt="Denúncie" 
                />
                <h2 className="font-bold text-sm sm:text-lg">Denúncie</h2>
              </div>
            </Link>
          </div>
        </div>

       

      </div>
    </>
  );
};

export default Pinheiros;
