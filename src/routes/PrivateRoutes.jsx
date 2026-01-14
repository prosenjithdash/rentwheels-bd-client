import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) return <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
    </div>
    if (user) return children
    return <Navigate to='/logIn' state={location.pathname} replace='true' />
}

export default PrivateRoutes