import { useLoaderData } from "react-router-dom";
import Services from "../../Components/Services/Services";

const Home = () => {
    const services = useLoaderData()
    
    return (
        <div>
            <h2 className="text-center text-5xl font-bold">Our Services</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-10">
           {
            services?.map(service => <Services
            key={service.id}
            service={service}
            ></Services>)
           }
        </div>
        </div>
    );
};

export default Home;