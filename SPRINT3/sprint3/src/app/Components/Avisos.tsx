import Link from "next/link";

const Avisos = () => {
    const currentDate = new Date(); 
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString(); 
  
    const noticias = [
      {
        id: 1,
        imgSrc: "img/you.jpg", 
        description: "Notícia sobre o evento 1",
        date: formattedDate,
      },
      {
        id: 2,
        imgSrc: "img/you.jpg",
        description: "Notícia sobre o evento 2",
        date: "02/25/2025", 
      },
      {
        id: 3,
        imgSrc: "img/you.jpg",
        description: "Notícia sobre o evento 3",
        date: "02/25/2025",
      },
      {
        id: 4,
        imgSrc: "img/you.jpg",
        description: "Notícia sobre o evento 4",
        date: "02/25/2025",
      },
      {
        id: 5,
        imgSrc: "img/you.jpg",
        description: "Notícia sobre o evento 5",
        date: "02/25/2025",
      },
      {
        id: 6,
        imgSrc: "img/you.jpg",
        description: "Notícia sobre o evento 6",
        date: "02/25/2025",
      },
    ];
  
    return (
     <div>

<button className=" w-[10%] py-2 bg-green-900 text-white rounded-lg mb-6 hover:bg-red-600">
          Deslogar
        </button>
      <div className="flex space-x-240">
      
         <h2 className="text-2xl font-bold p-4 mb-4">Últimas Notícias</h2>
      
<button className=" w-[10%]  bg-green-900 text-white rounded-lg mb-6 hover:bg-blue-600">
          Atalizar
        </button>
      </div>
     <div className="p-4 max-w-8xl bg-[#42807D] mx-auto p-6  rounded-lg shadow-md">
  

<div className=" bg-[#42807D] flex grid grid-cols-3 gap-4 mb-6">
  {noticias.map((noticia) => (
  
  <div key={noticia.id} className="relative">
      <div className=" w-[20%] absolute top-2 left-2 text-sm text-white bg-black bg-opacity-60 px-2 py-1 rounded">
        {noticia.date === formattedDate ? `${formattedDate} ${formattedTime}` : noticia.date}
      </div>
      <img  src={noticia.imgSrc} alt={`Notícia ${noticia.id}`} className="w-full h-40 object-cover rounded-lg mb-2" />
      <p className="text-center text-sm">{noticia.description}</p>
    </div>
  ))}
</div>





</div>

<div className="  flex flex-col text-center mb-6">
  <h1 className="text-6xl  font-bold text-center mb-4">Sua opinião importa!</h1>
  <p className="text-[1.2rem] text-center">É importante para que possamos trazer melhorias futuras!</p>

 
 <span className="text-lg">Formulário</span>
 <Link href="/Header">
 <button className="p-2 w-[23%]  bg-[#42807D] text-white rounded-lg hover:bg-blue-600">
  Consultar LINHAS CCR
</button>
 </Link>

</div>

</div>
);
};

export default Avisos;