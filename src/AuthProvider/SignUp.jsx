import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { IoEyeSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import NavBar from "../Pages/NavBar";
const SignUp = () => {
  const { usersignUp, userProfile, logOut, user, loding } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const userPhoto = form.get("photo");
    const passwordRegex = /^(?=.*[A-Z]).*$/;
    if (!passwordRegex.test(password)) {
      setError("Password must: Uppercase");
      return;
    }
    const lowercase = /^(?=.*[a-z]).*$/;
    if (!lowercase.test(password)) {
      setError("Password must: lowercase");
      return;
    }
    if (password.length < 6) {
      setError("Password must be  6 characters");
      return;
    }

    e.target.reset();

    usersignUp(email, password)
      .then(() => {
        logOut();
        navigate("/login");
        toast.success(" Success Sign Up");
        userProfile(name, userPhoto)
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
        console.error("Sign Up Error:", error);
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
          <h1 className="text-center font-semibold text-2xl">Sign Up</h1>
          <form onSubmit={handelSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <IoEyeSharp
                onClick={() => setEye(!eye)}
                className="absolute top-[52px] right-5  text-xl"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={eye ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="text-red-500">{error}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>

            <p>
              have an account Please
              <Link to="/login" className="underline text-blue-700">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
