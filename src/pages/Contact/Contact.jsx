import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        //bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#020617]
        // Main div 
        <div className="bg-black text-gray-400 py-20">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-gray-900 rounded-lg">
                {/* Main Flex */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
                    {/* Get in touch */}
                    <div className=" space-y-8  sm:space-y-10 ">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">GET IN <span className="text-[#FF7A18]">TOUCH</span></h1>

                        <p className="text-md sm:text-xl text-gray-400">Ready to start your journey? Contact us for custom quotes, long-term rentals, or any questions.</p>

                        <div className="flex gap-6 items-center group cursor-pointer">

                            {/* Square Icon Box */}
                            <div
                                className="w-14 h-14 flex items-center justify-center 
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
                                <p className="text-md sm:text-2xl font-extrabold text-white">
                                    +8801724154911
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-6 items-center group cursor-pointer">
                            {/* Icon */}
                            <div
                                className="w-14 h-14 flex items-center justify-center 
                   rounded-lg bg-[#111827]
                   group-hover:bg-orange-500
                   transition-all duration-300"
                            >
                                <FaEnvelope className="text-white text-lg" />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm text-gray-400">EMAIL US</h3>
                                <p className="text-md sm:text-2xl font-extrabold text-white">
                                    support@rentwheels_bd.com
                                </p>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="flex gap-6 items-center group cursor-pointer">
                            {/* Icon */}
                            <div
                                className="w-14 h-14 flex items-center justify-center 
                   rounded-lg bg-[#111827]
                   group-hover:bg-orange-500
                   transition-all duration-300"
                            >
                                <FaMapMarkerAlt className="text-white text-lg" />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm text-gray-400">VISIT US</h3>
                                <p className="text-md sm:text-2xl font-extrabold text-white">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>



                    </div>

                    {/* Input form */}
                    <div className=" w-full max-w-xl lg:max-w-none text-gray-300 px-6 sm:px-8 py-6 sm:py-8  border-2 rounded-2xl border-gray-700 ">
                        <form className=" space-y-4">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">
                                    Full Name
                                </label>
                                
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent
                       border border-gray-600 text-white
                       placeholder-gray-500
                       focus:outline-none focus:border-orange-500
                       transition"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent
                       border border-gray-600 text-white
                       placeholder-gray-500
                       focus:outline-none focus:border-orange-500
                       transition"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+880..."
                                    className="w-full px-4 py-3 rounded-lg bg-transparent
                       border border-gray-600 text-white
                       placeholder-gray-500
                       focus:outline-none focus:border-orange-500
                       transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">
                                    Tell us about your trip
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Trip details, dates, vehicle preference..."
                                    className="w-full px-4 py-3 rounded-lg bg-transparent
                       border border-gray-600 text-white
                       placeholder-gray-500
                       focus:outline-none focus:border-orange-500
                       transition resize-none"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600
                                hover:-translate-y-0.5 hover:shadow-lg
                                text-white font-semibold py-3 rounded-lg
                                transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Contact;