import { FiCalendar } from "react-icons/fi";

const AboutCount = () => {
    return (
        <div className="bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] h-[200px] md:h-[300px] lg:h-[350px] border border-red-700">
            {/* Content */}
            {/* Main div */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {/* Years of service */}
                <div className="border border-red-700 space-y-3 md:space-y-4 text-center">
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
                    
                    <div className="text-center">
                        {/* number of years */}
                        <h2 className="text-md md:text-lg lg:text-4xl font-extrabold text-white">5+</h2>
                        {/* Sentence */}
                        <p className="text-gray-400">YEARS OF SERVICE</p>
                    </div>

                </div>
                {/* Vehicle in fleet */}
                <div className="border border-red-700">

                </div >
                {/* Happy Customers */}
                <div className="border border-red-700">

                </div>
                {/*City covered */}
                <div className="border border-red-700">

                </div>


                
            </div>
        </div>
    );
};

export default AboutCount;