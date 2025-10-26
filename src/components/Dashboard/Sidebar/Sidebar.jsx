import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const Sidebar = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex min-h-screen">
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-50 bg-green-500 text-white px-3 py-2 rounded-md"
            >
                {isOpen ? "|->" : "|||"}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 h-screen w-64 bg-gray-50 border-r border-gray-200 flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
            >
                {/* Top Section */}
                <div>
                    <div className="p-6 mt-10 md:mt-0">
                        <NavLink to="/">
                            <h1 className="text-xl leading-tight font-extrabold bg-green-100 text-green-500 hover:bg-white hover:text-green-500 p-5 rounded-lg transition-all duration-200">
                                RentWheels_BD
                            </h1>
                        </NavLink>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-4 space-y-1">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `block px-6 py-2 rounded-r-full transition-all duration-200 ${isActive
                                    ? "bg-green-50 text-green-600 font-semibold"
                                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/my-bikes"
                            className={({ isActive }) =>
                                `block px-6 py-2 rounded-r-full transition-all duration-200 ${isActive
                                    ? "bg-green-50 text-green-600 font-semibold"
                                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Statistics
                        </NavLink>

                        <NavLink
                            to="/add_vehicle"
                            className={({ isActive }) =>
                                `block px-6 py-2 rounded-r-full transition-all duration-200 ${isActive
                                    ? "bg-green-50 text-green-600 font-semibold"
                                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Add Vehicle
                        </NavLink>

                        <NavLink
                            to="/my_listings"
                            className={({ isActive }) =>
                                `block px-6 py-2 rounded-r-full transition-all duration-200 ${isActive
                                    ? "bg-green-50 text-green-600 font-semibold"
                                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            My Listings
                        </NavLink>

                        <NavLink
                            to="/payouts"
                            className={({ isActive }) =>
                                `block px-6 py-2 rounded-r-full transition-all duration-200 ${isActive
                                    ? "bg-green-50 text-green-600 font-semibold"
                                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Payouts
                        </NavLink>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="mb-6 space-y-1">
                    <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                            `block px-6 py-2 rounded-r-full transition-all duration-200 ${isActive
                                ? "bg-green-50 text-green-600 font-semibold"
                                : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Profile
                    </NavLink>

                    {/* Logout Button */}
                    <button
                        onClick={() => {
                            logOut();
                            navigate("/");
                            setIsOpen(false);
                        }}
                        className="w-full text-left px-6 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-r-full transition-all duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
