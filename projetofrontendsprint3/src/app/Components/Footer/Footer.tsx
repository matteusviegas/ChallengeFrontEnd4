import Link from 'next/link';


const Footer = () => {
    return (
        <>
            <footer className="bg-[#42807D] p-3 text-white text-center" >
                <div className='text-[18px]' >
                <Link className='pr-4' href="/Equipe">
                TEAM
                </Link>
                |
                <Link className='pl-4 pr-4' href="/Projeto">
                PROJECT
                </Link>
                |
                <Link className='pl-4' href="/Ccr">
                CCR
                </Link>
                 
                </div>
                <div className='pt-2'>
                <p className='text-[#000] font-bold'>© Todos os direitos reservados. Group SPM Future Station</p>

                </div>
            </footer>
        </>
    )
}
export default Footer;