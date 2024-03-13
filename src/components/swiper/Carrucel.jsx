"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

export default function Carrucel({
  modeloModal,
  modeloModal2,
  modeloModal3,
}) {
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
              width={624}
              height={631}
              className=" w-100 img-container-fill"
              src={modeloModal3}
              alt="modelo scort gafas"></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={624}
              height={631}
              className=" w-100 img-container-fill"
              src={modeloModal}
              alt="modelo scort gafas"></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={624}
              height={631}
              className=" w-100 img-container-fill"
              src={modeloModal2}
              alt="modelo scort gafas"></Image>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
