import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-[#42807D] relative w-full h-[240px]">
            <div className="flex flex-col items-center pt-4">
                <Link href="/">
                    <h1 className="text-5xl font-bold text-black cursor-pointer">FUTURE <span className="text-white">STATION</span></h1>
                </Link>
                <nav className="mt-4">
                    <ul className="flex justify-center space-x-8">
                        <li className="relative">
                            <Link href="#">
                                <span className="text-white font-bold text-lg group hover:text-green-500">HOME</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                        <li className="relative">
                            <Link href="/Projeto">
                                <span className="text-white font-bold text-lg group hover:text-green-500">PROJETO</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                        <li className="relative">
                            <Link href="/Equipe">
                                <span className="text-white font-bold text-lg group hover:text-green-500">EQUIPE</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                        <li className="relative">
                            <Link href="/Ccr">
                                <span className="text-white font-bold text-lg group hover:text-green-500">CCR</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                    </ul>
                </nav>
            </div>
         </header>
    );
};

export default Header;
