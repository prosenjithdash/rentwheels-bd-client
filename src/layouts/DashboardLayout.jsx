// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

// const DashboardLayout = () => {
//     return (
//         <div className="flex min-h-screen bg-gray-50">
//             {/* Sidebar (fixed width) */}
//             <div className="w-64 bg-white border-r shadow-sm">
//                 <Sidebar />
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 p-6 overflow-y-auto">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;


import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />

            <main
                className="
          w-full
          ml-0
          sm:ml-0
          md:ml-64
          lg:ml-64
          px-3
          sm:px-4
          md:px-6
          lg:px-8
          pt-4
        "
            >
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout
