import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Setup axios to integrate with backend API url
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Use the interceptor to check for expired tokens and send the response to the login page
axiosInstance.interceptors.response.use(
    // first send is response 
    response => response,
    // then send the second response is error
    error => {
        if (error.response && error.response.status === 401) {
            // Remove token from localStorage
            localStorage.removeItem('token');

            // Redirect to login page
            const navigate = useNavigate();
            navigate('/login');
        }
        // Send the error with promise reject 
        return Promise.reject(error);
    }
);

export default axiosInstance;