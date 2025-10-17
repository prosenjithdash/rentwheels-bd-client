import { useEffect, useState } from "react";
import Vehicle_card from "./ Vehicle_card";

// Show all vehicles
const Vehicles = () => {


    // set Vehicles data state
    const [vehicles, setVehicles] = useState([]);

    // Load fake data from vehicles.json file
    useEffect(() => {
        fetch('vehicles.json')
            .then(res => res.json())
            .then(data => setVehicles(data));
    },[])
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