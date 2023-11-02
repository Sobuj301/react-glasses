import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import toast from "react-hot-toast";


const Login = () => {

    const navigate = useNavigate()


    const {login,googleLogin} = useContext(AuthContext)
    const location =useLocation()
    console.log(location)
    const Navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email,password)
        .then(result =>{
            const user = result.user;
            swal("Login successful");
            Navigate(location?.state ?  location.state : '/')

            console.log(user)
        })
        .catch(error =>{
            console.log(error.message)
        })   
    }
       const handleGoogleLogin = (media) =>{
        media()
        .then(result => {
            toast.success("login successful")
            navigate('/')
        })
        .catch()
       }
    return (
        <div className="max-w-5xl mx-auto mt-10">
           <h2 className="text-3xl font-bold">Please Login!!</h2>
          <form onSubmit={handleSubmit} className="card-body w-2/4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <h2>New here? please <Link className="text-blue-500 underline" to="/register">Register</Link></h2>
                    </form>
                    <button onClick={()=>handleGoogleLogin(googleLogin)} className="btn ml-10">Google</button>
       </div>
    );
};

export default Login;