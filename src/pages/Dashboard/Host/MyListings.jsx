import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import My_List_Card from "../../../components/Dashboard/My_Listings/My_List_Card/My_List_Card";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const My_Listings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    //  Load user's listed vehicles
    const {
        data: vehicles = [],
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["my_listings", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `http://localhost:8000/my_listings/${user.email}`
            );
            return data;
        },
    });

    // ✅ 2️⃣ Define mutation before any return
    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosSecure.delete(`http://localhost:8000/vehicle/${id}`);
            return data;
        },
        onSuccess: () => {
            toast.success("Vehicle deleted successfully!");
            refetch(); // refresh the list
        },
        onError: () => {
            toast.error("Failed to delete vehicle");
        },
    });

    // ✅ 3️⃣ Handle Delete
    const handleDelete = async (id) => {
        try {
            await mutateAsync(id);
        } catch (error) {
            console.error(error.message);
            toast.error("Something went wrong!");
        }
    };

    // ✅ 4️⃣ Conditional UI after hooks
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

    // ✅ 5️⃣ UI rendering
    return (
        <section className="max-w-6xl mx-auto bg-white rounded-2xl p-8 mt-10">
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
                {vehicles.map((vehicle, idx) => (
                    <My_List_Card
                        key={vehicle._id || idx}
                        vehicle={vehicle}
                        handleDelete={handleDelete}
                        refetch={refetch}
                    />
                ))}
            </div>
            
        </section>
    );
};

export default My_Listings;
