import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-[15px]">
                    <div className="text-2xl font-bold">
                        <Link to="/" className="text-primary">Sea Salon</Link>
                    </div>
                    <div className="items-center hidden space-x-8 md:flex">
                        <Link to="/service" className="text-lg font-bold transition-all text-primary hover:text-secondary">Service</Link>
                        <a href ="#contact" className="text-lg font-bold transition-all text-primary hover:text-secondary">Contact</a>
                        {isLoggedIn ? (
                            <>
                                <Link to="/dashboard">
                                    <button className="px-[40px] text-white py-3 text-lg font-bold rounded-lg bg-primary">
                                        Dashboard
                                    </button>
                                </Link>
                                <button onClick={handleLogout} className="px-[40px] py-3 text-lg font-bold rounded-lg bg-secondary">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login">
                                <button className="px-[40px] py-3 text-lg font-bold rounded-lg bg-secondary">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <a href="/service" className="block px-4 py-2 text-black hover:bg-gray-200">Service</a>
                        <a href="#contact" className="block px-4 py-2 text-black hover:bg-gray-200">Contact</a>
                        {isLoggedIn ? (
                            <>
                                <Link to="/dashboard" className="block px-4 py-2 text-black hover:bg-gray-200">Dashboard</Link>
                                <button onClick={handleLogout} className="block px-4 py-2 text-black hover:bg-gray-200">Logout</button>
                            </>
                        ) : (
                            <Link to="/login">
                                <button className="block px-4 py-2 text-black hover:bg-gray-200">Login</button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;