import { Link } from "react-router-dom";

const Vehicle_card = ({ vehicle }) => {
    const { _id, category, title, price, imageURL } = vehicle;

    // or card bg color => bg-[#111827]/80 backdrop-blur-lg
    return (
        <Link to={`/vehicle/${_id}`}>
            <div className=" relative bg-[#0B1A2E] rounded-3xl border border-orange-500/40 overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                
                {/* Image part */}
                <div className="relative">
                    <img
                        src={imageURL}
                        alt={category}
                        className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover"
                    />

                    {/* Dark Bottom Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1A2E]/40 to-[#0B1A2E]"></div>

                    {/* Badge */}
                    <span className="absolute top-4 left-4 text-sm sm:text-base bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full backdrop-blur-md">
                        {category}
                    </span>

                </div>

                {/* Content part */}
                <div className="p-5 sm:p-6 space-y-4">

                    {/* Title part and rating*/}
                    <div className="flex justify-center items-center">

                        <div>
                            {/* Title part */}
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-400">
                                {title}
                            </h2>

                            {/* Location */}
                            <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm sm:text-base">
                                <IoLocationOutline />
                                <span>Chittagong</span>
                            </div>

                        </div>

                        {/* rating part */}
                        <div className="flex items-center gap-1 text-yellow-400 text-sm sm:text-base">
                            <FaStar />
                            <span className="font-semibold text-white">4.9</span>
                            <span className="text-gray-500 text-xs sm:text-sm">(89 trips)</span>
                        </div>

                    </div>

                </div>
                
                <p className="text-sm text-gray-200 mt-2">{category}</p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">{title}</h3>
                <p className="text-orange-500 font-bold">৳ {price} / day</p>
            </div>
        </Link>
    );
};

export default Vehicle_card;
