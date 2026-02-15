import { FiLinkedin } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";

const Team = () => {
    return (
        <div className="bg-gradient-to-b from-[#0B1220] to-[#020617] py-8 sm:py-10  md:py-16 lg:py-28 px-4">
            <div className="max-w-7xl mx-auto ">
                {/* Team title part */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl lg:text-5xl text-gray-100 font-bold">
                        The People Behind the Wheels
                    </h1>
                    <p className="text-gray-400 text-md lg:text-lg">
                        Meet the dedicated team working tirelessly to ensure your journey is smooth and safe.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:pt-14 pt-10">
                    
                    {/* Card 01 */}
                    <div className="bg-slate-800/50 rounded-2xl px-8 py-4 space-y-3 text-center border
                            border-orange-100/10">
                        
                        {/* Team member image */}
                        <div className="flex items-center justify-center 
                            w-24 h-24 
                            mx-auto
                            bg-orange-500 
                            rounded-full 
                            
                            ">
                            <p className="text-black font-bold text-3xl">PDP</p>
                        </div>

                        <div>
                            <h4 className="text-gray-200 font-bold text-xl">Prosenjith Dash Pappu</h4>
                            <p className="text-orange-500">CEO & Founder</p>
                        </div>
                        <p className="text-gray-400">Visionary leader with 15 years in mobility.</p>

                        {/* Social media icons */}
                        <div className="flex text-center justify-center gap-6 ">

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

                    {/* Card 02 */}
                    <div className="bg-slate-800/50 rounded-2xl px-8 py-4 space-y-3 text-center border
                            border-orange-100/10">

                        {/* Team member image */}
                        <div className="flex items-center justify-center 
                            w-24 h-24 
                            mx-auto
                            bg-orange-500 
                            rounded-full 
                            
                            ">
                            <p className="text-black font-bold text-3xl">PDB</p>
                        </div>

                        <div>
                            <h4 className="text-gray-200 font-bold text-xl">Proshanto Dash Bappu</h4>
                            <p className="text-orange-500">Head of Operation</p>
                        </div>
                        <p className="text-gray-400">Streamlining logistics across 50+ cities.</p>

                        {/* Social media icons */}
                        <div className="flex text-center justify-center gap-6 ">

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

                    {/* Card 03 */}
                    <div className="bg-slate-800/50 rounded-2xl px-8 py-4 space-y-3 text-center border
                            border-orange-100/10">

                        {/* Team member image */}
                        <div className="flex items-center justify-center 
                            w-24 h-24 
                            mx-auto
                            bg-orange-500 
                            rounded-full 
                            
                            ">
                            <p className="text-black font-bold text-3xl">PP</p>
                        </div>

                        <div>
                            <h4 className="text-gray-200 font-bold text-xl">Proshanto Paul</h4>
                            <p className="text-orange-500">Fleet Manager</p>
                        </div>
                        <p className="text-gray-400">Ensuring every vehicle meets premium standards.</p>

                        {/* Social media icons */}
                        <div className="flex text-center justify-center gap-6 ">

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

                    {/* Card 04 */}
                    <div className="bg-slate-800/50 rounded-2xl px-8 py-4 space-y-3 text-center border
                            border-orange-100/10">

                        {/* Team member image */}
                        <div className="flex items-center justify-center 
                            w-24 h-24 
                            mx-auto
                            bg-orange-500 
                            rounded-full 
                            
                            ">
                            <p className="text-black font-bold text-3xl">SD</p>
                        </div>

                        <div>
                            <h4 className="text-gray-200 font-bold text-xl">Shaikat Dash</h4>
                            <p className="text-orange-500">Customer Success</p>
                        </div>
                        <p className="text-gray-400">Making every customer interaction memorable.</p>

                        {/* Social media icons */}
                        <div className="flex text-center justify-center gap-6 ">

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