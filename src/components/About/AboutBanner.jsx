
const AboutBanner = () => {
    return (
    
        <div className="relative h-[700px] bg-[url('/assets/AboutImages/b.webp')] bg-cover bg-center">

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
            from-[#0F172A]/90 
            via-[#0B1220]/80 
            to-[#0F172A]/90">
            </div>


            {/* Content */}
            <div className="relative z-10  items-center justify-center h-full text-white  border border-green-700">
                <div className="border-2 border-red-700 items-center justify-center  max-w-[750px] mx-auto space-y-5">
                    <h2 className="w-[300px] mx-auto border border-orange-600 font-extrabold text-orange-600 rounded-full text-center py-1 px-1 bg-gray-800">EST. 2020. DHAKA, BANGLADESH</h2>
                    <h1 className="text-7xl font-bold text-center">
                        Driving Bangladesh <br /> <span className="text-orange-600 ">Forward</span>
                    </h1>
                    <p className="text-2xl text-center text-gray-300">
                        From a small garage with 10 bikes to the nation's most trusted vehicle rental platform. This is our story.
                    </p>
                </div>
               
                
                
            </div>

        </div>


   
    );
};

export default AboutBanner;