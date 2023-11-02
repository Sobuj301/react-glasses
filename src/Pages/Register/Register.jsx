import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import swal from 'sweetalert';




const Register = () => {
    const {createUser} = useContext(AuthContext)

   

    const handleSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)


        if(password.length > 6){
         return swal('password must be at least six character')
        }
       


        createUser(email,password)
        .then(result =>{
            const user = result.user;
            swal("register successful", "...");
        })
        .catch(error => {
           console.log(error.message)
 
        })


    }
    return (
       <div className="max-w-5xl mx-auto mt-10">
           <h2 className="text-3xl font-bold">Please Register!!</h2>
          <form onSubmit={handleSubmit} className="card-body w-2/4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email </span>
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
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <h2>already have register? please <Link className="text-blue-600 underline " to="/login">Login</Link></h2>
                    </form>

                   
       </div>
    );
};

export default Register;