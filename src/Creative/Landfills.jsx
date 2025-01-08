import { FaTshirt } from "react-icons/fa";
import { LuBadgeDollarSign } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import { BsFillHouseDashFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Landfills = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 10,
    });
  }, []);
  return (
    <div className="bg-[#e6a65c23]  p-10 rounded-lg  mt-20">
      <h1 className="text-center font-bold text-4xl">Our Savers® cycle.</h1>
      <p className="font-bold mt-4 text-center text-xl">Here’s how it works.</p>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 mt-4">
        <div
          data-aos="fade-down"
          className=" bg-[#00344F] text-white  h-[300px] rounded-lg p-4"
        >
          <p className="text-6xl flex justify-center mt-6 ">
            <FaTshirt />
          </p>
          <h1 className="text-center font-semibold mt-4">
            We accept your donations (thank you) on behalf of a local nonprofit.
            Meet a few of our nonprofit partners.
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="bg-[#00344F] text-white h-[300px] rounded-lg p-4"
        >
          <p className="text-6xl flex justify-center mt-6 ">
            <LuBadgeDollarSign />
          </p>
          <h1 className="text-center font-semibold mt-4">
            We pay our nonprofit partners for your stuff, helping them fund
            programs in your community.Declutter ResponsiblyTM
          </h1>
        </div>
        <div
          data-aos="fade-down"
          className=" bg-[#00344F] text-white  h-[300px] rounded-lg p-4"
        >
          <p className="text-6xl flex justify-center mt-6 ">
            <GiSelfLove />
          </p>
          <h1 className="text-center font-semibold mt-4">
            Your one-of-a-kind finds are given a second chance to be loved again
            by thrifters like you.Drop off clothing and household items and save
            20% on your next
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="bg-[#00344F] text-white   h-[300px] rounded-lg p-4"
        >
          <p className="text-6xl flex justify-center mt-6 ">
            <BsFillHouseDashFill />
          </p>
          <h1 className="text-center font-semibold mt-4">
            Together, we champion reuse and keep millions of reusable items out
            of landfills every year.Drop off clothing and household items and
            save 20% on your next
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landfills;
