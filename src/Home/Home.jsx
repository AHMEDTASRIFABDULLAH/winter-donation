import { useEffect } from "react";
import About from "../Pages/About";
import Banner from "../Pages/Banner";
import Works from "../Pages/Works";
import Aos from "aos";
import "aos/dist/aos.css";
import Landfills from "../Creative/Landfills";
import Meet from "../Creative/Meet";
import Faq from "../Creative/Faq";
import NavBar from "../Pages/NavBar";
// import NavBar from "../Pages/NavBar";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <nav className=" bg-gray-50 rounded-sm shadow-lg sticky top-0 z-50  ">
        <NavBar></NavBar>
      </nav>
      <div className="w-11/12 mx-auto overflow-hidden">
        <Banner></Banner>
        <div>
          <About></About>
        </div>
        <div data-aos="zoom-in-down">
          <Works></Works>
        </div>
        <Meet></Meet>
        <div data-aos="flip-up">
          <Landfills></Landfills>
        </div>
        <div data-aos="zoom-out-up">
          <Faq></Faq>
        </div>
      </div>
    </>
  );
};

export default Home;
