import { GrEmptyCircle } from "react-icons/gr";
import { IoFlagOutline } from "react-icons/io5";

const Mission_Vision = () => {
    return (
        <div className="bg-gradient-to-b from-[#0F172A]  via-[#0B1220] to-[#0F172A] py-8 sm:py-10 p-4  md:py-16 lg:py-24">
            
            {/* Main Mission & Vision part */}
            <div className="
                flex flex-col lg:flex-row 
                gap-6 
                max-w-7xl mx-auto">

                {/* Mission card */}
                <div className="bg-gradient-to-b from-orange-500/10  to-orange-500/2  space-y-4 p-12  rounded-2xl border border-gray-700">
                                        {/* Icon */}
                    <div className="">
                        <div className="flex items-center justify-center
                        w-14 h-14
                        sm:w-14 sm:h-14
                        md:w-16 md:h-16
                        lg:w-16 lg:h-16
                      bg-orange-600/15 rounded-xl
                        ">                                        

                            <GrEmptyCircle className="text-4xl text-orange-500" />
                        </div>
                    </div>
                                       
                    <h2 className="text-gray-200 text-3xl lg:text-4xl font-bold">Our Mission</h2>
                    <p className="text-gray-400 text-md lg:text-lg">
                        To provide accessible, Reliable, And premium transportation solutions to everyone in Bangladesh, Making every journey memorable and hassle-free through technology and superior service.
                    </p>
                
                </div>

                {/* Vision card */}
                <div className="bg-gradient-to-b from-blue-500/10  to-blue-500/2  space-y-4 p-12  rounded-2xl border border-gray-700 ">
                    {/* Icon */}
                    <div className="">
                        <div className="flex items-center justify-center
                        w-14 h-14
                        sm:w-14 sm:h-14
                        md:w-16 md:h-16
                        lg:w-16 lg:h-16
                      bg-blue-600/15 rounded-xl
                        ">

                            <IoFlagOutline className="text-4xl text-blue-800 " />
                        </div>
                    </div>

                    <h2 className="text-gray-200 text-3xl lg:text-4xl font-bold">Our Vision</h2>
                    <p className="text-gray-400 text-md lg:text-lg">
                        To become the leading mobility platform in South Asia, Setting the standard for quality, Safety, And Sustainability in the vehicle rental industry while empowering local communities.
                    </p>

                </div>                     

            </div>

        </div>
    );
};

export default Mission_Vision;
