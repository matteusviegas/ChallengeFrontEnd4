'use client';
import Link from "next/link";
import { useState } from "react";
import Button from "../Botao/Botao";
import emailjs from 'emailjs-com';

const Denuncie = () => {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = () => {
    if (message && email) {
      const templateParams = {
        from_email: email,
        message: message,
      };

      emailjs
        .send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams, 'SEU_PUBLIC_KEY')
        .then((response: { status: any; text: any; }) => {
          console.log('Mensagem enviada com sucesso!', response.status, response.text);
          alert('Denúncia enviada com sucesso! Verifique seu e-mail para a confirmação.');
          setMessage('');
          setEmail('');
        })
        .catch((err: any) => {
          console.error('Erro ao enviar:', err);
          alert('Erro ao enviar. Tente novamente.');
        });
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#000]">
        <div className="w-full text-white sm:w-[70%] lg:w-[80%] p-4">
          <img
            src="img_icons/imagex.png"
            alt="Ícone Wi-Fi"
            className="mb-6 mx-auto"
          />
          <div className="bg-[#42807D] w-[88%] p-2 mx-auto rounded-2xl">
            <h1 className="text-[1.3rem] w-[90%] mx-auto sm:text-3xl text-center mb-4">
              Gostaria de fazer uma denúncia ou relatar um problema?
            </h1>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[88%] mx-auto">
              <input
                type="email"
                className="w-full p-4 mb-4 border-none rounded-lg text-lg"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                className="w-full p-4 mb-4 border-none rounded-lg text-lg resize-none h-[230px]"
                placeholder="Digite sua mensagem aqui..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

      
            </div>

            <div className="mx-auto text-center w-[88%]">
              <button
                onClick={handleSubmit}
                className="w-[70%] mt-[10%] bg-[#4ac373] text-black py-3 rounded-lg font-bold text-lg hover:bg-[#fff] cursor-pointer transition duration-300"
              >
                Enviar
              </button>
            </div>
          </div>

          <div className="w-[80%] sm:w-[33%] flex items-center text-center ML-[2%] mt-10">
            <img className="w-[30%] sm:w-full" src="img_Icons/imageseguro.png" alt="img_segurança" />
            <p className="text-lg sm:text-xl text-center mt-4 mb-6">
              Sua informação estará protegida!
            </p>
          </div>

          <div className="flex justify-center mt-[19%]">
            <Link href="/pinheiro">
              <Button
                label="Voltar"
                onClick={() => {}}
                className="bg-[#42807D] cursor-pointer text-white px-26 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Denuncie;
