import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import slider6 from "../../../assets/home/slide6.jpg";
import slider7 from "../../../assets/home/slide7.jpg";
import slider8 from "../../../assets/home/slide8.jpg";
import slider9 from "../../../assets/home/slide9.jpg";
import slider10 from "../../../assets/home/slide10.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {

      /* Current Time Code Start */
      const getCurrentTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            const strMinutes = minutes < 10 ? '0' + minutes : minutes;
            return `${hours}:${strMinutes}${ampm}`;
          };
        
          const startTime = getCurrentTime();
          const endTime = "10:00pm";
          const timeRange = `From ${startTime} to ${endTime}`;
        /*Current Time Code End */
  return (
    <section>
      <SectionTitle
        subhedding={timeRange}
        hedding={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Pizza
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Soups
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider9} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider10} alt="" />
          <h3 className="text-4xl uppercase text-white text-center -mt-20">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
