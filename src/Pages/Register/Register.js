import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const handlerRegister = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-50  mx-auto my-5">
      <h2 className="text-center">Register</h2>
      <form>
        <div className="form-group my-2">
          <label className="mb-2">Full name</label>
          <input
            type="text"
            className="form-control py-2"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group py-2">
          <label>Email</label>
          <input
            type="email"
            className="form-control "
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group my-2">
          <label className="mb-2">Password</label>
          <input
            type="password"
            className="form-control py-2"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          onClick={handlerRegister}
          type="submit"
          className="btn btn-primary w-25 d-block mx-auto mt-3 mb-2"
        >
          Register
        </button>
        <p className=" text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            onClick={navigateLogin}
            className="text-decoration-none"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
