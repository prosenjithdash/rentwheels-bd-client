import Vehicle_card from "./ Vehicle_card";
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from "react-router-dom";

// 🚗 Vehicles Component — show all vehicle data
const Vehicles = () => {

    const [ params, setParams ] = useSearchParams()

    const category = params.get('category')
    console.log(category)


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

    // But now using Better way for data fetch

    // 🚀 Using TanStack Query to load data
    const { data: vehicles = [], isLoading, isError } = useQuery(
        {
            // unique key for caching & refetching
            queryKey: ['vehicles',category],

            // define function for fetching data
            queryFn: async () => {
                const res = await fetch(`http://localhost:8000/vehicles?category=${category}`);
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

    // ✅ Render all vehicle cards
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center mt-[50px]">All vehicles.</h2>
            <div className="grid grid-cols-3 py-[20px] gap-4">
                {
                    vehicles.map((vehicle,idx) =>
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


// 🧠 Why use TanStack Query instead of useEffect + useState ?

// ✅ Auto - caching — saves fetched data, no need to refetch every time.
// ✅ Auto - refetch — refetches when internet reconnects or tab becomes active.
// ✅ Built -in loading & error states — no need for extra state variables.
// ✅ Cleaner code — no useEffect and setState mess.
// ✅ Centralized data management — same data can be shared across components easily.

// 🧩 Remember: Must wrap your app with
// <QueryClientProvider client={queryClient}> in main.jsx.