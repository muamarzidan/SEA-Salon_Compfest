import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-[15px]">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <a href="/" className="text-primary">Sea Salon</a>
                    </div>
                    {/* Desktop Menu */}
                    <div className="items-center hidden space-x-8 md:flex">
                        <a href="/service" className="text-lg font-bold transition-all text-primary hover:text-secondary">Service</a>
                        <a href="#contact" className="text-lg font-bold transition-all text-primary hover:text-secondary">Contact</a>
                        <a href="/login">
                            <button className="px-[40px] py-3 text-lg font-bold rounded-lg bg-secondary">
                                Login
                            </button>
                        </a>
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
                        <a href="/service" className="block px-4 py-2 text-black hover:bg-gray-200">Service</a>
                        <a href="#contact" className="block px-4 py-2 text-black hover:bg-gray-200">Contact</a>
                        <a href="/login">
                            <button className="px-[40px] py-1 text-lg font-bold rounded-lg bg-secondary">
                                Login
                            </button>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;