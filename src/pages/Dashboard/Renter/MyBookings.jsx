import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import BookingDataRow from "../../../components/Dashboard/TableRows/BookingDataRow";
import { key } from "localforage";
import { id } from "date-fns/locale";
import { toast } from "react-toastify";

const MyBookings = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()


    // fetch all the bookings for this logged in user data
    const {
        data: bookings = [],
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["my_bookings", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `http://localhost:8000/my_bookings/${user.email}`
            );
            return data;
        },
    });
    console.log("Bookings Data:", bookings)



    // // Define mutation for delete booking data
    // const { mutateAsync } = useMutation({
    //     mutationFn: async (id) => {
    //         const { data } = await axiosSecure.delete(`http://localhost:8000/booking/${id}`);
    //         return data;
    //     },
    //     onSuccess:async (data) => {
    //         toast.success(" Booking Vehicle canceled successfully!");
    //         refetch(); // refresh the list

    //         // 3. Change room status to booked in db
    //         await axiosSecure.patch(`/vehicle/status/${booking?.vehicleId}`, { status: false })

    //     },
    //     onError: () => {
    //         toast.error("Failed to delete booking vehicle");
    //     },
    // });

    // // ✅ 3️⃣ Handle booking Delete
    // const handleDelete = async (id) => {
    //         try {
    //             await mutateAsync(id);
    //         } catch (error) {
    //             console.error(error.message);
    //             toast.error("Something went wrong!");
    //         }
    // };

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
    return (
        <>
            
            {/* <Helmet>
                <title>My Bookings</title>
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
                                            className='px-5 py-3 bg-green-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-green-200   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Info
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-green-200   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-green-200   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            From
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-green-200   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            To
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-green-200   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Table Row Data */}
                                    {
                                        bookings.map((booking,inx) => <BookingDataRow
                                            key={inx}
                                            booking={booking}
                                            refetch={refetch}
                                        />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBookings