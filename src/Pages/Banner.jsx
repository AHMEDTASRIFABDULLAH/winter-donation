import bnone from "../assets/volunteer-6772196_1280.jpg";
import bntwo from "../assets/slider_two.jpg";
import bnthree from "../assets/slider_three.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className=" h-[300px] sm:h-[600px] rounded-md"
        >
          <SwiperSlide>
            <img className=" h-full  object-cover w-full " src={bnone} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" h-full object-cover w-full " src={bntwo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" h-full object-cover w-full "
              src={bnthree}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
// h-[calc(100vh-72px)]
