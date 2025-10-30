// Vehicles details page
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VehicleDetails_Card from '../../components/VehiclesDetails/VehicleDetails_Card';
import axios from 'axios';

const VehiclesDetails = () => {

    const { id } = useParams();
    

    // 🚀 Using TanStack Query to load data
    const { data: vehicle = {}, isLoading, isError } = useQuery(
        {
            // unique key for caching & refetching
            queryKey: ['vehicle',id],

            // define function for fetching data
            queryFn: async () => {
                const {data} = await axios.get(`http://localhost:8000/vehicle/${id}`);
                return data
            }

        }
    )
    console.log('Details of Vehicle data:', vehicle)


    // Handle loading state
    if (isLoading) {
        return <p className="text-center text-gray-500 mt-10">Loading vehicles...</p>;
    }

    // Handle error state
    if (isError) {
        return <p className="text-center text-red-500 mt-10">Failed to load vehicles. Please try again later.</p>;
    }
    return (
        <VehicleDetails_Card vehicle={vehicle} />
    );
};

export default VehiclesDetails;