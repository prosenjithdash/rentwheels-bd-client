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
        { id: "facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
        { id: "twitter", icon: <FaTwitter />, link: "https://twitter.com" },
        { id: "instagram", icon: <FaInstagram />, link: "https://instagram.com" },
        { id: "linkedin", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    ];

    return (
        <footer className="bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#020617] text-gray-400">

            {/* Top Orange Strip */}
            <div className="h-10 bg-white" />
            <div className="h-16 bg-[#FF7A18]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-[#FF7A18] flex items-center justify-center">
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
                                RENT<span className="text-[#FF7A18]">WHEELS</span>_BD
                            </h2>
                        </div>

                        <p className="text-sm leading-relaxed max-w-xs text-gray-400">
                            Premium vehicle rental service for the modern traveler.
                            Experience the future of mobility with our tech-forward fleet.
                        </p>

                        {/* Social */}
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center
                                    hover:bg-[#FF7A18] transition-all duration-300"
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
                        <h3 className="text-white font-bold mb-5 tracking-wide">
                            QUICK LINKS
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {["Home", "Vehicles", "Features", "About", "Contact"].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="hover:text-[#FF7A18] transition"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vehicles */}
                    <div>
                        <h3 className="text-white font-bold mb-5 tracking-wide">
                            VEHICLES
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {["Bike", "Scoter", "Car", "Bus", "Truck", "Jeep"].map((v, i) => (
                                <li
                                    key={i}
                                    className="hover:text-[#FF7A18] transition cursor-pointer"
                                >
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold mb-5 tracking-wide">
                            SUPPORT
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {["Help Center", "Terms of Service", "Privacy Policy", "Cookie Policy"].map((s, i) => (
                                <li
                                    key={i}
                                    className="hover:text-[#FF7A18] transition cursor-pointer"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-[#1F2937] mt-16 pt-6 flex flex-col md:flex-row
                items-center justify-between gap-4 text-sm">

                    <p className="text-gray-500">
                        © 2024 RentWheels_BD. All rights reserved.
                    </p>

                    <p className="text-gray-500">
                        Designed with <span className="text-[#FF7A18]">♥</span> energy.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
