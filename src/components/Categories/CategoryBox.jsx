import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { FaMotorcycle, FaCar, FaBus, FaTruck } from "react-icons/fa";
import { MdElectricScooter } from "react-icons/md";
import { GiJeep } from "react-icons/gi";

import bikeImg from "../../../public/assets/CategoriesImages/Bike.jpg";
import scooterImg from "../../../public/assets/CategoriesImages/scooter.webp";
import carImg from "../../../public/assets/CategoriesImages/car.jpg";
import busImg from "../../../public/assets/CategoriesImages/bus.jpeg";
import truckImg from "../../../public/assets/CategoriesImages/truck.jpeg";
import jeepImg from "../../../public/assets/CategoriesImages/jeep.jpg";


// Icon Mapping
const iconMap = {
    Bike: <FaMotorcycle />,
    Scooter: <MdElectricScooter />,
    Car: <FaCar />,
    Bus: <FaBus />,
    Truck: <FaTruck />,
    Jeep: <GiJeep />,
};

const imageMap = {
    Bike: bikeImg,
    Scooter: scooterImg,
    Car: carImg,
    Bus: busImg,
    Truck: truckImg,
    Jeep: jeepImg,
};

const CategoryBox = ({ category }) => {
    const navigate = useNavigate();

    const handleCategory = () => {
        const url = queryString.stringifyUrl({
            url: "/",
            query: { category: category.name },
        });

        navigate(url);
    };

    return (
        <div
            onClick={handleCategory}
            className="
            relative group cursor-pointer 
            w-full 
            h-[170px]                 
            sm:h-[190px] 
            md:h-[210px] 
            lg:h-[190px] 
            rounded-3xl overflow-hidden border border-[#1E293B] 
            shadow-xl hover:shadow-orange-500/30 
            transition duration-300
            "
        >
            {/* Background Image */}
            <img
                src={imageMap[category.name]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#0F172A]"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-3">

                {/* Icon Box */}
                <div className="bg-[#1E293B]/60 backdrop-blur-md p-3  rounded-xl shadow-lg group-hover:scale-110 transition duration-300">
                    <span className="text-3xl  text-orange-500">
                        {iconMap[category.icon]}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold">
                    {category.name}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-xs text-center px-3">
                    {category.description}
                </p>
            </div>
        </div>
    );
};

export default CategoryBox;