import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import ErrorPage from "../Pages/Error/ErrorPage"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Details from "../Pages/Details/Details"
import PrivateRoute from "../Private/PrivateRoute"

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/services.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/details/:id",
                loader:() => fetch('../../public/services.json'),
                element:<PrivateRoute><Details></Details></PrivateRoute>
                
            }
        ]
    }
])


export default router