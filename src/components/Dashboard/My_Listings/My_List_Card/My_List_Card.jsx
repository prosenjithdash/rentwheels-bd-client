import React from 'react';
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const My_List_Card = ({ vehicle }) => {
    const { title, location, price, from, to, image } = vehicle;

    return (
        <div className="grid grid-cols-7 items-center bg-gray-50 rounded-lg py-3 px-2 hover:bg-gray-100 transition-colors duration-200">
            {/* Title with image */}
            <div className="flex items-center gap-3">
                <img
                    src={image}
                    alt={title}
                    className="w-14 h-14 object-cover rounded-md"
                />
                <p className="font-medium text-gray-800">{title}</p>
            </div>

            <p className="text-gray-600 text-center">{location}</p>
            <p className="text-gray-800 font-semibold text-center">${price}</p>
            <p className="text-gray-600 text-center">{from}</p>
            <p className="text-gray-600 text-center">{to}</p>

            {/* Update */}
            <div className="flex justify-center">
                <button className="text-blue-600 hover:text-blue-800 transition">
                    <Pencil size={18} />
                </button>
            </div>

            {/* Delete */}
            <div className="flex justify-center">
                <button className="text-red-600 hover:text-red-800 transition">
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
};

export default My_List_Card;
