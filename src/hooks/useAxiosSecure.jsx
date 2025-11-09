import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => res,
            async error => {
                console.log('error tracked in the interceptor', error?.response);

                const status = error?.response?.status;

                if (status === 401 || status === 403) {
                    await logOut();
                    navigate('/login');
                }

                return Promise.reject(error);
            }
        );
    }, [logOut, navigate])

    return axiosSecure
}

export default useAxiosSecure