import { Link, NavLink } from "react-router-dom";
import logo from "../assets/10ea66_b22176c88fec4c37b695198d1119becb~mv2.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar mx-auto w-11/12 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/campaigns">Campaigns</NavLink>
            </li>
            <li>
              <NavLink to="/help">How to Help</NavLink>
            </li>
            <li className="m-4 font-semibold ">
              {user && user?.email ? (
                <NavLink to="/dashboard">Dashboard</NavLink>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img className="w-[100px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="  menu-horizontal px-1">
          <li className="m-4 font-semibold ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="m-4 font-semibold ">
            <NavLink to="/campaigns">Campaigns</NavLink>
          </li>
          <li className="m-4 font-semibold ">
            <NavLink to="/help">How to Help</NavLink>
          </li>
          <li className="m-4 font-semibold ">
            {user && user?.email ? (
              <NavLink to="/dashboard">Dashboard</NavLink>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && user.email ? (
          <>
            <p className="mr-3">{user.displayName}</p>
            <img
              className=" h-[50px] w-[50px] rounded-full object-cover mr-5 ring-2 ring-black"
              src={user.photoURL}
              alt="profile"
            />
          </>
        ) : (
          ""
        )}
        {user && user.email ? (
          <Link
            to="/login"
            onClick={logOut}
            className="btn bg-[#00344F] hover:text-black  text-white font-bold"
          >
            Log Out
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#00344F] hover:text-black   text-white font-bold hover:bg-black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
