'use client' 
import Image from "next/image";
import Link from "next/link";
import BotaoTopo from "../Components/BotaoTopo/Botao";

const Sobre = () => {
    return (
        <>
            {/* Logo */}
            <div className="h-[300px] w-[450px] mx-auto">
                <img src="/IMG_LOGO/Logo_CCR.jfif" alt="logo da ccr" className="w-full h-full object-contain" />
            </div>
            
            {/* Descrição do Grupo CCR */}
            <section>
                <div className="my-8">
                    <p className="text-[1.7rem] mx-auto w-[90%] md:w-[60%] text-center">
                        O Grupo CCR é referência em infraestrutura de mobilidade no Brasil, liderando o setor com excelência na prestação de serviços e melhorando a vida das pessoas através da mobilidade há 25 anos.
                    </p>
                </div>
            </section>

            {/* Informações sobre o Grupo */}
            <section>
                <div className="flex flex-col md:flex-row mx-auto mt-[7%] text-[1.9rem] w-[90%] md:w-[68%] text-center gap-8 md:gap-[100px]">
                    <div className="md:w-1/2">
                        <p>30 bilhões de reais em investimentos nos próximos anos.</p>
                        <hr className="my-3 border-t-2 border-gray-300" />
                        <p className="py-3">Atuam em 13 estados, em todas as regiões do Brasil.</p>
                    </div>

                    <div className="md:w-1/2">
                        <p>37 concessões em rodovias, aeroportos e mobilidade urbana.</p>
                        <hr className="my-3 border-t-2 border-gray-300" />
                        <p className="py-3">60% de mulheres em cargos de média e alta liderança CCR.</p>
                    </div>
                </div>

                {/* Slogan */}
                <p className="text-center text-[2.4rem] mt-[10%]">
                    25 anos melhorando vidas com <span className="text-[#42807D]">mobilidade</span>.
                </p>

                {/* Botão para voltar ao topo */}
                <BotaoTopo cor={'#42807D'} texto={'Voltar ao topo'} />
            </section>
        </>
    );
}

export default Sobre;
