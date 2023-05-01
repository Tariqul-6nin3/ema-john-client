import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { myContext } from "../../Providers/Providers";

const Register = () => {
  const { createUser } = useContext(myContext);
  const [error, setError] = useState("");
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(email, password, confirmPassword);
    setError("");
    if (password != confirmPassword) {
      setError("Your password does not matched");
    }
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => setError(error.message));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col flex-row-reverse">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign Up Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            onSubmit={handleRegister}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p>
                <small>Already have an account?</small>
                <Link className="text-red-500 ml-2" to="/login">
                  Login?
                </Link>
              </p>
              <p>{error}</p>
              <button className="btn btn-outline mt-6">
                <FaGoogle className="mr-3 fa-2x" />
                Continue with Google
              </button>
              <button className="btn btn-outline mt-6">
                <FaGithub className="mr-3 fa-2x" />
                Continue with Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
