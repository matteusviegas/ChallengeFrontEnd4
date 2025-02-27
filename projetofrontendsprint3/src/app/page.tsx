'use client';
import Image from "next/image";
import Link from "next/link";
import BotaoTopo from "./Components/BotaoTopo/Botao";

export default function Home() {
  return (
    <>
      <main>

        <section className="flex flex-col gap-10">

        <div className="m-auto flex flex-col md:flex-row mt-8 items-center border rounded-[12px] bg-[#f9f9f9] w-[90%] md:w-[79%] h-auto p-4">
        <div className="w-full md:w-[33%]">
              <h1 className="ml-4 p-6 text-4xl">Estações de Metrô</h1>
              <img className="w-full md:w-[480px] h-auto mb-8" src="Image/metro_linhaAmarela5.jpg" alt="metro1" />
            </div>

            <div className="pl-0 md:pl-14 pb-10 text-center md:text-left">
              <h3 className="text-3xl">Linha 4 Amarela</h3>
              <p className="text-2xl">Luz - Vila Sônia</p>
              <p className="text-2xl">04h AM às 00h.</p>
            </div>
          </div>
          <div className="m-auto flex flex-col md:flex-row mt-8 items-center border rounded-[12px] bg-[#f9f9f9] w-[90%] md:w-[79%] h-auto p-4">
          <div className="w-full md:w-[33%]">
              <h1 className="ml-4 p-6 text-4xl">Estações de Metrô</h1>
              <img className="w-full md:w-[400px] h-auto mb-8" src="Image/imgmetro2.png" alt="metro2" />
            </div>
            <div className="pl-0 md:pl-14 pb-10 text-center md:text-left">
              <h3 className="text-3xl">Linha 9 Esmeralda.</h3>
              <p className="text-2xl">Osasco - Grajaú.</p>
              <p className="text-2xl">04h AM às 00h.</p>
            </div>
          </div>
          <div className="m-auto flex flex-col md:flex-row mt-8 items-center border rounded-[12px] bg-[#f9f9f9] w-[90%] md:w-[79%] h-auto p-4">
          <div className="w-full md:w-[33%]">
              <h1 className="ml-4 p-6 text-4xl">Estações de Metrô</h1>
              <img className="w-full md:w-[400px] h-auto mb-8" src="Image/linha_diamante.jpg" alt="metro3" />
            </div>
            <div className="pl-0 md:pl-14 pb-10 text-center md:text-left">
              <h3 className="text-3xl">Linha 8 Diamante</h3>
              <p className="text-2xl">Júlio Prestes - Itapevi</p>
              <p className="text-2xl">04h AM às 00h.</p>
            </div>
          </div>

        </section>

        <section>
          <div className="bg-[#42807D] w-[90%] md:w-[86%] h-auto md:h-[650px] m-auto mt-10 p-2.5 rounded-[19px]">
            <div className="flex items-center mb-4 ml-5">
              <div className="w-5 h-5 rounded-full bg-yellow-400 mt-6 mr-7 mb-2"></div>
              <div>
                <h2 className= "sm:text-[2rem]  text-white mt-12 text-5xl m-0">LINHA 4 AMARELA</h2>
                <p className="m-0 text-3xl">Operando normalmente</p>
              </div>
            </div>

            <div className="flex items-center mb-4 ml-5">
              <div className="w-5 h-5 rounded-full bg-green-400 mt-6 mr-7 mb-2"></div>
              <div>
                <h2 className="text-white text-5xl m-0 pt-20">LINHA 8 DIAMANTE</h2>
                <p className="m-0 text-3xl">Operando normalmente</p>
              </div>
            </div>

            <div className="flex items-center mb-4 ml-5">
              <div className="w-5 h-5 rounded-full bg-red-500 mr-7 mt-6 mb-2"></div>
              <div>
                <h2 className="text-white text-5xl m-0 pt-20">LINHA 9 ESMERALDA</h2>
                <p className="m-0 text-3xl">Operando com velocidade reduzida</p>
              </div>
            </div>

          </div>
        </section>
        <section>
  <h1 className="mt-[10%] font-bold pb-[10%] text-center text-6xl">PROBLEMAS ENFRENTADOS</h1>

  <div className="ml-6 p-4">
    <h3 className="text-5xl font-bold pb-7">Superlotação</h3>
    <p className="text-2xl">Durante os horários de pico, o fluxo de passageiros nas estações de metrô aumenta consideravelmente, o que pode causar uma superlotação intensa nas plataformas e nos trens. Essa aglomeração dificulta o embarque e desembarque de passageiros, tornando o processo mais demorado e, muitas vezes, desconfortável.</p>
  </div>

  <div className="ml-6 p-4 mt-10">
    <h3 className="text-5xl font-bold pb-7">Falta de respostas ágeis</h3>
    <p className="text-2xl">A falta de respostas rápidas e claras em situações de emergência no metrô cria um ambiente de insegurança e desinformação para os passageiros. Sem orientação oficial, muitos acabam recorrendo a boatos, o que aumenta a ansiedade e o estresse no local.</p>
  </div>

</section>


      </main>
    </>
  );
}
