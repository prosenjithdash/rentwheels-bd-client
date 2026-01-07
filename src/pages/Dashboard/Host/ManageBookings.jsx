import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageBookings = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    // fetch all the bookings for this logged in user data
    const {
        data: manageBookings = [],
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["manage_bookings", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `http://localhost:8000/manage_bookings/${user.email}`
            );
            return data;
        },
    });
    console.log("Manage Data:", manageBookings)


    // ✅ 4️⃣ Conditional UI after hooks
    if (isLoading)
        return (
            <p className="text-center text-gray-500 mt-10">Loading manage bookings vehicles...</p>
        );

    if (isError)
        return (
            <p className="text-center text-red-500 mt-10">
                Failed to load manage bookings vehicles. Please try again later.
            </p>
        );

    return (
        <>
            {/* <Helmet>
                <title>Manage Bookings</title>
            </Helmet> */}

            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Guest Info
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            From
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            To
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* Table row data */}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageBookings