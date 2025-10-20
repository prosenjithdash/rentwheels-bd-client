import { Link } from "react-router-dom";

// It's a vehicle card ui
const Vehicle_card = ({ vehicle }) => {
    const { _id,category, title, price } = vehicle;
    return (
        <Link to={`/vehicle/${_id}`}>
            <div className="border border-green-500 p-3 bg-green-50 rounded-lg">
                <p>{category}</p>
                <p>{title}</p>
                <p>{price}</p>
            </div>
        </Link>
    );
};

export default  Vehicle_card;