import { Link, useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import NavBar from "../Pages/NavBar";
const Campaigns = () => {
  const data = useLoaderData();
  return (
    <>
      <nav className=" bg-gray-50 rounded-sm shadow-lg sticky top-0 z-50  ">
        <NavBar></NavBar>
      </nav>
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center gap-6 mt-6">
        {data.map((d) => (
          <>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-[200px] w-full object-cover"
                  src={d.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{d.title}</h2>
                <p className="font-semibold ">
                  {" "}
                  <IoLocationOutline className="text-green-500" /> {d.division}
                </p>
                <p className="font-semibold text-gray-500">{d.description}</p>
                <div className="card-actions ">
                  <Link className="block w-full" to={`/private/${d.id}`}>
                    <button className="btn w-full   bg-[#00344F] text-white font-semibold">
                      Donate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Campaigns;
