import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { Pencil, Trash2 } from "lucide-react";

// ✅ helper to shorten title to first 3 words
const shortenTitle = (title = "", wordLimit = 3) => {
    const words = title.trim().split(/\s+/);
    if (words.length <= wordLimit) return title;
    return words.slice(0, wordLimit).join(" ") + "...";
};

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

    return (
        <section className="max-w-6xl mx-auto bg-white rounded-2xl p-8 mt-10">
            {/* Page Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                My Listed Vehicles
            </h2>

            {/* Header Bar */}
            <div className="grid grid-cols-7 text-center bg-green-50 py-3 rounded-lg font-medium text-gray-600">
                <p>Title</p>
                <p>Location</p>
                <p>Price</p>
                <p>From</p>
                <p>To</p>
                <p>Edit</p>
                <p>Delete</p>
            </div>

            {/* Vehicle Cards */}
            <div className="mt-4 space-y-4">
                {vehicles.map((vehicle) => (
                    <div
                        key={vehicle._id}
                        className="grid grid-cols-7 items-center bg-white shadow-sm rounded-xl px-4 py-3 hover:shadow-md transition-all duration-200"
                    >
                        {/* 🖼️ Title + Image */}
                        <div className="flex items-center gap-4">
                            <img
                                src={vehicle.imageURL}
                                alt={vehicle.title}
                                className="w-12 h-10 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                            />
                            <h3
                                className="font-medium text-gray-800 truncate"
                                title={vehicle.title}
                            >
                                {shortenTitle(vehicle.title || "")}
                            </h3>
                        </div>

                        {/* Location */}
                        <p className="text-gray-600 text-sm text-center">{vehicle.location}</p>

                        {/* Price */}
                        <p className="text-gray-600 text-sm text-center">
                            ৳{vehicle.price} <span className="text-gray-400">/ day</span>
                        </p>

                        {/* From */}
                        <p className="text-gray-600 text-sm text-center">
                            {new Date(vehicle.from).toLocaleString() || "—"}
                        </p>

                        {/* To */}
                        <p className="text-gray-600 text-sm text-center">
                            {new Date(vehicle.to).toLocaleString() || "—"}
                        </p>

                        {/* Edit Button */}
                        <div className="flex justify-center">
                            <button className="bg-green-50 hover:bg-green-100 p-2 rounded-xl transition">
                                <Pencil className="text-green-600 w-4 h-4" />
                            </button>
                        </div>

                        {/* Delete Button */}
                        <div className="flex justify-center">
                            <button className="bg-red-50 hover:bg-red-100 p-2 rounded-xl transition">
                                <Trash2 className="text-red-600 w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default My_Listings;
