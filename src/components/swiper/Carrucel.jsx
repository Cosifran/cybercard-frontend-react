"use client";
import Image from "next/image";
import modeloSecundaria from "../../lib/img/modelo-secundaria.png";
import {useEffect, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

export default function Carrucel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <Image
              className="img-fluid w-100"
              src={modeloSecundaria}
              alt="modelo scort gafas"></Image>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
