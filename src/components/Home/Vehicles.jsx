import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Vehicle_card from './ Vehicle_card';

const Vehicles = () => {
    const axiosCommon = useAxiosCommon();
    const [params] = useSearchParams();
    const category = params.get('category');
    console.log('Selected category:', category);

    // ✅ Fetch vehicles using axiosCommon + TanStack Query
    const { data: vehicles = [], isLoading, isError } = useQuery({
        queryKey: ['vehicles', category],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/vehicles?category=${category}`);
            return data;
        }
    });

    // Handle loading state
    if (isLoading) return <p>Loading...</p>

    // Handle error state
    if (isError) return <p className="text-center text-red-500 mt-10">Failed to load vehicles. Please try again later.</p>;

    // ✅ Render all vehicle cards
    return (
        <div className=' bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A]'>
            <h2 className="text-4xl font-extrabold text-white text-center  pt-20 pb-6">All Vehicles</h2>
            {vehicles && vehicles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-[20px] max-w-7xl mx-auto">
                    {vehicles.map(vehicle => (
                        <Vehicle_card key={vehicle._id} vehicle={vehicle} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No vehicles found in this category.</p>
            )}
        </div>
    );
};

export default Vehicles;
