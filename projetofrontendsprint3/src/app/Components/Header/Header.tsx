'use client'; // Marca o arquivo como um componente do cliente

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#42807D] relative w-full h-[240px]">
            <div className="flex flex-col items-center pt-4">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-7xl flex flex-col gap-4 font-bold text-black cursor-pointer">
                        FUTURE <span className="text-white">STATION</span>
                    </h1>
                </Link>
                
                {/* Botão de Menu Hamburguer (para mobile) */}
                <div className="lg:hidden flex items-center justify-between w-full px-4">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {isMenuOpen ? (
                            // Exibe o ícone de X quando o menu estiver aberto
                            <span className="block w-6 h-1 bg-white mb-2 rotate-45"></span>
                            // A linha acima cria o "X" com o uso de duas linhas rotacionadas
                        ) : (
                            // Exibe o menu hamburguer (três linhas) quando o menu estiver fechado
                            <>
                                <span className="block w-6 h-1 bg-white mb-2"></span>
                                <span className="block w-6 h-1 bg-white mb-2"></span>
                                <span className="block w-6 h-1 bg-white"></span>
                            </>
                        )}
                    </button>
                </div>

                {/* Navegação Desktop */}
                <nav className="mt-4 hidden lg:block">
                    <ul className="flex justify-center space-x-8">
                        <li className="relative">
                            <Link href="/">
                                <span className="text-white font-bold text-lg group hover:text-green-500 text-[21px]">HOME</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                        <li className="relative">
                            <Link href="/Projeto">
                                <span className="text-white font-bold text-lg group hover:text-green-500 text-[21px]">PROJETO</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                        <li className="relative">
                            <Link href="/Equipe">
                                <span className="text-white font-bold text-lg group hover:text-green-500 text-[21px]">EQUIPE</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                        <li className="relative">
                            <Link href="/Ccr">
                                <span className="text-white font-bold text-lg group hover:text-green-500 text-[22px]">CCR</span>
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-500 transition-all group-hover:w-full"></span>
                        </li>
                    </ul>
                </nav>

                {/* Menu Hamburger Mobile */}
                <nav className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-[#42807D]`}>
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <Link href="/">
                                <span className="text-white font-bold text-lg">HOME</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Projeto">
                                <span className="text-white font-bold text-lg">PROJETO</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Equipe">
                                <span className="text-white font-bold text-lg">EQUIPE</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Ccr">
                                <span className="text-white font-bold text-lg">CCR</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
