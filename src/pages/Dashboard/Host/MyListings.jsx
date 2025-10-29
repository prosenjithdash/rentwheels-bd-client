import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
// import { Pencil, Trash2 } from "lucide-react";
import My_List_Card from "../../../components/Dashboard/My_Listings/My_List_Card/My_List_Card";


const My_Listings = () => {
    const { user } = useAuth();

    // 🚀 Load user's listed vehicles
    const {
        data: vehicles = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["my_listings", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8000/my_listings/${user.email}`
            );
            return data;
        },
    });

    if (isLoading)
        return (
            <p className="text-center text-gray-500 mt-10">Loading vehicles...</p>
        );

    if (isError)
        return (
            <p className="text-center text-red-500 mt-10">
                Failed to load vehicles. Please try again later.
            </p>
        );

    // Handle Delete function
    const handleDelete = (id) => {
        console.log(id)
    }
    return (
        <section className="max-w-6xl mx-auto bg-white rounded-2xl p-8 mt-10">
            {/* Page Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                My Listed Vehicles
            </h2>

            {/* Header Bar */}
            <div className="grid grid-cols-7 text-center bg-green-50 py-3 rounded-lg font-medium text-gray-600">
                <p>TITLE</p>
                <p>LOCATION</p>
                <p>PRICE</p>
                <p>FROM</p>
                <p>TO</p>
                <p>EDIT</p>
                <p>DELETE</p>
            </div>

            {/* Vehicle Cards */}
            <div className="mt-4 space-y-4">
                {vehicles.map((vehicle, idx) =>
                    <My_List_Card
                        key={idx}
                        vehicle={vehicle}
                        handleDelete={handleDelete}
                    />)}
            </div>
        </section>
    );
};

export default My_Listings;
