import { Link } from "react-router-dom";

const Vehicle_card = ({ vehicle }) => {
    const { _id, category, title, price, imageURL } = vehicle;

    return (
        <Link to={`/vehicle/${_id}`}>
            <div className="p-6 bg-[#0B1220] text-white border-2 border-gray-700 rounded-lg hover:shadow-md hover:scale-[1.02] transition-transform hover:border hover:border-orange-500 hover:rounded-xl">
                <img
                    src={imageURL}
                    alt={title}
                    className="w-full h-48 object-cover rounded-md "
                />
                <p className="text-sm text-gray-200 mt-2">{category}</p>
                <h3 className="text-lg font-semibold text-gray-400">{title}</h3>
                <p className="text-orange-500 font-bold">৳ {price} / day</p>
            </div>
        </Link>
    );
};

export default Vehicle_card;
