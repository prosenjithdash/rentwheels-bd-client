import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        // Main div
        <div className="bg-gradient-to-b from-[#020617] to-[#02040f] text-gray-400">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Main Flex */}
                <div className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-12">
                    {/* Get in touch */}
                    <div className="space-y-10">
                        <h1 className="text-4xl font-extrabold text-white">GET IN <span className="text-[#FF7A18]">TOUCH</span></h1>

                        <p className="text-gray-400">Ready to start your journey? Contact us for custom quotes, long-term rentals, or any questions.</p>

                        <div className="flex gap-6 items-center group cursor-pointer">

                            {/* Square Icon Box */}
                            <div
                                className="w-12 h-12 flex items-center justify-center 
                                rounded-lg 
                                bg-[#111827] 
                                group-hover:bg-orange-500 
                                transition-all duration-300"
                            >
                                <FaPhoneAlt className="text-white text-lg" />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm text-gray-400">CALL US</h3>
                                <p className="text-2xl font-extrabold text-white">
                                    +8801724154911
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-6 items-center group cursor-pointer">
                            {/* Icon */}
                            <div
                                className="w-12 h-12 flex items-center justify-center 
                   rounded-lg bg-[#111827]
                   group-hover:bg-orange-500
                   transition-all duration-300"
                            >
                                <FaEnvelope className="text-white text-lg" />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm text-gray-400">EMAIL US</h3>
                                <p className="text-2xl font-extrabold text-white">
                                    support@rentwheels_bd.com
                                </p>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="flex gap-6 items-center group cursor-pointer">
                            {/* Icon */}
                            <div
                                className="w-12 h-12 flex items-center justify-center 
                   rounded-lg bg-[#111827]
                   group-hover:bg-orange-500
                   transition-all duration-300"
                            >
                                <FaMapMarkerAlt className="text-white text-lg" />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm text-gray-400">VISIT US</h3>
                                <p className="text-2xl font-extrabold text-white">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>



                    </div>

                    {/* Input form */}
                    <div>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Contact;