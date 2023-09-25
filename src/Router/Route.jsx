import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/favourites',
                element: <Favourites></Favourites>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
        
    }
])

export default myCreatedRoute;