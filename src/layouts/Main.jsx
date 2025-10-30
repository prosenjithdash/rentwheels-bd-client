import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

// It's a Main layout 
const Main = () => {
    return (
        <div>

            {/* Navbar route */}
            <Navbar/>

            {/* Outlet use for Showing all children routes. */}
            <div className="min-h-[calc(100vh-68px)] max-w-[1250px] mx-auto">
                <Outlet />
            </div>

            {/* Footer route */}
            <Footer/>

        </div>
    );
};

export default Main;