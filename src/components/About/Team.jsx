import { FiLinkedin } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";

const Team = () => {
    return (
        <div className="bg-gradient-to-b from-[#0B1220] to-[#020617] py-8 sm:py-10  md:py-16 lg:py-28 ">
            <div className="max-w-7xl mx-auto ">
                {/* Team title part */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl lg:text-5xl text-gray-100 font-bold">
                        The People Behind the Wheels
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Meet the dedicated team working tirelessly to ensure your journey is smooth and safe.
                    </p>
                </div>

                {/* Team Cards */}
                <div>
                    {/* Card 01 */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 space-y-3">
                        
                        {/* Team member image */}
                        <div className="bg-orange-500 rounded-full p-8">
                            <p className="text-black font-bold">PDP</p>
                        </div>

                        <h4 className="text-gray-200 font-bold">Prosenjith Dash Pappu</h4>
                        <p className="text-orange-500">CEO & Founder</p>
                        <p className="text-gray-400">Visionary leader with 15 years in mobility.</p>

                        {/* Social media icons */}
                        <div className="flex text-center gap-6 ">

                            {/* Linkedin icon */}
                            <div className="">
                                <div className="flex items-center justify-center
                                    w-10 h-10        
                                    sm:w-10 sm:h-10 
                                    md:w-10 md:h-10 
                                    lg:w-12 lg:h-12 
                                  bg-gray-700 rounded-full
                                    ">
                                                    
                                    <FiLinkedin className="text-2xl text-gray-400" />
                             </div>
                            </div>
                            
                            {/* Twitter icon */}
                            <div className="">
                                <div className="flex items-center justify-center
                                    w-10 h-10        
                                    sm:w-10 sm:h-10 
                                    md:w-10 md:h-10 
                                    lg:w-12 lg:h-12 
                                  bg-gray-700 rounded-full
                                    ">

                                    <RxTwitterLogo className="text-2xl text-gray-400" />
                                </div>
                            </div>
                            
                            {/* Email icon */}
                            <div className="">
                                <div className="flex items-center justify-center
                                    w-10 h-10        
                                    sm:w-10 sm:h-10 
                                    md:w-10 md:h-10 
                                    lg:w-12 lg:h-12 
                                  bg-gray-700 rounded-full
                                    ">

                                    <AiOutlineMail className="text-2xl text-gray-400" />
                                </div>
                            </div>
                         
                            
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;