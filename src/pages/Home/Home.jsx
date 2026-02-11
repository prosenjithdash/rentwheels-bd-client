import Categories from "../../components/Categories/Categories";
import AboutPreview from "../../components/Home/AboutPreview";
import Vehicles from "../../components/Home/Vehicles";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";

// It's a Home page, Have to here many components .
const Home = () => {
    return (
        <div className="mt-[50px]">
            {/* Should be add here helmet for dynamic title name. */}
            {/* 
            <Helmet>
                <title>RentWheels-BD</title>
            </Helmet>
             */}

            {/* 
            Now to add category sections
            <<Categories/>>
            
            */}
            <Categories/>

            {/* 
            Vehicles sections
            
            <Vehicles/>
             */}
            <Vehicles />
            <Features/>
            <AboutPreview/>
            <Contact/>
            
        </div>
    );
};

export default Home;