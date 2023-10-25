import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;