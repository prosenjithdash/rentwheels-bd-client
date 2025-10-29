import React, { useState } from 'react';
import { Pencil, Trash2 } from "lucide-react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

// ✅ helper to shorten title to first 3 words
const shortenTitle = (title = "", wordLimit = 3) => {
    const words = title.trim().split(/\s+/);
    if (words.length <= wordLimit) return title;
    return words.slice(0, wordLimit).join(" ") + "...";
};

const My_List_Card = ({ vehicle, handleDelete }) => {
    // const { title, location, price, from, to, image } = vehicle;
    let [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="grid grid-cols-7 items-center bg-white shadow-sm rounded-xl px-4 py-3 hover:shadow-md transition-all duration-200"
        >
            {/* 🖼️ Title + Image */}
            <div className="flex items-center gap-4">
                <img
                    src={vehicle.imageURL}
                    alt={vehicle.title}
                    className="w-12 h-10 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                />
                <h3
                    className="font-medium text-gray-800 truncate"
                    title={vehicle.title}
                >
                    {shortenTitle(vehicle.title || "")}
                </h3>
            </div>

            {/* Location */}
            <p className="text-gray-600 text-sm text-center">{vehicle.location}</p>

            {/* Price */}
            <p className="text-gray-600 text-sm text-center">
                ৳{vehicle.price} <span className="text-gray-400">/ day</span>
            </p>

            {/* From */}
            <p className="text-gray-600 text-sm text-center">
                {new Date(vehicle.from).toLocaleString() || "—"}
            </p>

            {/* To */}
            <p className="text-gray-600 text-sm text-center">
                {new Date(vehicle.to).toLocaleString() || "—"}
            </p>

            {/* Edit Button */}
            <div className="flex justify-center">
                <button className="bg-green-50 hover:bg-green-100 p-2 rounded-xl transition">
                    <Pencil className="text-green-600 w-4 h-4" />
                </button>
            </div>

            {/* Delete Button */}
            <div className="flex justify-center">
                <button onClick={() => setIsOpen(true)} className="bg-red-50 hover:bg-red-100 p-2 rounded-xl transition">
                    <Trash2 className="text-red-600 w-4 h-4" />
                </button>
                {/* Delete Modal */}
                <div>
                  
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                                <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                                <Description>This will permanently deactivate your account</Description>
                                <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                                <div className="flex gap-4">
                                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                </div>

            </div>
        </div>
    );
};

export default My_List_Card;
