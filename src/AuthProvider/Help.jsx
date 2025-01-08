import one from "../assets/shopping-43.png";
import one2 from "../assets/scooter-71.png";
import one3 from "../assets/map-65.png";
import bg from "../assets/compute-ea4c57a4.png";
import Aos from "aos";
import NavBar from "../Pages/NavBar";
const Help = () => {
  Aos.init();
  return (
    <div>
      <nav className=" bg-gray-50 rounded-sm shadow-lg sticky top-0 z-50  ">
        <NavBar></NavBar>
      </nav>
      <section
        className={`bg-[url('${bg}')] relative bg-cover bg-center p-6 rounded-lg shadow-md mt-8 w-11/12 mx-auto bg-[#a4c4d6] `}
      >
        <div
          data-aos="zoom-in-down"
          className="bg-white bg-opacity-80 p-6 rounded-lg shadow-2xl "
        >
          {" "}
          <h2 className="text-3xl font-semibold mb-6 text-center text-black">
            How to Help
          </h2>{" "}
          <div className="space-y-8">
            {" "}
            <div className="flex items-center">
              {" "}
              <img
                src={one}
                alt="Gather Clothes"
                className="w-32 h-32 object-cover rounded-lg mr-6 shadow-lg"
              />{" "}
              <div>
                {" "}
                <h3 className="text-xl font-bold text-black">
                  Gather Your Clothes
                </h3>{" "}
                <p className="text-gray-700">
                  Collect gently used clothing, shoes, and accessories.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={one2}
                alt="Schedule Pickup"
                className="w-32 h-32 object-cover rounded-lg mr-6 shadow-lg"
              />{" "}
              <div>
                <h3 className="text-xl font-bold text-black">
                  Schedule a Pickup
                </h3>
                <p className="text-gray-700">
                  Book a convenient pickup time online or call us at [Phone
                  Number].
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center">
              <img
                src={one3}
                alt="Drop Off"
                className="w-32 h-32 object-cover rounded-lg mr-6 shadow-lg"
              />{" "}
              <div>
                <h3 className="text-xl font-bold text-black">
                  Drop Off at a Location
                </h3>{" "}
                <p className="text-gray-700">
                  Find a nearby drop-off location and donate your items
                  directly.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <p className="mt-8 text-black text-center">
            We're constantly expanding our reach to serve more communities. Stay
            tuned for updates on our website and social media.
          </p>{" "}
        </div>{" "}
      </section>
    </div>
  );
};

export default Help;
