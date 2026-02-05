// Footer page
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    const socialLinks = [
        {
            id: "facebook",
            icon: <FaFacebookF />,
            link: "https://facebook.com",
        },
        {
            id: "twitter",
            icon: <FaTwitter />,
            link: "https://twitter.com",
        },
        {
            id: "instagram",
            icon: <FaInstagram />,
            link: "https://instagram.com",
        },
        {
            id: "linkedin",
            icon: <FaLinkedinIn />,
            link: "https://linkedin.com",
        },
    ];

    return (
        <footer className="bg-gradient-to-b from-[#020617] to-[#02040f] text-gray-400">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5" />
                                    <path d="M5 16h14" />
                                </svg>
                            </div>
                            <h2 className="text-white text-xl font-semibold">
                                RentWheels_<span className="text-blue-500">BD</span>
                            </h2>
                        </div>

                        <p className="text-sm leading-relaxed max-w-xs">
                            Premium vehicle rental service for the modern traveler. Experience
                            the future of mobility with our tech-forward fleet.
                        </p>

                   
                        {/* Social */}
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-[#0b1220] flex items-center justify-center
                 hover:bg-blue-600 transition cursor-pointer"
                                >
                                    <span className="text-white text-lg">
                                        {item.icon}
                                    </span>
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                            <Link
                                to="/"
                                className="hover:text-white transition cursor-pointer"
                            >
                                Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/vehicles"
                                    className="hover:text-white transition cursor-pointer"
                                >
                                    Vehicles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/features"
                                    className="hover:text-white transition cursor-pointer"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-white transition cursor-pointer"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-white transition cursor-pointer"
                                >
                                    Contact
                                </Link>
                            </li>
                            
                        </ul>
                    </div>

                    {/* Vehicles */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">Vehicles</h3>
                        <ul className="space-y-3 text-sm">

                            <li className="hover:text-white transition cursor-pointer">Bike</li>
                            <li className="hover:text-white transition cursor-pointer">Scoter</li>
                            <li className="hover:text-white transition cursor-pointer">Car</li>
                            <li className="hover:text-white transition cursor-pointer">Bus</li>
                            <li className="hover:text-white transition cursor-pointer">Truck</li>
                            <li className="hover:text-white transition cursor-pointer">Jeep</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">Support</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition cursor-pointer">Help Center</li>
                            <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
                            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white transition cursor-pointer">Cookie Policy</li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-[#0f172a] mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

                    <p className="text-gray-500">
                        © 2024 RentWheels_BD. All rights reserved.
                    </p>

                    <p className="text-gray-500">
                        Designed with <span className="text-blue-500">♥</span> for the future.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
