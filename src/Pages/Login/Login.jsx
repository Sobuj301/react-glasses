

const Login = () => {

    const handleSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('regi',email,password)
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
                    </form>
       </div>
    );
};

export default Login;