import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const My_Listings = () => {

    const { user } = useAuth();


    // 🚀 Using TanStack Query to load data
    const { data: vehicles = [], isLoading, isError } = useQuery(
        {
            // unique key for caching & refetching
            queryKey: ['my_listings',user?.email],

            // define function for fetching data
            queryFn: async () => {
                const {data} = await axios.get(`http://localhost:8000/my_listings/${user?.email}`);
                return data
            },

        }

    )
    console.log(vehicles)


    // Handle loading state
    if (isLoading) {
        return <p className="text-center text-gray-500 mt-10">Loading vehicles...</p>;
    }

    // Handle error state
    if (isError) {
        return <p className="text-center text-red-500 mt-10">Failed to load vehicles. Please try again later.</p>;
    }

    return (
        <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
            {/* Page Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                My Listed Vehicles
            </h2>

            {/* Header Bar */}
            <div className="grid grid-cols-7 text-center bg-green-100 py-3 rounded-lg font-medium text-gray-700">
                <p>Title</p>
                <p>Location</p>
                <p>Price</p>
                <p>From</p>
                <p>To</p>
                <p>Update</p>
                <p>Delete</p>
            </div>

            {/* Later You Will Map Data Here */}
            <div className="mt-3 text-center text-gray-500">
                <p>No vehicle added yet!</p>
            </div>

            {/* <div className="mt-4 space-y-3">
                {vehicles.map((vehicle) => (
                    <HostListVehicleCard key={vehicle._id} vehicle={vehicle} />
                ))}
            </div> */}

            {
                vehicles.map((vehicle,idx) => (
                    <p key={idx}> {vehicle.title}</p>
                ))
            }
        </section>
    );
};

export default My_Listings;
