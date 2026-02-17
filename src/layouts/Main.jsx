import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* Outlet - main content */}
            <main className=" ">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Main;
