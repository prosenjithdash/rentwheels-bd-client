// src/components/Modal/DeleteModal.jsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const DeleteUserModal = ({ isOpen, setIsOpen, onConfirm, user }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium text-center leading-6 text-gray-900"
                                >
                                    Confirm Delete
                                </Dialog.Title>
                                <div className="mt-4 text-center text-gray-700">
                                    Are you sure you want to delete{" "}
                                    <span className="font-semibold">{user?.email}</span>?
                                </div>

                                <div className="mt-6 flex justify-center gap-4">
                                    <button
                                        className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-md font-medium"
                                        onClick={onConfirm}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default DeleteUserModal;
