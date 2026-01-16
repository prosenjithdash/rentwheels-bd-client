import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { format, differenceInCalendarDays } from "date-fns";
import { Fragment } from "react";
import { CheckCircle, Import } from "lucide-react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../../Form/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


const BookingModal = ({ closeModal, isOpen, bookingInfo,refetch }) => {
    const totalDays = Math.max(
        
        1,
        differenceInCalendarDays(
            new Date(bookingInfo.to),
            new Date(bookingInfo.from)
        ) + 1
    );

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                {/* Background Overlay */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
                </TransitionChild>

                {/* Centered Modal Container */}
                <div className="fixed inset-0 overflow-y-auto flex items-center justify-center px-4 py-6 sm:px-6">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-5 sm:p-6 text-left align-middle shadow-2xl transition-all">
                            {/* Header */}
                            <DialogTitle
                                as="h3"
                                className="text-xl sm:text-2xl font-semibold text-center leading-6 text-gray-900"
                            >
                                Confirm Your Booking
                            </DialogTitle>
                            <p className="text-sm text-gray-500 text-center mt-1">
                                Please review your booking details before confirming.
                            </p>

                            {/* Booking Details */}
                            <div className="mt-6 space-y-3">
                                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-gray-500">Vehicle</p>
                                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                        {bookingInfo.title}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-gray-500">Location</p>
                                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                        {bookingInfo.location}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-gray-500">Renter</p>
                                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                        {bookingInfo.render?.name}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                        <p className="text-xs sm:text-sm text-gray-500">From</p>
                                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                            {format(new Date(bookingInfo.from), "PPP")}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                        <p className="text-xs sm:text-sm text-gray-500">To</p>
                                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                            {format(new Date(bookingInfo.to), "PPP")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-3 border-t text-center sm:text-left">
                                    <p className="font-medium text-gray-700 text-sm sm:text-base">
                                        Total Price ({totalDays} {totalDays > 1 ? "days" : "day"})
                                    </p>
                                    <p className="text-orange-500 font-semibold text-lg sm:text-xl mt-1 sm:mt-0">
                                        ৳{bookingInfo.price}
                                    </p>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="mt-8">
                                <p className="text-base font-medium text-gray-800 mb-2 text-center sm:text-left">
                                    Payment Information
                                </p>
                                {/* ADD PAYMENT SYSTEM */}

                                <Elements stripe={stripePromise}>

                                    {/* Checkout form */}
                                    <CheckoutForm
                                        closeModal={closeModal} bookingInfo={bookingInfo}
                                        refetch={refetch}
                                    />

                                </Elements>

                                {/* Card number */}
                                {/* <div>
                                    <label className="text-xs text-gray-500">Card Number</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="1234 5678 9012 3456"
                                        maxLength={23}
                                        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div> */}

                                {/* MM/YY + CVC */}
                                {/* <div className="mt-3">
                                    <label className="text-xs text-gray-500">
                                        Expiry (MM/YY) & CVC
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="12/25 123"
                                        maxLength={10}
                                        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div> */}
                            </div>

                            

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
};

export default BookingModal;
