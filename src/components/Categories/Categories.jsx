import { Link } from "react-router-dom";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
import { FaArrowRight } from "react-icons/fa";

// categories part
const Categories = () => {
    return (
        <section className="py-20 bg-[#0B1220] px-4 ">
            {/* Category Title part */}
            <div className="max-w-2xl mx-auto space-y-4 text-center mb-12">
                <h2 className="inline-block mx-auto font-bold text-orange-500 rounded-full text-xs sm:text-sm md:text-base py-1 px-4 bg-gray-800 border border-orange-500">Browse by Category</h2>

                <h1 className="text-4xl md:text-4xl lg:text-4xl text-gray-100 font-bold">Find Your Perfect <span className="text-orange-500">Ride</span></h1>
                <p className="text-gray-400">From bikes to Buses, We have the right vehicle for every journey. Choose your category and start exploring.</p>
            </div>

            <div className="max-w-7xl mx-auto ">
                <div className=" 
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-6 
                gap-6
       ">
                    {
                        categories.map((category, idx) =>
                            <CategoryBox
                                key={idx} category={category}
                            ></CategoryBox>
                        )
                    }
                </div>
            </div>

            {/* All vehicle button */}
            <Link to='/'>
                <button className=" text-orange-500 font-bold text-center max-w-2xl mx-auto flex justify-center px-4   rounded-lg mt-10 items-center gap-2">
                    <p>View All Vehicles </p>

                    <FaArrowRight />
                </button>
            </Link>
        </section>
        
    );
};

export default Categories;

// 1. make data
// 2. fetch data
// 3. map data
// 4. Make card
// 5. Display data