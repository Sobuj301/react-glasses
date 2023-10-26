import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto shadow-2xl p-8">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;