import Link from 'next/link';
import BotaoTopo from '../BotaoTopo/Botao';


function Parceria() {
    return (
        <>
            <section className='mb-[14%]'>

                <div className='bg-white h-[200px]'>
                    <h1 className='text-black text-center text-5xl p-6'>PARCERIAS</h1>
                    <div className='flex mt-[5%] mx-[30%] gap-20'>

                        <Link href="#">
                            <img className='rounded-[13px] h-[170px] w-[180px] ' src="Image_Logo/Logo_Alura.jfif" alt="alura" />
                        </Link>
                        <Link href="#">
                            <img className='rounded-[13px] h-[170px] w-[180px]'  src="../Image_Logo/Logo_Faip.jfif" alt="fiap" />
                        </Link>

                        <Link href="#" >
                            <img className='rounded-[13px] h-[170px] w-[180px] border-[5px]' src="../Image_Logo/Logo_CCR.jfif" alt="ccr" />
                        </Link>
                    </div>

                </div>
               
            </section>
        </>
    )

}
export default Parceria;