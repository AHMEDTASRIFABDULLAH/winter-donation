import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import NavBar from "../Pages/NavBar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <nav className=" bg-gray-50 rounded-sm shadow-lg sticky top-0 z-50  ">
        <NavBar></NavBar>
      </nav>
      <div className="w-11/12 mx-auto flex justify-center items-center">
        <div className="bg-gray-100 p-6 mt-6 shadow-xl sm:w-[500px] rounded-lg ">
          <h1 className="font-bold text-2xl text-center p-4">
            <span className="text-rose-600">Welcome</span> {user?.displayName}
          </h1>

          <div className="flex justify-center items-center">
            <img
              className="rounded-xl object-cover"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <h1 className="font-semibold text-gray-500 text-center p-4">
            {user?.email}
          </h1>
          <Link to="/editprofile" className="flex justify-center items-center">
            <button className="btn bg-[#00344F] text-white hover:text-black">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
