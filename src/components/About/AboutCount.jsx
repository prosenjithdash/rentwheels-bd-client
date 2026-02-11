import { FiCalendar, FiUsers } from "react-icons/fi";
import { IoCarSportOutline, IoLocationOutline } from "react-icons/io5";


const AboutCount = () => {
    return (
        <div className="bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] h-[200px] md:h-[300px] lg:h-[350px] border-t border-t-gray-800 border-b border-b-gray-800  border-2 border-yellow-600 flex items-center ">
            {/* Content */}
            {/* Main div */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-6">

                {/* Years of service */}
                <div className="space-y-4 md:space-y-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="flex items-center justify-center
                        w-12 h-12        
                        sm:w-14 sm:h-14 
                        md:w-16 md:h-16 
                        lg:w-12 lg:h-12 
                        bg-yellow-950 rounded-full
                        ">

                            <FiCalendar className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-600" />
                        </div>
                    </div>
                    
                    <div className="text-center space-y-1 md:space-y-1">
                        {/* number of years */}
                        <h2 className="text-md md:text-lg lg:text-4xl font-bold text-white">5+</h2>
                        {/* Sentence */}
                        <p className="text-gray-400 ">YEARS OF SERVICE</p>
                    </div>

                </div>

                {/* Vehicle in fleet */}
                <div className="space-y-4 md:space-y-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="flex items-center justify-center
                        w-12 h-12        
                        sm:w-14 sm:h-14 
                        md:w-16 md:h-16 
                        lg:w-12 lg:h-12 
                        bg-yellow-950 rounded-full
                        ">
                            <IoCarSportOutline className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-600" />

                        </div>
                    </div>

                    <div className="text-center space-y-1 md:space-y-1">
                        {/* number of years */}
                        <h2 className="text-md md:text-lg lg:text-4xl font-bold text-white">500+</h2>
                        {/* Sentence */}
                        <p className="text-gray-400">VEHICLE IN FLEET</p>
                    </div>

                </div>

                {/* Happy Customers */}
                <div className=" space-y-4 md:space-y-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="flex items-center justify-center
                        w-12 h-12        
                        sm:w-14 sm:h-14 
                        md:w-16 md:h-16 
                        lg:w-12 lg:h-12 
                        bg-yellow-950 rounded-full
                        ">

                            <FiUsers className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-600" />

                        </div>
                    </div>

                    <div className="text-center space-y-1 md:space-y-1">
                        {/* number of years */}
                        <h2 className="text-md md:text-lg lg:text-4xl font-bold text-white">1O,000+</h2>
                        {/* Sentence */}
                        <p className="text-gray-400">HAPPY CUSTOMERS</p>
                    </div>

                </div>

                {/*City covered */}
                <div className=" space-y-4 md:space-y-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="flex items-center justify-center
                        w-12 h-12        
                        sm:w-14 sm:h-14 
                        md:w-16 md:h-16 
                        lg:w-12 lg:h-12 
                        bg-yellow-950 rounded-full
                        ">

                        <IoLocationOutline className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-600" />

                        </div>
                    </div>

                    <div className="text-center space-y-1 md:space-y-1">
                        {/* number of years */}
                        <h2 className="text-md md:text-lg lg:text-4xl font-bold text-white">50+</h2>
                        {/* Sentence */}
                        <p className="text-gray-400">CITIES COVERED</p>
                    </div>

                </div>


                
            </div>
        </div>
    );
};

export default AboutCount;