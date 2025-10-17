// It's a vehicle card ui
const Vehicle_card = ({ vehicle }) => {
    const { category, title, price } = vehicle;
    return (
        <div className="border border-green-500 p-3 bg-green-50 rounded-lg">
            <p>{category}</p>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    );
};

export default  Vehicle_card;