import { differenceInCalendarDays } from "date-fns";
import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import BookingModal from "../Dashboard/Modal/BookingModal";
import useAuth from "../../hooks/useAuth";
import { Divide } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
    Gauge,
    Fuel,
    Droplet,
    Users,
    SlidersHorizontal,
    Tag
} from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";

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
        seats,
        fuelType,
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
        <div className="bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] px-4 ">
            <div className="max-w-7xl mx-auto px-4 py-10 ">
                {/* Title & Subtitle */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
                    {/* <p className="text-gray-600">
                        Happy ride or driving. Make sure to have a safe journey!
                    </p> */}
                </div>

                {/* Top Image Grid */}
                {/* Modern Premium Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 bg-[#0B1A2E] p-4 rounded-2xl shadow-2xl hover:shadow-orange-500/30 border border-gray-700/30">

                    {/* Main Image */}
                    <div className="lg:col-span-2 overflow-hidden rounded-3xl shadow-xl">
                        <img
                            src={imageURL}
                            alt="Main Bike"
                            className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover transition duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Thumbnail Section */}
                    <div className="grid grid-cols-2 gap-5">

                        {/* Thumb 1 */}
                        <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                            <img
                                src={imageURL}
                                alt="Angle 1"
                                className="w-full h-[150px] sm:h-[190px] lg:h-[250px] object-cover object-left scale-110"
                            />
                        </div>

                        {/* Thumb 2 */}
                        <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                            <img
                                src={imageURL}
                                alt="Angle 2"
                                className="w-full h-[150px] sm:h-[190px] lg:h-[250px] object-cover object-right scale-110"
                            />
                        </div>

                        {/* Thumb 3 */}
                        <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                            <img
                                src={imageURL}
                                alt="Angle 3"
                                className="w-full h-[150px] sm:h-[190px] lg:h-[250px] object-cover"
                                style={{ objectPosition: "center top", transform: "scale(1.2)" }}
                            />
                        </div>

                        {/* Thumb 4 */}
                        <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition relative group cursor-pointer">
                            <img
                                src={imageURL}
                                alt="More"
                                className="w-full h-[150px] sm:h-[190px] lg:h-[250px] object-cover  "
                            />
                            {/* <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                            View All
                        </div> */}
                        </div>

                    </div>
                </div>




                {/* Vehicle Specs + Booking Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left side content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-50 font-bold">{title}</h2>

                            {/* Location icon and name */}
                            <div className="flex gap-1 justify-start items-center ">
                                {/* location icon */}
                                <IoLocationOutline className="text-orange-500 text-md"/>
                                <p className="text-gray-400 text-md">{location}</p>
                                <p className="border border-orange-500 px-2 text-orange-500 rounded-2xl text-[12px]  ml-6
                                ">{category}</p>
                            </div>
                        </div>

                        {/* Available dates */}
                        <div>
                            <div className="bg-[#0f1c2e] border border-white/10 rounded-2xl p-4 my-10 
                         transition duration-300 hover:border-orange-500/40 ">
                                <div className=" flex gap-3 items-center">
                                    {/* Calender icon */}
                                    <div className="bg-gray-800 transform p-3 w-10 rounded-xl">
                                        <FaCalendarAlt className="text-orange-500 " />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">AVAILABILITY</p>
                                        <p className="text-gray-200 flex items-center gap-3">{from} <FaLongArrowAltRight/> { to}</p>
                                    </div>
                                    
                                    
                                </div>

                            </div>
                        </div>

                        <div>

                            {/* Title */}
                            <h2 className="text-white text-xl font-bold mb-4">
                                Specifications
                            </h2>
        
                            {/* Specification cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                                {/* Engine */}
                                <div className="bg-[#0f1c2e] border border-white/10 rounded-2xl p-4 
                         flex flex-col items-center text-center 
                         transition duration-300 hover:border-orange-500/40 ">
                                    <Gauge className="text-orange-500 mb-4"/>
                                    <p className="text-gray-500 tracking-widest text-sm mb-2">ENGINE</p>
                                    <p className="text-white text-sm font-semibold">{engineCC} CC</p>

                                </div>

                                {/* Mileage */}
                                <div className="bg-[#0f1c2e] border border-white/10 rounded-2xl p-4 
                         flex flex-col items-center text-center 
                         transition duration-300 hover:border-orange-500/40">
                                    <Fuel className="text-orange-500 mb-4" />
                                    <p className="text-gray-500 tracking-widest text-sm mb-2">MILEAGE</p>
                                    <p className="text-white text-sm font-semibold">{mileage} km/l</p>

                                </div>

                                {/* Fuel Type */}
                                <div className="bg-[#0f1c2e] border border-white/10 rounded-2xl p-4 
                         flex flex-col items-center text-center 
                         transition duration-300 hover:border-orange-500/40">
                                    <Droplet className="text-orange-500 mb-4" />
                                    <p className="text-gray-500 tracking-widest text-sm mb-2">FUEL TYPE</p>
                                    <p className="text-white text-sm font-semibold">{fuelType}</p>

                                </div>

                                {/* Seats */}
                                <div className="bg-[#0f1c2e] border border-white/10 rounded-2xl p-4 
                         flex flex-col items-center text-center 
                         transition duration-300 hover:border-orange-500/40">
                                    <Users className="text-orange-500 mb-4" />
                                    <p className="text-gray-500 tracking-widest text-sm mb-2">SEATS</p>
                                    <p className="text-white text-sm font-semibold">{seats}</p>

                                </div>

                                {/* TYPE */}
                                <div className="bg-[#0f1c2e] border border-white/10 rounded-2xl p-4 
                         flex flex-col items-center text-center 
                         transition duration-300 hover:border-orange-500/40">
                                    <SlidersHorizontal className="text-orange-500 mb-4" />
                                    <p className="text-gray-500 tracking-widest text-sm mb-2">TYPE</p>
                                    <p className="text-white text-sm font-semibold">{type}</p>

                                </div>

                                {/* CATEGORY */}
                                <div className="bg-[#0f1c2e] border border-white/10 rounded-2xl p-4 
                         flex flex-col items-center text-center 
                         transition duration-300 hover:border-orange-500/40">
                                    <Tag className="text-orange-500 mb-4" />
                                    <p className="text-gray-500 tracking-widest text-sm mb-2">CATEGORY</p>
                                    <p className="text-white text-sm font-semibold">{category}</p>

                                </div>


                            </div>

                            

                        </div>
                       
                            
                       



                        {/* Description */}
                        <div className="bg-[#0B1A2E] shadow-md rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-3">Description</h2>
                            <p className="text-gray-700 leading-relaxed">{description}</p>
                        </div>

                        {/* Host Details */}
                        <div className="bg-[#0B1A2E] shadow-md rounded-xl p-6 flex items-center gap-4">
                            <img
                                referrerPolicy="no-referrer"
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
                    <div className="bg-[#0B1A2E] shadow-md rounded-xl p-6 h-fit">
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
                                bookingInfo={{
                                    ...vehicle,
                                    price: totalPrice,
                                    render: {
                                        name: user?.displayName,
                                        email: user?.email,
                                        image: user?.photoURL,
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VehicleDetails_Card;
