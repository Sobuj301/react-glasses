import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-center mt-10">
                404 page not found
            </h2>
            <Link to='/'><button className="btn block mx-auto mt-10">Go back home page</button></Link>
        </div>
    );
};

export default ErrorPage;