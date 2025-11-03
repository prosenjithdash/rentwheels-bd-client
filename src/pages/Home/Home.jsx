import Categories from "../../components/Categories/Categories";
import Vehicles from "../../components/Home/Vehicles";

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
            <Vehicles/>
        </div>
    );
};

export default Home;