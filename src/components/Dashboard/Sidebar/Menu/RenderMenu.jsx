import { BsFingerprint } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { useState } from 'react';
import MenuItem from './MenuItem';
import { toast } from 'react-toastify';
import useAuth from '../../../../hooks/useAuth';
import useRole from '../../../../hooks/useRole';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import HostRequestModal from '../../Modal/HostRequestModal';

const RenderMenu = () => {
    const { user } = useAuth();
    const [role] = useRole();
    const axiosSecure = useAxiosSecure(); // ✅ use secure axios instance

    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

    // ✅ Handler for "Become a Host" button inside modal
    const modalHandler = async () => {
        try {
            const currentUser = {
                email: user?.email,
                role: 'render',
                status: 'Requested',
            };
            const { data } = await axiosSecure.put(`/user`, currentUser);
            console.log('User request:', data);

            if (data.modifiedCount > 0) {
                toast.success('Success! Please wait for admin approval.');
            } else {
                toast.success('Please!, Wait for admin approval 👊');
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            closeModal();
        }
    };

    return (
        <>
            <MenuItem icon={BsFingerprint} label="My Bookings" address="my-bookings" />

            {role === 'render' && (
                <div
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform text-gray-600 hover:bg-gray-300 hover:text-gray-700 cursor-pointer"
                >
                    <GrUserAdmin className="w-5 h-5" />
                    <span className="mx-4 font-medium">Become A Host</span>
                </div>
            )}

            {/* ✅ Modal Component */}
            <HostRequestModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                modalHandler={modalHandler}
            />
        </>
    );
};

export default RenderMenu;
