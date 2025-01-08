import money from "../assets/money-jar-61.png";
import location from "../assets/navigation-8.png";
const Works = () => {
  return (
    <div>
      <section>
        <h2 className="text-3xl text-[#373736] font-bold text-center py-8 ">
          How It Works
        </h2>
        <div className=" bg-[#00344F] text-white   p-4 rounded-t-xl shadow-inner">
          <div className="sm:flex gap-6  justify-center items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 sm:mb-2">
                Donating is Easy!
              </h3>{" "}
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Gather Your Clothes: Collect gently used clothing, shoes, and
                  accessories.
                </li>{" "}
                <li>
                  Schedule a Pickup: Book a convenient pickup time online or
                  call us at [Phone Number].
                </li>{" "}
                <li>
                  Drop Off at a Location: Find a nearby drop-off location and
                  donate your items directly.
                </li>{" "}
              </ol>{" "}
              <p className="mt-4 ">
                We're constantly expanding our reach to serve more communities.
                Stay tuned for updates on our website and social media.
              </p>{" "}
            </div>
            <img className="sm:w-[20%]" src={money} alt="" />
          </div>
        </div>
      </section>
      <section>
        {" "}
        <div className="  p-4 rounded-b-xl shadow-md bg-[#dee5e36b] text-black">
          <div className=" sm:flex gap-6 justify-center items-center">
            <img className="sm:w-[20%]" src={location} alt="" />
            <div>
              <h3 className="text-4xl font-bold mb-6 sm:mb-2">
                Our Supported Divisions
              </h3>{" "}
              <ol className="list-decimal list-inside space-y-2">
                {" "}
                <li>Dhaka</li> <li>Chittagong</li>
                <li>
                  Schedule a Pickup: Book a convenient pickup time online or
                  call us at [Phone Number].
                </li>{" "}
                <li>
                  Drop Off at a Location: Find a nearby drop-off location and
                  donate your items directly.
                </li>{" "}
              </ol>{" "}
              <p className="mt-4 ">
                We're constantly expanding our reach to serve more communities.
                Stay tuned for updates on our website and social media.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mb-8 ">
        <h2 className="text-2xl font-semibold mb-4">Our Supported Divisions</h2>
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
          <img className="w-[20%]" src={location} alt="" />

          <div className="">
            <ul className="list-disc list-inside space-y-2">
              {" "}
              <li>Dhaka</li> <li>Chittagong</li> <li>Khulna</li>{" "}
              <li>Rajshahi</li> <li>Sylhet</li> <li>Barisal</li>{" "}
              <li>Mymensingh</li>
              <li>Rangpur</li>{" "}
            </ul>{" "}
            <p className="mt-4 text-blue-600">
              We're constantly expanding our reach to serve more communities.
              Stay tuned for updates on our website and social media.
            </p>{" "}
          </div>
        </div>{" "}
      </section> */}
    </div>
  );
};

export default Works;
