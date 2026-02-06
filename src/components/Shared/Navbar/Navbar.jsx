import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleBecomeHost = async () => {
        console.log("✅ User wants to become a host:", user?.email);
        // 👉 Here you can call your backend API to update role
        try {
            const currentUser = {
                email: user?.email,
                role: 'render',
                status: 'Requested',
            }
            const { data } = await axiosSecure.put(`/user`, currentUser);

            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success('Success ! Please wait for admin approval.')
            } else {
                toast.success('Please wait for admin approval.')

            }

        } catch (error) {     
            console.log(error.message)
            toast.error(error.message)
        } finally {
            closeModal();
        }
       
    };

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
        </>
    );

    return (
        <div className="navbar mt-[50px] max-w-[1280px] mx-auto z-50 relative bg-blue-950 text-white rounded-md">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>

                <Link to="/">
                    <div className="flex items-center">
                        <img
                            className="w-[40px] h-[40px]"
                            src="https://m.media-amazon.com/images/I/71cAl0LbHgL._AC_SL1500_.jpg"
                            alt=""
                        />
                        <p className="btn btn-ghost lg:text-[23px] text-[12px] font-extrabold">
                            <span className="text-white">RentWheels</span>
                            <span className="text-green-500"> _BD</span>
                        </p>
                    </div>
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex z-10">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {/* ✅ Become A Host button */}
                <div className="hidden md:block">
                    <button
                        disabled={!user}
                        onClick={openModal}
                        className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 p-3 rounded-xl"
                    >
                        Host your home
                    </button>
                </div>

                {/* ✅ Modal */}
                {isModalOpen && (
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
                                    onClick={handleBecomeHost}
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
                    </dialog>
                )}

                {/* ✅ Profile Dropdown */}
                <div>
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        className="rounded-full "
                                        referrerPolicy="no-referrer"
                                        src={user?.photoURL || ""}
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <span className="justify-between bg-black text-white">
                                        {user.displayName}
                                    </span>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <div onClick={logOut}>
                                    <li><a>Sign Out</a></li>
                                </div>
                            </ul>
                        </div>
                    ) : (
                        <div className="bg-white text-blue-950 rounded-md px-7 py-2">
                            <li><NavLink to="/logIn">LogIn</NavLink></li>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;



