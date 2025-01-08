import { Link, useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import NavBar from "../Pages/NavBar";
const Private = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const handelSubmit = (e) => {
    e.preventDefault();
    toast.success(" Thank you ! We will reach your destination soon”");
    e.target.reset();
  };
  return (
    <>
      <nav className=" bg-gray-50 rounded-sm shadow-lg sticky top-0 z-50  ">
        <NavBar></NavBar>
      </nav>
      <div className="sm:flex bg-gray-200 mt-6 w-11/12 mx-auto rounded-xl">
        <div className="p-6  sm:w-[50%]">
          <h1 className="text-2xl font-bold mb-4">{singleData.title}</h1>
          <img
            className=" w-full object-cover h-[400px] rounded-xl"
            src={singleData.image}
            alt=""
          />
          <p className="font-semibold text-xl mt-2">
            {" "}
            <IoLocationOutline />
            {singleData.division}
          </p>
          <p className="font-semibold text-gray-700">
            {singleData.description}
          </p>
        </div>
        {/* form */}
        <div className="sm:w-[50%] border-l-2 border-gray-300">
          <form onSubmit={handelSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">e.g..</span>
              </label>
              <input
                type="text"
                placeholder=" Set e.g.. "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blanket </span>
              </label>
              <input
                type="number"
                placeholder=" Set Blanket Quantity"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Jacket</span>
              </label>
              <input
                type="number"
                placeholder=" Set Jacket Quantity  "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Sweater</span>
              </label>
              <input
                type="number"
                placeholder=" Set  Sweater Quantity  "
                className="input input-bordered"
                required
              />
            </div>
            <p>Pickup location : {singleData.pickupLocation}</p>
            <div className="form-control mt-6">
              <button className="btn btn-error font-semibold mb-6">Send</button>
              <Link
                className="btn bg-[#1F2937] text-white font-semibold"
                to="/"
              >
                Back To Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Private;
