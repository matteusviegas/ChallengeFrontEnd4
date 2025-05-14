// app/pinheiros/[info]/page.tsx

import { notFound } from 'next/navigation'; // Para retornar 404 caso a informação não exista
import Link from "next/link";
import { JSX } from 'react';

interface InfoPageProps {
  params: {
    info: string;
  };
}

// Função para gerar os parâmetros estáticos para as páginas
export function generateStaticParams() {
  return [
    { info: "wifi" },
    { info: "banheiro" },
    { info: "acessibilidade" },
    { info: "pontos" },
    { info: "mapa" },
    { info: "vagas" },
        { info: "terminais" },
        { info: "sobre" },
        { info: "aeroporto" },
    { info: "banco" },
    { info: "denuncie" },
  ];
}

const content: Record<string, JSX.Element> = {
  wifi: (
    <div>
      <h1 className="text-2xl font-bold text-center">Wi-Fi Gratuito</h1>
      <p className="text-center mt-4">
        A Estação Pinheiros oferece Wi-Fi gratuito em toda a sua extensão...
      </p>
    </div>
  ),
  // Outros conteúdos para as páginas
  banheiro: (
    <div>
      <h1 className="text-2xl font-bold text-center">Banheiro</h1>
      <p className="text-center mt-4">Informações sobre os banheiros...</p>
    </div>
  ),
  // Continue com o restante dos conteúdos
};

export default function InfoPage({ params }: InfoPageProps) {
  const contentToShow = content[params.info];

  // Retornar um 404 caso o conteúdo não exista
  if (!contentToShow) {
    notFound();
  }

  return (
    <div className="p-4">
      {contentToShow}
      <div className="flex justify-center mt-8">
        <Link href="/pinheiros">
          <button className="bg-[#42807D] text-white px-6 py-3 rounded-[9px] text-xl hover:bg-[#365d56] transition-all duration-300">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
