
const AboutBanner = () => {
    return (
    
        <div className="relative h-[350px] md:h-[500px] lg:h-[450px] bg-[url('/assets/AboutImages/b.webp')] bg-cover bg-center">

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
            from-[#0F172A]/100 
            via-[#0B1220]/85 
            to-[#0F172A]/100">
            </div>


            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
                <div className="  max-w-[750px] mx-auto space-y-4 md:space-y-5 text-center">
                    <h2 className="inline-block mx-auto font-extrabold text-orange-500 rounded-full text-xs sm:text-sm md:text-base py-1 px-4 bg-gray-800 border border-orange-500">EST. 2020. DHAKA, BANGLADESH</h2>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl ">
                        Driving Bangladesh <br /> <span className="text-orange-500 ">Forward</span>
                    </h1>
                    <p className="text-sm md:text-xl lg:text-2xl  text-gray-300">
                        From a small garage with 10 bikes to the nation's most trusted vehicle rental platform. This is our story.
                    </p>
                </div>
               
                
                
            </div>

        </div>


   
    );
};

export default AboutBanner;