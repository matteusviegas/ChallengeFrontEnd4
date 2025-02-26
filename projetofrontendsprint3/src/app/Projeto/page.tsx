'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";
import Link from "next/link";
import IconsSkills from '../Components/IconsSkills/IconsSkills';
import Formulario from '../Components/Formulario/Formulario';
import Parceria from '../Components/Parceria/Parceria';
import Carrossel from '../Components/Carrosel/Carrosel';
import BotaoTopo from '../Components/BotaoTopo/Botao';
const Produto = () => {
    return (
        <>
      <main>

<h1 className="text-6xl text-center mt-[3%] font-bold p-8">PROJETO</h1>

<div className='mt-44 pl-14'>
    <div className="ml-8 text-2xl">
        <div className=" w-[69%] font-poppins w-[70%]">
         <h1 className='text-[2.9rem] pb-[4%] font-bold'>Soluçao e funcionalidades</h1>
            <p className='text-[2rem] '>O projeto da Future Station oferece uma solução inovadora que integra um chatbot interativo, um painel de avisos e uma ferramenta para análises de horários de pico, facilitando a comunicação e o gerenciamento de dados em tempo real</p>
            <p className="text-[2rem] pt-14"><strong>Chatbot interativo:</strong> O chatbot da Future Station é capaz de atender dúvidas frequentes, realizar agendamentos e fornecer orientações, oferecendo suporte 24/7 aos usuários.</p>
            <p className="text-[2rem] pt-[7%]"><strong>Painel de Avisos:</strong> O painel centraliza informações importantes, como atualizações, prazos e notificações relevantes, garantindo que todos estejam informados em tempo hábil</p>
            <p className="text-[2rem] pt-[7%]"><strong>Analize de Horarios de Pico:</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta ipsa ut accusamus nemo optio, officiis, sit est esse quaerat fugit odit quibusdam quisquam omnis hic facere doloribus placeat praesentium!</p>
        </div>

        <h2 className="text-5xl pt-[7%]">Nossa visão</h2>
        <div>
            <p className="pt-14 text-[2rem] w-[70%] ">Ser a plataforma líder em soluções de automação interativa e gestão inteligente de dados, melhorando a eficiência e a comunicação em ambientes corporativos e educacionais</p>
        </div>

        <h2 className="text-5xl pt-[6%] ">Nossa Missão</h2>
        <div>
            <p className="pt-14 text-[2rem] w-[65%]">Proporcionar uma experiência fluida e personalizada através de soluções tecnológicas avançadas, promovendo a agilidade, a inovação e o acesso rápido à informação. Essa abordagem da Future Station visa transformar a maneira como as organizações se comunicam e gerenciam suas operações.</p>
        </div>
    </div>

    <section>

</section>


   <IconsSkills/>
   <Formulario/>

    <Parceria/>
    <BotaoTopo cor={'#42807D'} texto={'Voltar ao topo'}/>

</div>

</main>

        </>
    )
}

export default Produto; 