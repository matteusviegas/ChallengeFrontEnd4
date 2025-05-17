'use client';
import Link from "next/link";
import { useState } from "react";
import Button from "../Botao/Botao";
import emailjs from 'emailjs-com';
import Image from "next/image";

const Denuncie = () => {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  };

  const handleSubmit = () => {
    if (!message || !email) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs
      .send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams, 'SEU_PUBLIC_KEY')
      .then((response) => {
        console.log('Mensagem enviada com sucesso!', response.status, response.text);
        alert('Denúncia enviada com sucesso! Verifique seu e-mail para a confirmação.');
        setMessage('');
        setEmail('');
        setImage(null);
      })
      .catch((err) => {
        console.error('Erro ao enviar:', err);
        alert('Erro ao enviar. Tente novamente.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-3xl text-white p-4">
        <div className="mb-6 mx-auto w-20 sm:w-32">
          <Image
            src="/img_icons/imagex.png"
            alt="Ícone Wi-Fi"
            width={128}
            height={128}
            className="w-full h-auto"
          />
        </div>

        <div className="bg-[#42807D] p-4 rounded-2xl">
          <h1 className="text-xl sm:text-3xl text-center mb-4">
            Gostaria de fazer uma denúncia ou relatar um problema?
          </h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <input
              type="email"
              className="w-full p-4 mb-4 rounded-lg text-lg"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className="w-full p-4 mb-4 rounded-lg text-lg resize-none h-56"
              placeholder="Digite sua mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mb-4 text-sm"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-[#4ac373] text-black py-3 rounded-lg font-bold text-lg hover:bg-white transition duration-300"
            >
              Enviar
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="w-20 sm:w-32 mb-2">
            <Image
              src="/img_Icons/imageseguro.png"
              alt="Segurança"
              width={128}
              height={128}
              className="w-full h-auto"
            />
          </div>
          <p className="text-lg sm:text-xl text-center">Sua informação estará protegida!</p>
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/pinheiro">
            <Button
              label="Voltar"
              onClick={() => {}}
              className="bg-[#42807D] text-white px-8 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Denuncie;
