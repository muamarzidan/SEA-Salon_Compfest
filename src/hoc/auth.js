import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const  withAuth = (Component) => {
    const AuthComponent = (props) => {
        const { isLoggedIn } = useAuth();
        const navigate = useNavigate();

        useEffect(() => {
            if (!isLoggedIn) {
                navigate('/login');
            }
        }, [isLoggedIn, navigate]);

        return isLoggedIn ? <Component {...props} /> : null;
    };

    AuthComponent.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

    return AuthComponent;
};

export default withAuth;