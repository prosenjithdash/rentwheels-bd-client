import queryString from "query-string";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({ category }) => {
    const navigate = useNavigate();

    const handleCategory = () => {
        let currentQuery = { category: category.name };

        const url = queryString.stringifyUrl({
            url: "/",
            query: currentQuery,
        });

        navigate(url);
    };

    return (
        <div
            onClick={handleCategory}
            className="relative group cursor-pointer rounded-3xl overflow-hidden border border-blue-900 shadow-xl"
        >
            {/* Background Image */}
            <img
                src={category.image}   // make sure category.image আছে
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0B1220]/90"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-4">

                {/* Icon Box */}
                <div className="bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg group-hover:scale-105 transition duration-300">
                    <span className="text-4xl text-blue-400">
                        {category.icon}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold">
                    {category.name}
                </h2>

                {/* Vehicle Count */}
                <p className="text-gray-300 text-lg">
                    {category.count} vehicles
                </p>
            </div>
        </div>
    );
};

export default CategoryBox;
