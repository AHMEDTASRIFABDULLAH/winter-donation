import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import NavBar from "../Pages/NavBar";
const EditProfile = () => {
  const navigate = useNavigate();
  const { userProfile } = useContext(AuthContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    userProfile(name, photo)
      .then(() => {
        toast.success("Profile Updated");
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <nav className=" bg-gray-50 rounded-sm shadow-lg sticky top-0 z-50  ">
        <NavBar></NavBar>
      </nav>
      <div className="flex justify-center items-center my-6 w-11/12 mx-auto">
        <div className=" w-full sm:w-[500px] p-10 bg-gray-300 rounded-lg">
          <form onSubmit={handelSubmit} className="card-body">
            <h1 className="text-center text-2xl font-bold">
              Update Your Profile
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Edit Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Edit Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Edit Photo</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Edit Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <button
              type="submit"
              className="font-semibold text-xl btn btn-warning mt-6"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
