
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
        try {
            const currentUser = {
                email: user?.email,
                role: 'render',
                status: 'Requested',
            };

            const { data } = await axiosSecure.put(`/user`, currentUser);

            if (data.modifiedCount > 0) {
                toast.success('Success! Please wait for admin approval.');
            } else {
                toast.success('Please wait for admin approval.');
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            closeModal();
        }
    };

    const navLinks = (
        <>
            <li><NavLink className="text-white font-extrabold hover:text-orange-500" to="/">HOME</NavLink></li>
            <li><NavLink className="text-white font-extrabold hover:text-orange-500" to="/vehiclesPage">VEHICLES</NavLink></li>
            <li><NavLink className="text-white font-extrabold hover:text-orange-500" to="/about">ABOUT</NavLink></li>
            <li><NavLink className="text-white font-extrabold hover:text-orange-500" to="/contact">CONTACT</NavLink></li>
        </>
    );

    return (
        /* 🔵 FULL WIDTH BACKGROUND */
        <div className=" w-full bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] ">

            {/* 🔒 CONTENT WIDTH LIMITED */}
            <div className="navbar max-w-7xl mx-auto px-4 lg:px-6 relative z-50">

                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link to="/">
                        <div className="flex items-center gap-2">
                            <img
                                className="w-[40px] h-[40px]"
                                src="https://m.media-amazon.com/images/I/71cAl0LbHgL._AC_SL1500_.jpg"
                                alt="logo"
                            />
                            <p className="text-[18px] lg:text-[23px] font-extrabold">
                                <span className="text-white">RENTWHEELS</span>
                                <span className="text-orange-500">_BD</span>
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-2">

                    {/* Become Host */}
                    <button
                        disabled={!user}
                        onClick={openModal}
                        className="hidden md:block disabled:cursor-not-allowed cursor-pointer
                        hover:bg-neutral-100 p-3 rounded-full font-extrabold text-white hover:text-orange-500 text-[12px]"
                    >
                        Host your home
                    </button>

                    {/* Modal */}
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

                    {/* Profile */}
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
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
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li onClick={logOut}><a>Sign Out</a></li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink
                            to="/logIn"
                            className="bg-orange-500 text-white font-extrabold rounded-md px-7 py-2"
                        >
                            LOGIN
                        </NavLink>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-b border-gray-800">
            </div>
        </div>
    );
};

export default Navbar;
