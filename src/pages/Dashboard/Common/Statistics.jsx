import React from 'react';
import useRole from '../../../hooks/useRole';
import AdminStatistics from '../Admin/AdminStatistics';
import HostStatistics from '../Host/HostStatistics';
import RenterStatistics from '../Renter/RenterStatistics';

const Statistics = () => {

    const [role, isLoading] = useRole()

    return <>
        
        {
            role === "admin" && <AdminStatistics />
        }
        
        {
            role === "host" && <HostStatistics />
        }

        {
            role === "render" && <RenterStatistics />
        }

    </>
    
};

export default Statistics;