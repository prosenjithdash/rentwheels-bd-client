import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { useState, Fragment } from 'react';
import { Pencil, Trash2 } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";


const BookingDataRow = ({ booking, handleDelete, refetch }) => {

    const [isOpen, setIsOpen] = useState(false);
    
        const closeModal = () => setIsOpen(false);
        const openModal = () => setIsOpen(true);
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={booking?.image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>{booking?.title}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={booking?.render?.image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                            {booking?.render?.name}
                        </p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${booking?.price}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {format(new Date(booking?.from), 'P')}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {format(new Date(booking?.to), 'P')}
                </p>
            </td>
            <td onClick={openModal} className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Cancel</span>
                </span>
            </td>
            <div className="flex justify-center">
                {/* <button
                    onClick={openModal}
                    className="bg-red-50 hover:bg-red-100 p-2 rounded-xl transition"
                >
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                            <span
                                aria-hidden='true'
                                className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                            ></span>
                            <span className='relative'>Cancel</span>
                        </span>
                    </td>
                </button> */}

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
                                        Delete Booking Vehicle
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-600">
                                            Are you sure you want to delete{" "}
                                            <span className="font-medium text-gray-800">
                                                {booking?.title}
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
                                                handleDelete(booking?._id);
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
        </tr>
    )
}

// BookingDataRow.propTypes = {
//     booking: PropTypes.object,
//     refetch: PropTypes.func,
// }

export default BookingDataRow