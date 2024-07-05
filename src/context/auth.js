import { createContext, useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const isTokenExpired = (token) => {
                if (!token) return true;

                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                return decodedToken.exp < currentTime;
            };

            if (!isTokenExpired(token)) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
                localStorage.removeItem('token');
                if (window.location.pathname !== '/login') {
                    navigate('/login');
                }
            }
        } else {
            setIsLoggedIn(false);
        }
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
