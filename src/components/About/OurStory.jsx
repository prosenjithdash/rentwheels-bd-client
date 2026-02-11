import { FiCalendar} from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { SiComma } from "react-icons/si";

const OurStory = () => {
    return (
        // Main div
        <div className="bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] py-8 sm:py-10  md:py-16 lg:py-24">

            <div className="px-4  md:flex lg:flex   md:gap-4 lg:gap-6 justify-between items-center max-w-7xl mx-auto ">

                {/* Story Content */}
                <div className="max-w-3xl mx-auto  space-y-3 lg:space-y-6">
                    <h2 className="text-orange-500 font-bold text-md md:text-lg lg:text-xl">OUR STORY</h2>
                    <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-200">
                        Redefining Mobility in Bangladesh
                    </h1>
                    <p className="text-gray-300 text-sm lg:text-xl">
                        It started with a simple observation: renting a vehicle in Dhaka was complicated, unreliable, and often unsafe. In 2020, we set out to change that with just 10 motorbikes and a commitment to transparency.

                        <br />
                        <br />

                        As demand grew grew, so did our ambition. We expanded our fleet to include sedans, SUVs, and microbuses, catering to families, businesses, and travelers alike. We introduced digital bookings, GPS tracking, and 24/7 support-features that were unheard of in the local market.

                        <br />
                        <br />

                        Today, RentWheels_BD is more than just a rental service; we are a technology-driven mobility  partner for thousands of people across 50+ cities. We are proud to be driving Bangladesh forward, one journey at a time.
                    </p>
                </div>

                {/* CEO content */}
                <div className="border border-gray-700 rounded-2xl
                p-4 mt-5 sm:p-6 md:p-8 lg:p-10 space-y-3 md:space-y-4 bg-gray-900">
                    {/* Semicolon icon */}
                    <div className="flex">
                        <SiComma className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-500" />
                        <SiComma className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-500" />
                    </div>
                    <h1 className="text-gray-200 text-md sm:text-lg md:text-xl lg:text-2xl pb-5 border-b  border-b-gray-400">"We didn't just want to rent vehicles - We wanted to change how Bangladesh moves."</h1>

                    {/* CEO Info */}
                    <div className="flex gap-6 justify-between">
                        <div>
                            <h3 className="font-bold text-white text-sm md:text-lg lg:text-md">Arif Rahman</h3>
                            <p className="text-orange-500 text-sm md:text-lg lg:text-md">Founder & CEO</p>
                        </div>
                        <div className="flex gap-8 items-center">
                            {/* calender */}
                            <div className="flex gap-3 items-center">
                                {/* calender icon */}
                                <FiCalendar className="text-orange-500" /> 
                                <p className="text-gray-400">2020</p>
                            </div>

                            {/* location */}
                            <div className="flex gap-3 items-center">
                                {/* location icon */}
                                <IoLocationOutline className="text-orange-500"/> 
                                <p className="text-gray-400">Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default OurStory;