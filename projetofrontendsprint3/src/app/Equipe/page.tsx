'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';

import BotaoTopo from "../Components/BotaoTopo/Botao";
import Botao from "../Components/BotaoTopo/Botao";
import Image from "next/image";
import Link from 'next/link';

const Contato = () => {
    return (
        <>



            <main>
               

                <section className="flex flex-col items-center justify-center h-screen text-center  mt-[380px] text-[2rem] font-bold mb-[15%]">

                <h1 className="text-center font-bold 
   mt-[2%] text-[4rem]">EQUIPE</h1>
                    <div className="bg-[#42807D] mt-[2%] w-[100%]">

                        <div className="bg-[#42807D] w-full">

                            <div className="pt-[4%] flex justify-center items-center">
                                <img className="rounded-[13px] w-[202px] h-[270px]" src="Image_Integrantes/integrante_matteus.jpg" alt="img_integrante1" />
                            </div>
                        </div>

                        <div className="mt-8 text-white">
                            <h3>Matteus Viegas Dos Santos</h3>
                            <p className="pt-4"> RM 561090</p>
                        </div>
                        <div className="flex justify-center space-x-6 p-4">

                            <Link href="#" passHref>
                                <div className="text-5xl hover:text-white cursor-pointer">
                                    <i className="fab fa-github"></i>
                                </div>
                            </Link>

                            {/* LinkedIn */}
                            <Link href="#" passHref>
                                <div className="text-5xl hover:text-blue-600 cursor-pointer">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="pt-[4%] flex justify-center items-center">
                            <img className=" rounded-[13px] w-[202px] h-[270px]" src="Image_Integrantes/integrante_sulamita.jpg" alt="img_integrante1" />
                        </div>

                        <div>
                            <h3>Pedro Henrique de Souza Sena</h3>
                            <p>RM 561178</p>
                        </div>
                        <div className="flex justify-center space-x-6 p-4">

                            <Link href="#" passHref>
                                <div className="text-5xl hover:text-white cursor-pointer">
                                    <i className="fab fa-github"></i>
                                </div>
                            </Link>

                            {/* LinkedIn */}
                            <Link href="#" passHref>
                                <div className="text-5xl hover:text-blue-600 cursor-pointer">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-[#42807D] w-[100%]">
                        <div className='pt-[4%] flex justify-center items-center'>
                            <img className=" rounded-[13px] w-[202px] h-[270px]" src="Image_Integrantes/membro.png" alt="img_integrante1" />
                        </div>

                        <div className='text-white'>
                            <h3>Sulamita Viegas Dos Santos</h3>
                            <p>RM 561019</p>
                        </div>
                        <div className="flex justify-center space-x-6 p-4">

                            <Link href="#" passHref>
                                <div className="text-5xl hover:text-white cursor-pointer">
                                    <i className="fab fa-github"></i>
                                </div>
                            </Link>

                            {/* LinkedIn */}
                            <Link href="#" passHref>
                                <div className="text-5xl hover:text-blue-600 cursor-pointer">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <BotaoTopo cor={'#42807D'} texto={'Voltar ao topo'}/>

                </section>

            </main>



        </>
    )
}


export default Contato;