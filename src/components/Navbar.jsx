import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/token';
import { useAuth } from '../context/auth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !isTokenExpired(token)) {
            setIsLoggedIn(true);
        } else {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
        }
    }, [setIsLoggedIn]);

    useEffect(() => {
        const interval = setInterval(() => {
            const token = localStorage.getItem('token');
            if (token && isTokenExpired(token)) {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                navigate('/login');
            }
        }, 60000);

        return () => clearInterval(interval);
    }, [navigate, setIsLoggedIn]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-[15px]">
                    <div className="text-2xl font-bold">
                        <a href="/" className="text-primary">Sea Salon</a>
                    </div>
                    <div className="items-center hidden space-x-8 md:flex">
                        <a href="/service" className="text-lg font-bold transition-all text-primary hover:text-secondary">Service</a>
                        <a href="#contact" className="text-lg font-bold transition-all text-primary hover:text-secondary">Contact</a>
                        {isLoggedIn ? (
                            <div className="relative">
                                <img
                                    src="/src/assets/images/svg/account-profile.svg"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                    onClick={toggleDropdown}
                                />
                                {isDropdownOpen && (
                                    <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                                        <a href="/dashboard">
                                            <button className="w-full px-4 py-2 text-left text-black hover:bg-gray-200">Dashboard</button>
                                        </a>
                                        <button onClick={handleLogout} className="w-full px-4 py-2 text-left text-black hover:bg-gray-200">Logout</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a href="/login">
                                <button className="px-[40px] py-3 text-lg font-bold rounded-lg bg-secondary">
                                    Login
                                </button>
                            </a>
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
                                <a href="/dashboard" className="block px-4 py-2 text-black hover:bg-gray-200">Dashboard</a>
                                <button onClick={handleLogout} className="block px-4 py-2 text-black hover:bg-gray-200">Logout</button>
                            </>
                        ) : (
                            <a href="/login">
                                <button className="block px-4 py-2 text-black hover:bg-gray-200">Login</button>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;