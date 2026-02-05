import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">

            {/* Navbar */}
            <Navbar />

            {/* Outlet - main content */}
            <main className="flex-1 max-w-full mx-auto w-full ">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Main;
