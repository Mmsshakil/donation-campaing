import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
// import Statistics from "../Pages/Statistics/Statistics";
import Phone from "../Pages/Phone/Phone";

import Statistics from "../Pages/Statistics/Statictics";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("./phones.json")
            },
            {
                path: '/favourites',
                element: <Favourites></Favourites>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/phones/:id',
                element: <Phone></Phone>,
                loader: ()=> fetch("./phones.json")
            }
        ]
        
    }
])

export default myCreatedRoute;