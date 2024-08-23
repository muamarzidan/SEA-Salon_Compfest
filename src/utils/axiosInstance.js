import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Setup axios to integrate with backend API url
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.response.use(
    // first send is response if the interceptor is success
    response => response,
    // then send the second response is error to alocate the page to login
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');

            const navigate = useNavigate();
            navigate('/login');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;