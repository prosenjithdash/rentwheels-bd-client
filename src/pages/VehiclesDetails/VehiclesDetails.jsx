// Vehicles details page
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const VehiclesDetails = () => {

    const { id } = useParams();
    

    // 🚀 Using TanStack Query to load data
    const { data: vehicle = {}, isLoading, isError } = useQuery(
        {
            // unique key for caching & refetching
            queryKey: ['vehicle',id],

            // define function for fetching data
            queryFn: async () => {
                const res = await fetch(`http://localhost:8000/vehicle/${id}`);
                return res.json();
            }

        }
    )


    // Handle loading state
    if (isLoading) {
        return <p className="text-center text-gray-500 mt-10">Loading vehicles...</p>;
    }

    // Handle error state
    if (isError) {
        return <p className="text-center text-red-500 mt-10">Failed to load vehicles. Please try again later.</p>;
    }
    return (
        <div className="max-w-xl mx-auto bg-green-50 p-5 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-2">{vehicle.title}</h2>
            <p className="text-gray-600 mb-2">Category: {vehicle.category}</p>
            <p className="text-gray-600 mb-2">Location: {vehicle.location}</p>
            <p className="text-gray-700 mb-4">Price: {vehicle.price} Tk/day</p>

        </div>
    );
};

export default VehiclesDetails;