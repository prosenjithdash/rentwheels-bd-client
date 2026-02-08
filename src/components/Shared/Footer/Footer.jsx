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
        <footer className="bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] text-gray-400">

            {/* Top Orange Strip */}
            <div className="h-10 bg-white" />
            <div className="h-16 bg-[#FF7A18]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

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
                            <h2 className="text-white text-2xl font-extrabold">
                                RENT<span className="text-[#FF7A18]">WHEELS</span>_BD
                            </h2>
                        </div>

                        <p className="text-md leading-relaxed max-w-xs text-gray-400">
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
                        <h3 className="text-white text-lg font-bold mb-5 tracking-wide">
                            QUICK LINKS
                        </h3>
                        <ul className="space-y-3 text-md">
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
                    {/* <div>
                        <h3 className="text-white text-lg font-bold mb-5 tracking-wide">
                            VEHICLES
                        </h3>
                        <ul className="space-y-3 text-md">
                            {["Bike", "Scoter", "Car", "Bus", "Truck", "Jeep"].map((v, i) => (
                                <li
                                    key={i}
                                    className="hover:text-[#FF7A18] transition cursor-pointer"
                                >
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Support */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-5 tracking-wide">
                            SUPPORT
                        </h3>
                        <ul className="space-y-3 text-md">
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
                    {/* Support */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-5 tracking-wide">
                            NEWSLETTER
                        </h3>
                        <p className="text-md space-y-3">Subscribe for latest offers and updates.</p>
    
                        <button className="my-4 button bg-gray-800 rounded-lg pl-4 pr-20 py-2 "> Your email address</button>
                        <button className="button bg-orange-500 rounded-lg text-center px-20 py-2 text-white font-bold"> Subscribe</button>
                    </div>
                    {/* //mb-4 pl-4 pr-32 py-2 button bg-orange-500 text-white rounded-lg  text-center font-bold */}
                </div>

                {/* Bottom Divider */}
                <div className="border-t  border-[#1F2937] mt-16 pt-8  text-center gap-4 text-lg">

                    <p className="text-gray-500">
                        © 2024 RentWheels_BD. All rights reserved.
                    </p>

                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
