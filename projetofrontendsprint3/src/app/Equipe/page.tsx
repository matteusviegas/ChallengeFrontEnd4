'use client';
import Botao from "../Components/Botao/Botao";
import Image from "next/image";

const Contato = () => {
    return (
        <>
          
          
         
            <main>
    <h1 className="text-center text-4xl">EQUIPE</h1>

    <section className="text-center ">
        <div>
        <img  className=" w-[150px] h-[ 150px]" src="Image_Integrantes/integrante_matteus.jpg" alt="img_integrante1" />
            <div>
                <h3>Matteus Viegas Dos Santos</h3>
                <p>RM 561090</p>
            </div>
        </div>

        <div>
        <img  className=" w-[150px] h-[ 150px]" src="Image_Integrantes/integrante_sulamita.jpg" alt="img_integrante1" />
            <div>
                <h3>Pedro Henrique de Souza Sena</h3>
                <p>RM 561178</p>
            </div>
        </div>

        <div>
        <img  className=" w-[150px] h-[ 150px]" src="Image_Integrantes/membro.png" alt="img_integrante1" />
            <div>
                <h3>Sulamita Viegas Dos Santos</h3>
                <p>RM 561019</p>
            </div>
        </div>    
    </section>
    <button>voltar ao topo</button>
</main>

         
            <Botao cor="green" texto="Voltar ao topo " onClick={() => { alert("Element press") }} />

        </>
    )
}


export default Contato;