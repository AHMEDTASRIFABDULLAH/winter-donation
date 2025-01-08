import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import NavBar from "../Pages/NavBar";

const Login = () => {
  const { userLogin, setUser, handelGoogleLogin, setInputValue, user, loding } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const resetPass = () => {
    const email = emailRef.current?.value;
    setInputValue(email);
  };

  const [error, setError] = useState("");
  const handelGoogle = () => {
    handelGoogleLogin().then(() => {
      toast.success("Google Login");
      navigate("/");
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(" Login up success ");
        navigate("/campaigns");
      })
      .catch((error) => {
        setError("incorrect password or email", error);
      });
  };

  if (loding) {
    return (
      <div className="flex justify-center mt-6">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user && user.email) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <>
      <nav className=" bg-gray-50 rounded-sm shadow-lg sticky top-0 z-50  ">
        <NavBar></NavBar>
      </nav>
      <div className="w-11/12 mx-auto mt-6 flex justify-center items-center">
        <div className=" w-full sm:w-[500px] bg-gray-300 pt-5 rounded-xl">
          <h1 className="text-center font-semibold text-2xl">Login</h1>
          <form onSubmit={handelSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                ref={emailRef}
                type="email"
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
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <NavLink
                  onClick={resetPass}
                  to="/forgot"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </NavLink>
              </label>
            </div>
            <button onClick={handelGoogle} className="btn ">
              {" "}
              <FcGoogle className="text-xl" /> Login With Google
            </button>
            <p className="text-red-500">{error}</p>
            <div className="form-control mt-6">
              {/* {user && user?.email ? (
              <Navigate to="/" />
            ) : (
              <button className="btn btn-primary">Login</button>
            )} */}
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              dont have an account Please
              <Link to="/signup" className="underline text-blue-700">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
