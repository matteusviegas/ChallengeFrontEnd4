import { notFound } from 'next/navigation';
import BotaoVoltar from '../../Components/BotaoVoltar';
import { JSX } from 'react';

const content: Record<string, JSX.Element> = {
  wifi: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-lg max-w-[600px] mx-auto my-6">
      <h1 className="text-4xl font-semibold text-center text-[#333] mb-4">Wi-Fi Gratuito</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        A Estação Pinheiros oferece Wi-Fi gratuito em toda a sua extensão, permitindo que você se conecte à internet de forma rápida e fácil enquanto aguarda seu trem.
      </p>
      <button className="bg-[#42807D] text-white px-8 py-3 rounded-full text-xl hover:bg-[#365d56] transition-all duration-300 mb-4">
        Conectar Agora
      </button>
      <BotaoVoltar />
    </div>
  ),
  banheiro: (
    <div className="flex flex-col items-center justify-center p-8 bg-[#f0f4f8] rounded-lg shadow-lg max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#333] mb-5">Banheiro</h1>
      <p className="text-base sm:text-lg font-semibold text-[#444] mb-8">
        A Estação Pinheiros conta com banheiros localizados próximos a todas as plataformas e em pontos estratégicos para garantir o conforto dos usuários. Banheiros adaptados para pessoas com deficiência também estão disponíveis.
      </p>
      <div className="w-full px-4 sm:px-0 text-left">
        <p className="text-lg sm:text-xl font-bold text-[#333] mb-4">Horário de funcionamento</p>
        <ul className="list-inside text-base sm:text-lg font-semibold text-[#444] space-y-2">
          <li>Segunda a sexta-feira: 05:00 - 23:00</li>
          <li>Sábados: 05:00 - 22:00</li>
          <li>Domingos: 06:00 - 22:00</li>
        </ul>
      </div>
      <BotaoVoltar />
    </div>
  ),
  acessibilidade: (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-xl shadow-xl max-w-3xl mx-auto my-8 border border-gray-200">
      <h1 className="text-4xl font-bold text-center text-[#1A202C] mb-6">Acessibilidade</h1>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mb-6 bg-[#2F855A] text-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.01]">
        <div className="flex items-center gap-3">
          <span className="text-lg sm:text-xl font-semibold">Elevadores</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg sm:text-xl font-semibold">Assistência ao Usuário</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg sm:text-xl font-semibold">Sinalização</span>
        </div>
      </div>
      <p className="text-center text-lg sm:text-xl text-[#2D3748] font-medium leading-relaxed">
        Nossa equipe está disponível em todos os pontos acessíveis da estação para garantir sua segurança e conforto. Sinta-se à vontade para solicitar ajuda a qualquer momento.
      </p>
      <BotaoVoltar />
    </div>
  ),
  pontos: (
    <div className="flex flex-col items-center justify-center p-8 bg-[#f8f9fa] rounded-lg shadow-lg max-w-[600px] mx-auto my-6">
      <h1 className="text-4xl font-semibold text-center text-[#2e3a47] mb-5">Pontos Turísticos</h1>
      <p className="text-center text-lg text-[#444] mb-8">
        A Estação Pinheiros está cercada por diversos pontos turísticos e culturais. Aproveite sua visita para explorar as atrações ao redor da estação.
      </p>
      <ul className="list-inside text-lg text-[#444] space-y-3 w-[80%] mb-6 text-left">
        <li>Parque Villa-Lobos</li>
        <li>Instituto Tomie Ohtake</li>
        <li>Shopping Eldorado</li>
        <li>Teatro do Sesc Pinheiros</li>
      </ul>
      <BotaoVoltar />
    </div>
  ),
  "achados-e-perdidos": (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Achados & Perdidos</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        Se você perdeu algum item dentro da estação Pinheiros, pode procurar pelo setor de Achados & Perdidos. Eles estão prontos para ajudar a localizar o que você perdeu e devolvê-lo de maneira segura.
      </p>
      <p className="text-center text-lg text-[#444] mb-6">
        Para informar um item perdido ou para procurar por itens encontrados, entre em contato diretamente com o setor de Achados & Perdidos, localizado próximo ao Balcão de Informações.
      </p>
      <BotaoVoltar />
    </div>
  ),
  mapa: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Mapa CPTM</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        Acesse o mapa da CPTM para facilitar a navegação pelas linhas e estações. O mapa interativo pode ser acessado diretamente aqui.
      </p>
      <button className="bg-[#42807D] text-white px-8 py-3 rounded-full text-xl hover:bg-[#365d56] transition-all duration-300">
        Acessar Mapa Interativo
      </button>
      <BotaoVoltar />
    </div>
  ),
  vagas: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Vagas de Estacionamento</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        A Estação Pinheiros oferece vagas de estacionamento para os passageiros. A localização das vagas é estratégica, próxima aos acessos principais da estação.
      </p>
      <p className="text-center font-semibold text-[#333]">Vagas disponíveis:</p>
      <ul className="list-inside text-lg text-[#444] space-y-2 w-[80%] mb-6 text-left">
        <li>Estacionamento coberto: 150 vagas</li>
        <li>Estacionamento descoberto: 50 vagas</li>
      </ul>
      <BotaoVoltar />
    </div>
  ),
  terminais: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Terminais</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        A Estação Pinheiros conta com terminais de ônibus integrados, facilitando a conexão com diversos bairros de São Paulo e outras regiões.
      </p>
      <button className="bg-[#42807D] text-white px-8 py-3 rounded-full text-xl hover:bg-[#365d56] transition-all duration-300">
        Veja o Mapa dos Terminais
      </button>
      <BotaoVoltar />
    </div>
  ),
  sobre: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Sobre a Estação Pinheiros</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        A Estação Pinheiros é uma das principais estações de transporte público da cidade de São Paulo. Localizada na Zona Oeste, ela conecta diversas linhas de trem e oferece diversos serviços para os passageiros.
      </p>
      <button className="bg-[#42807D] text-white px-8 py-3 rounded-full text-xl hover:bg-[#365d56] transition-all duration-300">
        Saiba mais sobre a Estação
      </button>
      <BotaoVoltar />
    </div>
  ),
  aeroporto: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Aeroportos Próximos</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        A Estação Pinheiros está bem localizada em relação aos principais aeroportos de São Paulo. Confira os detalhes de como chegar aos aeroportos mais próximos:
      </p>
      <ul className="list-inside text-lg text-[#444] space-y-2 w-[80%] mb-6 text-left">
        <li>Aeroporto de Congonhas (CGH) – 30 minutos de carro</li>
        <li>Aeroporto Internacional de Guarulhos (GRU) – 1h de carro</li>
      </ul>
      <BotaoVoltar />
    </div>
  ),
  banco: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Banco 24H</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        A Estação Pinheiros conta com caixas eletrônicos 24h para sua conveniência. Os caixas estão localizados em pontos estratégicos, garantindo fácil acesso.
      </p>
      <button className="bg-[#42807D] text-white px-8 py-3 rounded-full text-xl hover:bg-[#365d56] transition-all duration-300">
        Verificar Localização dos Caixas
      </button>
      <BotaoVoltar />
    </div>
  ),
  denuncie: (
    <div className="flex flex-col items-center justify-center p-6 bg-[#f0f4f8] rounded-lg shadow-md max-w-[600px] mx-auto my-6">
      <h1 className="text-3xl font-semibold text-center text-[#333] mb-4">Denúncias</h1>
      <p className="text-center text-lg text-[#444] mb-6">
        A segurança dos passageiros é uma prioridade. Caso você presencie alguma irregularidade ou tenha algo a denunciar, pode fazer isso de forma rápida e discreta.
      </p>
      <a href="/denuncie">
        <button className="bg-[#42807D] text-white px-8 py-3 rounded-full text-xl hover:bg-[#365d56] transition-all duration-300">
          Fazer Denúncia
        </button>
      </a>
      <BotaoVoltar />
    </div>
  ),
};

const Page = ({ params }: { params: { info: string } }) => {
  const section = content[params.info];
  if (!section) notFound();
  return (
    <main className="min-h-screen bg-[#fff] flex items-center justify-center p-4 sm:p-8">
      {section}
    </main>
  );
};

export default Page;
