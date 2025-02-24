import Link from 'next/link';


function Parceria(){
return(
    <>
    <section>
           
            <div className='bg-white'>
            <h1 className='text-black text-center text-5xl p-6'>PARCERIAS</h1>

                <Link href="#">
                    <img src="Image_Logo/Logo_Alura.jfif" alt="alura" />
                </Link>
                <Link href="#">
                    <img src="../Image_Logo/Logo_Faip.jfif" alt="fiap" />
                </Link>

                <Link href="#" >
                    <img src="../Image_Logo/Logo_CCR.jfif" alt="ccr" />
                </Link>
            </div>
        </section>
    </>
)

}
export default Parceria;