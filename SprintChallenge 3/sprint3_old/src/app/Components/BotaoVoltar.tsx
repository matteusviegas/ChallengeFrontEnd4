import Link from 'next/link';

const BotaoVoltar = () => (
  <Link href="/pinheiro">
    <button className="bg-[#42807D] text-white w-[99%] py-3 px-21 rounded-[9px] text-base hover:bg-[#365d56] mt-6">
      Voltar
    </button>
  </Link>
);

export default BotaoVoltar;
