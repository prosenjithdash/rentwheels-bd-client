import { useEffect, useState } from "react";
import Vehicle_card from "./ Vehicle_card";
import { useQuery } from '@tanstack/react-query';

// Show all vehicles
const Vehicles = () => {


    // COMMON PROCESS FOR LOAD DATA.
    //////
    // set Vehicles data state
    // const [vehicles, setVehicles] = useState([]);

    // // Load fake data from vehicles.json file
    // useEffect(() => {
    //     // fetch('vehicles.json')
    //     fetch('http://localhost:8000/vehicles')
    //         .then(res => res.json())
    //     .then(data => setVehicles(data));
    //         // .then(data => console.log(data));
    // }, [])
    /////


    // Using TanStack Query for data fetching
    const { data, isLoading, isError } = useQuery(
        {
            queryKey: ['vehicles'],
            queryFn: async () => {
                const res = await fetch('http://localhost:8000/vehicles');
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
        <div>
            <h2 className="text-3xl font-extrabold text-center mt-[50px]">All vehicles.</h2>
            <div className="grid grid-cols-3 py-[20px] gap-4">
                {
                    data.map((vehicle,idx) =>
                        <Vehicle_card
                            key={idx}
                            vehicle={vehicle}
                        ></Vehicle_card>
                    )
                }
            </div>
        </div>
    );
};

export default Vehicles;

// VITE_API_URL