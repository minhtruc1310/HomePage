import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import '../css/banner.scss';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

function Banner() {

    return (
      <div className="banner">
       <Swiper
        slidesPerView={1}
        pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '" style="background-color:#ffffff;"></span>'; // Replace #ff0000 with your desired color
            },
          }}
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay: 2000,
          }}
        loop={true}
        >
            <SwiperSlide><img src='https://img.freepik.com/free-vector/flat-design-geometric-real-estate-sale-banner_23-2149154070.jpg?w=1060&t=st=1716386324~exp=1716386924~hmac=9c3804fbe7bef5eafdabd758ca314d339d50aaf3bb98a5ec5bf0d' alt='' width="100%" /></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-vector/flat-design-geometric-real-estate-sale-banner_23-2149154070.jpg?w=1060&t=st=1716386324~exp=1716386924~hmac=9c3804fbe7bef5eafdabd758ca314d339d50aaf3bb98a5ec5bf0d' alt='' width="100%" /></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-vector/flat-design-geometric-real-estate-sale-banner_23-2149154070.jpg?w=1060&t=st=1716386324~exp=1716386924~hmac=9c3804fbe7bef5eafdabd758ca314d339d50aaf3bb98a5ec5bf0d' alt='' width="100%" /></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-vector/flat-design-geometric-real-estate-sale-banner_23-2149154070.jpg?w=1060&t=st=1716386324~exp=1716386924~hmac=9c3804fbe7bef5eafdabd758ca314d339d50aaf3bb98a5ec5bf0d' alt='' width="100%" /></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-vector/flat-design-geometric-real-estate-sale-banner_23-2149154070.jpg?w=1060&t=st=1716386324~exp=1716386924~hmac=9c3804fbe7bef5eafdabd758ca314d339d50aaf3bb98a5ec5bf0d' alt='' width="100%" /></SwiperSlide>
        </Swiper>
      </div>
    );
  }
  
  export default Banner