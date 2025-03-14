'use client'
import Link from "next/link";
import { useState } from "react";

const Denuncie = () => {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = () => {
    if (image && message) {
      console.log("Imagem enviada com sucesso:", image.name);
      console.log("Mensagem enviada:", message);
      alert("Denúncia enviada com sucesso!");
    } else {
      console.log("Por favor, preencha todos os campos!");
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full bg-[#000] text-white sm:w-[70%] lg:w-[80%] p-4">
          <img
            src="img_icons/Wi-fi.png"
            alt="Ícone Wi-Fi"
            className="mb-6 mx-auto"
          />
          <div className="bg-[#42807D] w-[88%] mx-auto">
            <h1 className="text-[1.3rem] w-[80%] mx-auto sm:text-3xl text-center mb-4">
              Gostaria de fazer uma denúncia ou relatar um problema?
            </h1>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[88%] mx-auto">
              <textarea
                className="w-full p-4 mb-4 border-none rounded-lg text-lg resize-none h-[230px]"
                placeholder="Digite sua mensagem aqui..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mx-auto text-center w-[88%]">
              <button
                onClick={handleSubmit}
                className="w-[70%] mt-[10%] bg-[#4ac373] text-black py-3 rounded-lg font-bold text-lg hover:bg-[#35796b] transition duration-300"
              >
                Enviar
              </button>
            </div>
          </div>

          <p className="text-lg text-center mb-6">
            Sua informação estará protegida!
          </p>

          <div className="text-center">
            <Link href="/pinheiros">
              <button className="mt-6 bg-[#42807D] text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-[#35796b] transition duration-300">
                Voltar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Denuncie;
