import { createPortal } from "react-dom";

/* eslint-disable react/prop-types */
const HostRequestModal = ({ isOpen, closeModal, modalHandler }) => {
    if (!isOpen) return null;

    return createPortal(
        <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center mb-4">
                    Become a Host on RentWheels_BD
                </h3>
                <p className="text-gray-600 text-center">
                    Are you sure you want to become a host and start renting your vehicles?
                </p>

                <div className="modal-action flex justify-center gap-4 mt-6">
                    <button
                        onClick={modalHandler}
                        className="btn bg-green-500 text-white hover:bg-green-600"
                    >
                        Yes, I want to host
                    </button>
                    <button
                        onClick={closeModal}
                        className="btn bg-gray-300 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>,
        document.body // 👈 render directly to <body> so it's outside sidebar
    );
};

export default HostRequestModal;
