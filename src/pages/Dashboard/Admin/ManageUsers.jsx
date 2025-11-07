import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UserDataRows from "../../../components/Dashboard/TableRows/UserDataRows";

const ManageUsers = () => {
    const { data: users = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8000/users`);
            return data;
        },
    });

    if (isLoading) {
        return <p className="text-center text-gray-500 mt-10">Loading Users...</p>;
    }

    if (isError) {
        return (
            <p className="text-center text-red-500 mt-10">
                Failed to load users. Please try again later.
            </p>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Manage Users
                </h2>

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 bg-green-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-extrabold">
                                        Email
                                    </th>
                                    <th className="px-5 py-3 bg-green-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-extrabold">
                                        Role
                                    </th>
                                    <th className="px-5 py-3 bg-green-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-extrabold">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 bg-green-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-extrabold">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            {users.map((user, idx) => (
                                <UserDataRows key={idx} user={user} refetch={refetch} />
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
