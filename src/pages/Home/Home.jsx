import Categories from "../../components/Categories/Categories";

// It's a Home page, Have to here many components .
const Home = () => {
    return (
        <div>
            {/* Should be add here helmet for dynamic title name. */}
            {/* 
            <Helmet>
                <title>RentWheels-BD</title>
            </Helmet>
             */}
            <h1>Welcome to RentWheels_BD Home Page.</h1>

            {/* 
            Now to add category sections
            <<Categories/>>
            
            */}
            <Categories/>

            {/* 
            Vehicles sections
            
            <Vehicles/>
             */}
        </div>
    );
};

export default Home;