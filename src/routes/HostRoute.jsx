import { Navigate, useLocation } from 'react-router-dom';
import useRole from '../hooks/useRole';

const HostRoute = ({ children }) => {
    const [role, isLoading] = useRole()
    const location = useLocation()

    if (isLoading) return <p>Loading...</p>
    if (role === 'admin') return children
    return <Navigate to='/dashboard' state={location.pathname} replace='true' />
}


export default HostRoute;