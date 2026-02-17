
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 border-2 border-red-700">
            <Sidebar className='border-2 border-red-700'/>

            <main
                className="
                min-h-screen bg-gray-50 border-2 border-red-700
                    
                    ml-0
                    sm:ml-0
                    md:ml-64
                    lg:ml-64
                    px-3
                    sm:px-4
                    md:px-6
                    lg:px-8
          
        "
            >
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout
