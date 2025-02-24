'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";
import Link from "next/link";
import IconsSkills from '../Components/IconsSkills/IconsSkills';
import Formulario from '../Components/Formulario/Formulario';
import Parceria from '../Components/Parceria/Parceria';
const Produto = () => {
    return (
        <>
      <main>

<h1 className="text-5xl text-center p-8">PROJETO</h1>

<div>
    <div className="ml-8 text-2xl">
        <h2 className="text-4xl mb-6">Solução e funcionalidades</h2>
        <div className="leading-normal w-[70%]">
            <p>O projeto da Future Station oferece uma solução inovadora que integra um chatbot interativo, um painel de avisos e uma ferramenta para análises de horários de pico, facilitando a comunicação e o gerenciamento de dados em tempo real</p>
            <p className="text-2xl pt-8"><strong>Chatbot interativo:</strong> O chatbot da Future Station é capaz de atender dúvidas frequentes, realizar agendamentos e fornecer orientações, oferecendo suporte 24/7 aos usuários.</p>
            <p className="text-2xl pt-8"><strong>Painel de Avisos:</strong> O painel centraliza informações importantes, como atualizações, prazos e notificações relevantes, garantindo que todos estejam informados em tempo hábil</p>
            <p className="text-2xl pt-8"><strong>Analize de Horarios de Pico:</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta ipsa ut accusamus nemo optio, officiis, sit est esse quaerat fugit odit quibusdam quisquam omnis hic facere doloribus placeat praesentium!</p>
        </div>

        <h2 className="text-5xl pt-10 ">Nossa visão</h2>
        <div>
            <p className="pt-4">Ser a plataforma líder em soluções de automação interativa e gestão inteligente de dados, melhorando a eficiência e a comunicação em ambientes corporativos e educacionais</p>
        </div>

        <h2 className="text-5xl pt-10 ">Nossa Missão</h2>
        <div>
            <p className="pt-5">Proporcionar uma experiência fluida e personalizada através de soluções tecnológicas avançadas, promovendo a agilidade, a inovação e o acesso rápido à informação. Essa abordagem da Future Station visa transformar a maneira como as organizações se comunicam e gerenciam suas operações.</p>
        </div>
    </div>

    <section>

<div>
    <div>
        <div>
<img className="m-auto p-20 w-[890px] h-[650px]" src="Image/metro_linhaAmarela1.jpg" alt="" />
        </div>
    </div>
</div>

</section>


   <IconsSkills/>
   <Formulario/>

    <Parceria/>
</div>

</main>

        </>
    )
}

export default Produto; 