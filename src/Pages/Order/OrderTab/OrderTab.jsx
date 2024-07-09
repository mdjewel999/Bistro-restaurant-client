
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './OrderTab.css';
import { Pagination } from 'swiper/modules';
import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={1}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10">
              {items
                .slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                )
                .map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OrderTab;
