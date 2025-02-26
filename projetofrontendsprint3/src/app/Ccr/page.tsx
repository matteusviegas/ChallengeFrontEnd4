'use client' 
import Image from "next/image";
import Link from "next/link";
import BotaoTopo from "../Components/BotaoTopo/Botao";

const Sobre = () => {
    return (
        <>
<div className="h-[300px] w-[450px]">
    <img src="/IMG_LOGO/Logo_CCR.jfif" alt="logo da ccr" />

</div>
            <section>
    <div>
        <p className="text-[1.7rem] mx-auto w-[60%] text-center">O Grupo CCR é referência em infraestrutura de mobilidade no Brasil, liderando o setor com excelência na prestação de serviços e melhorando a vida das pessoas através da mobilidade há 25 anos.</p>
    </div>
</section>

<section>
    <div className="flex mx-auto mt-[7%] text-[1.9rem] w-[68%] text-center gap-[100]">
        <div>
            <p>30 bilhões de reais em investimentos nos próximos anos.</p>
            _________________________
            <p className="p-[3%]">Atuam em 13 estados, em todas as regiões do Brasil.</p>
        </div>

        <div>
            <p>37 concessões em rodovias, aeroportos e mobilidade urbana.</p>
            _____________________
            <p className="p-[3%]">60% de mulheres em cargos de média e alta liderança CCR.</p>
        </div>
    </div>

    <p className="text-center text-[2.4rem] mt-[10%]"> 25 anos melhorando vidas com <span className="text-[#42807D]" >mobilidade</span>.</p>
    <BotaoTopo cor={'#42807D'} texto={'Voltar ao topo'}/>

</section>

        </>
    )
}


export default Sobre;