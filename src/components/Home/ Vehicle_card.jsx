import { Link } from "react-router-dom";

const Vehicle_card = ({ vehicle }) => {
    const { _id, category, title, price, imageURL } = vehicle;

    return (
        <Link to={`/vehicle/${_id}`}>
            <div className="p-6 bg-green-50 rounded-lg hover:shadow-md hover:scale-[1.02] transition-transform">
                <img
                    src={imageURL}
                    alt={title}
                    className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-sm text-gray-500 mt-2">{category}</p>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-green-600 font-bold">৳ {price} / day</p>
            </div>
        </Link>
    );
};

export default Vehicle_card;
