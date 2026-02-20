import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { GiGasPump } from "react-icons/gi";

const Vehicle_card = ({ vehicle }) => {
    const { _id, category, title, price, imageURL ,location, type, mileage, engineCC} = vehicle;

    // or card bg color => bg-[#111827]/80 backdrop-blur-lg
    return (
        <Link to={`/vehicle/${_id}`}>
            <div className=" relative bg-[#0B1A2E] rounded-3xl border border-orange-500/40 overflow-hidden shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2 transform transition-all duration-300 flex flex-col h-full">
                
                {/* Image part */}
                <div className="relative border-b border-gray-700/40">
                    <img
                        src={imageURL}
                        alt={category}
                        className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover rounded-t-3xl"
                    />

                    {/* Dark Bottom Overlay */}
                    {/* via-[#0B1A2E]/40 to-[#0B1A2E]  */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1A2E]/20 to-[#0B1A2E] rounded-t-3xl"></div>

                    {/* Badge */}
                    <span className="absolute top-4 left-4 text-sm sm:text-base bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full backdrop-blur-md">
                        {category}
                    </span>
                </div>

                {/* Content part */}
                <div className="p-5 sm:p-6 space-y-4 flex flex-col flex-1">

                    {/* Title part and rating*/}
                    <div className="flex justify-between items-center">

                        <div>
                            {/* Title part */}
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-400">
                                {title}
                            </h2>

                            {/* Location */}
                            <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm sm:text-base">
                                <IoLocationOutline />
                                <span>{location}</span>
                            </div>

                        </div>

                        {/* rating part */}
                        {/* <div className="flex items-center gap-1 text-yellow-400 text-sm sm:text-base">
                            <FaStar />
                            <span className="font-semibold text-white">4.9</span>
                            <span className="text-gray-500 text-xs sm:text-sm">(89 trips)</span>
                        </div> */}

                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm sm:text-base">
                        <div className="flex items-center justify-center gap-2 bg-[#12233A] text-gray-300 py-2 rounded-xl">
                            <MdSpeed />
                            {type}
                        </div>

                        <div className="flex items-center justify-center gap-2 bg-[#12233A] text-gray-300 py-2 rounded-xl">
                            <BsPeople />
                            2 Seats
                        </div>

                        <div className="flex items-center justify-center gap-2 bg-[#12233A] text-gray-300 py-2 rounded-xl">
                            <GiGasPump />
                            Petrol
                        </div>
                    </div>
                    <div className="border-t border-gray-700/40 pt-4 flex justify-between items-center mt-auto">

                        {/* Price */}
                        <div>
                            <span className="text-2xl sm:text-3xl font-bold text-orange-500">
                                ৳{price}
                            </span>
                            <span className="text-gray-400 text-sm sm:text-base"> /day</span>
                        </div>

                        {/* Button */}
                        <Link to={`/vehicle/${_id}`}>
                            <button className="bg-[#1E2F4A] text-gray-200 px-5 py-2.5 rounded-xl text-sm sm:text-base hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Vehicle_card;
