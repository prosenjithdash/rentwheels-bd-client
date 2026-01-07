import React, { useState, Fragment } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

// ✅ helper to shorten title
const shortenTitle = (title = "", wordLimit = 4) => {
    const words = title.trim().split(/\s+/);
    if (words.length <= wordLimit) return title;
    return words.slice(0, wordLimit).join(" ") + "...";
};

const My_List_Card = ({ vehicle, handleDelete  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <div className="grid grid-cols-7 items-center bg-white shadow-sm rounded-xl px-4 py-3 hover:shadow-md transition-all duration-200">
            {/* 🖼️ Title + Image */}
            <div className="flex items-center gap-4">
                <img
                    src={vehicle.imageURL}
                    alt={vehicle.title}
                    className="w-12 h-10 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                />
                <h3 className="font-medium text-gray-800 truncate" title={vehicle.title}>
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
                <button
                    onClick={openModal}
                    className="bg-red-50 hover:bg-red-100 p-2 rounded-xl transition"
                >
                    <Trash2 className="text-red-600 w-4 h-4" />
                </button>

                {/* 🧱 Delete Confirmation Modal */}
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        {/* Overlay */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/30" />
                        </Transition.Child>

                        {/* Modal Content */}
                        <div className="fixed inset-0 flex items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl p-6 text-left shadow-xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-semibold text-gray-900"
                                    >
                                        Delete Vehicle
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-600">
                                            Are you sure you want to delete{" "}
                                            <span className="font-medium text-gray-800">
                                                {vehicle.title}
                                            </span>
                                            ? This action cannot be undone.
                                        </p>
                                    </div>

                                    <div className="mt-4 flex justify-end gap-3">
                                        <button
                                            onClick={closeModal}
                                            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleDelete(vehicle._id);
                                                closeModal();
                                            }}
                                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
};

export default My_List_Card;
