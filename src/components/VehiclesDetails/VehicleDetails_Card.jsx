import { useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const VehicleDetails_Card = () => {


    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    // const [pickupDate, setPickupDate] = useState("");
    // const [returnDate, setReturnDate] = useState("");

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Title & Subtitle */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">
                    Yamaha FZ-S FI V3
                </h1>
                <p className="text-gray-600">
                    A popular choice for its sporty look and reliable performance.
                </p>
            </div>

            {/* Top Image Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="md:col-span-2">
                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                        alt="Main Vehicle"
                        className="rounded-xl w-full h-[400px] object-cover"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
                        alt="Vehicle Side"
                        className="rounded-xl h-[190px] w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
                        alt="Vehicle Front"
                        className="rounded-xl h-[190px] w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e"
                        alt="Vehicle Interior"
                        className="rounded-xl h-[190px] w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1511910849309-0e2a1f84a3e7"
                        alt="Vehicle Dashboard"
                        className="rounded-xl h-[190px] w-full object-cover"
                    />
                </div>
            </div> */}

            {/* Vehicle Specs + Booking Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left side content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Vehicle Specs */}
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Vehicle Specifications
                        </h2>
                        <div className="grid grid-cols-3 gap-4 text-gray-700">
                            <div>
                                <p className="font-semibold">Engine</p>
                                <p>149 cc</p>
                            </div>
                            <div>
                                <p className="font-semibold">Mileage</p>
                                <p>45 kmpl</p>
                            </div>
                            <div>
                                <p className="font-semibold">Type</p>
                                <p>Motorbike</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-3">Description</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Experience the thrill of riding through the beautiful tea gardens
                            of Sreemangal with our Yamaha FZ-S FI V3. This vehicle is
                            perfectly maintained and offers a comfortable ride, making it
                            ideal for both short city trips and longer explorations of the
                            countryside. Its fuel-efficient engine ensures you can travel far
                            without worrying about frequent stops.
                        </p>
                    </div>

                    {/* Host Details */}
                    <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="Host"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Mr. Karim Chowdhury
                            </h3>
                            <p className="text-gray-600 text-sm">Joined in 2022</p>
                            <p className="text-sm text-yellow-500 font-medium">
                                ★ 4.9 (12 reviews)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="bg-white shadow-md rounded-xl p-6 h-fit">
                    <h2 className="text-lg font-semibold mb-4">Book This Vehicle</h2>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500">Please Select Pick up date and Return date from calender</p>

                        
                        {/* Add Calender for pickup and return date */}
                        <div>
                            <DateRange
                                rangeColors={['#16A34A']}
                                editableDateInputs={true}
                                onChange={item => setState([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={state}
                            />
                        </div>

                        <div className="flex justify-between mt-3">
                            <p className="font-semibold text-gray-700">Total Price</p>
                            <p className="font-bold text-green-600">৳500/day</p>
                        </div>

                        <p className="text-sm text-gray-500">
                            Final price will be calculated based on the number of days.
                        </p>

                        <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-all">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails_Card;
