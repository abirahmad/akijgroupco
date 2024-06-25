'use client';
import { useState } from 'react';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="header-area">
            <div id="sticker" className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex sm:justify-between sm:items-center">
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="navbar-toggle block lg:hidden text-gray-500"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-600"></span>
                        </button>
                        <a className="navbar-brand page-scroll sticky-logo text-center" href="/">
                            <h1 className="text-2xl font-bold">
                                <span className="text-blue-500">Akij</span>Groups
                            </h1>
                        </a>

                    </div>
                    <nav className={`navbar-collapse lg:flex ${isNavOpen ? '' : 'hidden'}`}>
                        <ul className="nav flex flex-col lg:flex-row items-center lg:space-x-4">
                            <li className="active">
                                <a className="page-scroll text-gray-700 hover:text-blue-500" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll text-gray-700 hover:text-blue-500" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll text-gray-700 hover:text-blue-500" href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll text-gray-700 hover:text-blue-500" href="#team">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll text-gray-700 hover:text-blue-500" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="text-gray-700 hover:text-blue-500"
                                >
                                    Drop Down
                                    <span className="caret"></span>
                                </button>
                                <ul className={`dropdown-menu absolute bg-white shadow-lg z-50 ${isDropdownOpen ? '' : 'hidden'}`}>
                                    <li>
                                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                                            Drop Down 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                                            Drop Down 2
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="page-scroll text-gray-700 hover:text-blue-500" href="#blog">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll text-gray-700 hover:text-blue-500" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
};

export default Header;
