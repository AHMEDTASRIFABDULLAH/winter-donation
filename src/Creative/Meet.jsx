import volone from "../assets/man-7967210_1280.jpg";
import voltwo from "../assets/ai-generated-8920116_1280.jpg";
import volthree from "../assets/ai-generated-9019518_1280.png";
import volfour from "../assets/ai-generated-9019520_1280.png";
import Aos from "aos";
const Meet = () => {
  Aos.init();
  return (
    <div data-aos="zoom-out" className="mt-20">
      <h1 className="text-6xl font-bold text-center ">MEET OUR VOLUNTEERS </h1>
      <p className="font-semibold text-center">
        We make a lot of effort to help achieve the global poverty rate decline,
        support education for children living in poor families.
      </p>
      <div className=" p-6 border border-[#E8BC8D] rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <img className="h-[400px] w-full rounded-md" src={volone} alt="" />
        <img className="h-[400px] w-full rounded-md" src={voltwo} alt="" />
        <img className="h-[400px] w-full rounded-md" src={volthree} alt="" />
        <img className="h-[400px] w-full rounded-md" src={volfour} alt="" />
      </div>
    </div>
  );
};

export default Meet;
