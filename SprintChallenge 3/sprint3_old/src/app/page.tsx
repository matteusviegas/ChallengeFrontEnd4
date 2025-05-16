import Header from "./Components/Header";
import TelaLogin from "./Components/TelaLogin";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <div className="bg-white">
          <button className="mx-auto bg-[#42807D] mt-6 w-[15%] p-3 text-white rounded-2xl font-bold text-1xl">
            atualizar
          </button>
          <TelaLogin /> 
        </div>
      </div>
    </>
  );
}
