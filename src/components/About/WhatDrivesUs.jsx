import { GiSelfLove } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";

const WhatDrivesUs = () => {
    return (
        <div className="bg-gradient-to-b from-[#0B1220] to-[#020617] py-8 sm:py-10  md:py-16 lg:py-28  ">
            <div className="max-w-7xl mx-auto ">
                {/* Title part */}
                <div className="max-w-2xl mx-auto space-y-4 text-center ">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl text-gray-100 font-bold">What Drives Us</h1>
                    <p className="text-gray-400">Our core values guide every decision we make, ensuring we deliver the best experience possible.</p>
                </div>

                {/* Card part of WDU */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-14 px-4">
                    {/* Card 01 */}
                    <div className="bg-slate-800/50  space-y-4 p-10 rounded-xl border-l-4 border-l-gray-500">
                        {/* Icon */}
                        <div className="">
                                                <div className="flex items-center justify-center
                                                w-12 h-12        
                                                sm:w-14 sm:h-14 
                                                md:w-16 md:h-16 
                                                lg:w-12 lg:h-12 
                                                bg-yellow-950 rounded-full
                                                ">
                        
                                <MdOutlineVerifiedUser className="text-3xl text-orange-600" />
                                </div>
                        </div>
                       
                        <h2 className="text-gray-200 text-2xl font-bold">Safety First</h2>
                        <p className="text-gray-400">Every vehicle undergoes rigorous 50-point inspections. Your safety is non-negotiable.</p>

                    </div>

                    {/* Card 02 */}
                    <div className="bg-slate-800/50  space-y-4 p-10 rounded-xl border-l-4 border-l-gray-500">
                        {/* Icon */}
                        <div className="">
                            <div className="flex items-center justify-center
                                                w-12 h-12        
                                                sm:w-14 sm:h-14 
                                                md:w-16 md:h-16 
                                                lg:w-12 lg:h-12 
                                                bg-yellow-950 rounded-full
                                                ">

                                <GiSelfLove className="text-3xl text-orange-600" />
                            </div>
                        </div>


                        <h2 className="text-gray-200 text-2xl font-bold">Customer Obsession</h2>
                        <p className="text-gray-400">We measure success by smiles, not just rides. Every decision starts with the customer.</p>

                    </div>

                    {/* Card 03 */}
                    <div className="bg-slate-800/50  space-y-4 p-10 rounded-xl border-l-4 border-l-gray-500">
                        {/* Icon */}
                        <div className="">
                            <div className="flex items-center justify-center
                                                w-12 h-12        
                                                sm:w-14 sm:h-14 
                                                md:w-16 md:h-16 
                                                lg:w-12 lg:h-12 
                                                bg-yellow-950 rounded-full
                                                ">

                                <FaRegLightbulb className="text-3xl text-orange-600" />
                            </div>
                        </div>


                        <h2 className="text-gray-200 text-2xl font-bold">Innovation</h2>
                        <p className="text-gray-400">From GPS tracking to digital payments, We embrace technology that makes your life easier.</p>

                    </div>

                    {/* Card 04 */}
                    <div className="bg-slate-800/50  space-y-4 p-10 rounded-xl border-l-4 border-l-gray-500">
                        {/* Icon */}
                        <div className="">
                            <div className="flex items-center justify-center
                                                w-12 h-12        
                                                sm:w-14 sm:h-14 
                                                md:w-16 md:h-16 
                                                lg:w-12 lg:h-12 
                                                bg-yellow-950 rounded-full
                                                ">

                                <LuLeaf className="text-3xl text-orange-600" />
                            </div>
                        </div>


                        <h2 className="text-gray-200 text-2xl font-bold">Sustainability</h2>
                        <p className="text-gray-400">We're committed to adding electric vehicles and reducing our carbon footprint by 2026.</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatDrivesUs;