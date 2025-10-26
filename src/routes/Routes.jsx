import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import VehiclesDetails from "../pages/VehiclesDetails/VehiclesDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MyListings from "../pages/Dashboard/Host/MyListings";
import AddVehicle from "../pages/Dashboard/Host/AddVehicle";

export const router = createBrowserRouter([

    // Main layout
    {
        path: "/",
        element: <Main />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/vehicle/:id',
                element: <PrivateRoutes><VehiclesDetails /></PrivateRoutes>
            }

        ]
    },
    // Look like use for Common use also do not need Navbar and Footer.
    {
        path: '/login',
        element:<Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }

    // Dashboard Layout
    ,
    {
        path: '/dashboard',
        element: <DashboardLayout/>,

        children: [
            {
                index: true,
                element:<Statistics/>
            },
            {
                path: 'add_vehicle',
                element:<AddVehicle/>
            },
            {
                path: 'my_listings',
                element: <MyListings/>
            }
        ]
    }
]);