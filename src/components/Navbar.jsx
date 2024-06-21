import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuService, setIsMenuService] = useState(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-[25px]">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <a href="/" className="text-primary">Sea Salon</a>
                    </div>
                    {/* Desktop Menu */}
                    <div className="items-center hidden space-x-8 md:flex">
                        <div className="relative">
                            <button onClick={() => setIsMenuService(!isMenuService)} className="flex items-center font-bold transition-all text-primary hover:text-secondary">
                                Service
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isMenuService && (
                                <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 shadow-lg">
                                    <a href="/service/haircut-styling" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Haircut & Styling</a>
                                    <a href="/service/manicure-pedicure" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Manicure & Pedicure</a>
                                    <a href="/service/facial-treatment" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Facial Treatment</a>
                                </div>
                            )}
                        </div>
                        <a href="#contact" className="font-bold transition-all text-primary hover:text-secondary">Contact</a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Menu A</a>
                        <div className="relative">
                            <button onClick={() => setIsMenuService(!isMenuService)} className="flex items-center w-full px-4 py-2 text-left text-black hover:bg-gray-200">
                                Menu B
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isMenuService && (
                                <div className="bg-white border-t border-gray-200 shadow-lg">
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Submenu 1</a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Submenu 2</a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;