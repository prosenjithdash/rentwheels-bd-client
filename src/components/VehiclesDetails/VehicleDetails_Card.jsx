import { differenceInCalendarDays } from "date-fns";
import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import BookingModal from "../Dashboard/Modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const VehicleDetails_Card = ({ vehicle, refetch }) => {
    const{user}= useAuth()

    const[isOpen, setIsOpen] = useState(false)
    if (!vehicle) return <p>Loading vehicle details...</p>;

    const {
        imageURL,
        title,
        description,
        location,
        category,
        price,
        type,
        engineCC,
        mileage,
        from,
        to,
        host,
    } = vehicle;

    const [state, setState] = useState([
        {
            startDate: new Date(from),
            endDate: new Date(to),
            key: "selection",
        },
    ]);

    const closeModal = () => {
        setIsOpen(false)
    }



    // ✅ inclusive days calculation: add 1 to differenceInCalendarDays
    const rawDiff = differenceInCalendarDays(state[0].endDate, state[0].startDate);
    const days = Math.max(1, rawDiff + 1); // inclusive of both start and end
    const totalPrice = days * Number(price || 0);

    useEffect(() => {
        console.log("Selected Days:", days, "Total Price:", totalPrice);
    }, [state, days, totalPrice]);

    const formatCurrency = (value) => {
        return `${value.toLocaleString(undefined, { maximumFractionDigits: 0 })} /=`;
    };

    // Basic validation: ensure selected range is inside host's availability
    const isSelectionValid =
        state[0].startDate >= new Date(from) &&
        state[0].endDate <= new Date(to) &&
        state[0].startDate <= state[0].endDate;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Title & Subtitle */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
                <p className="text-gray-600">
                    Happy ride or driving. Make sure to have a safe journey!
                </p>
            </div>

            {/* Top Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="md:col-span-2">
                    <img
                        src={imageURL}
                        alt="Main Vehicle"
                        className="hover:scale-105 transition-transform duration-500 rounded-xl w-full h-[400px] object-cover"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, idx) => (
                        <img
                            key={idx}
                            src={imageURL}
                            alt={`Vehicle View ${idx + 1}`}
                            className="rounded-xl h-[190px] w-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    ))}
                </div>
            </div>

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
                                <p>{engineCC}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Mileage</p>
                                <p>{mileage}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Type</p>
                                <p>{type}</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-3">Description</h2>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>

                    {/* Host Details */}
                    <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
                        <img
                            src={host?.image}
                            alt="Host"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">{host?.name}</h3>
                            <p className="text-gray-600 text-sm">Joined in 2025</p>
                            <p className="text-sm text-yellow-500 font-medium">
                                ★ 4.9 (530 reviews)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="bg-white shadow-md rounded-xl p-6 h-fit">
                    <h2 className="text-lg font-semibold mb-4">Book This Vehicle</h2>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500">
                            Please select pickup and return dates within the available range:
                        </p>

                        {/* Date Picker */}
                        <DateRange
                            rangeColors={["#16A34A"]}
                            editableDateInputs={true}
                            onChange={(item) => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            minDate={new Date(from)} // Earliest host-available date
                            maxDate={new Date(to)} // Latest host-available date
                            ranges={state}
                        />

                        {/* Price Calculation */}
                        <div className="flex justify-between mt-3">
                            <p className="font-semibold text-gray-700">Total Price</p>
                            <p className="font-bold text-green-600">{formatCurrency(totalPrice)}</p>
                        </div>

                        {!isSelectionValid && (
                            <p className="text-sm text-red-500">
                                Selected dates must be inside the host's available range.
                            </p>
                        )}

                        <p className="text-sm text-gray-500">
                            You’ll only be charged for the days you select.
                        </p>

                        {vehicle?.booked ? (
                            <p className="text-red-500 font-semibold text-center py-2">
                                Vehicle is booked
                            </p>
                        ) : (
                            <button
                                onClick={() => setIsOpen(true)}
                                disabled={!isSelectionValid}
                                className={`w-full text-white font-semibold py-2 rounded-lg transition-all ${isSelectionValid
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-gray-300 cursor-not-allowed"
                                    }`}
                            >
                                Book Now
                            </button>
                        )}


                        {/* Modal */}
                        <BookingModal
                            closeModal={closeModal}
                            isOpen={isOpen}
                            refetch={refetch}
                            bookingInfo={{ ...vehicle, price: totalPrice, render: {name: user?.displayName}}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails_Card;
