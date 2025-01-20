"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContentSlider from "../cards/ContentSlider";

function Sliders() {
  return (
    <div className="h-screen">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-screen"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <ContentSlider
            title="Encuentra los mejores estilistas en Bolivia"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nam modi dolor quia aspernatur, repudiandae optio velit animi itaque voluptatum numquam doloremque nostrum nulla. Impedit accusantium reiciendis illum repellendus delectus."
            backgroundImage="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            extraImg="https://images.pexels.com/photos/18702143/pexels-photo-18702143/free-photo-of-asiento-peluquero-barbero-barberia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            btnText="Haz tu reserva!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider
            title="Haz tus reservas con los mejores servicios"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nam modi dolor quia aspernatur, repudiandae optio velit animi itaque voluptatum numquam doloremque nostrum nulla. Impedit accusantium reiciendis illum repellendus delectus."
            backgroundImage="https://images.pexels.com/photos/26832816/pexels-photo-26832816/free-photo-of-hombres-sentado-peinado-silla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            extraImg="https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            btnText="Mira Nuestros Servicios!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Sliders;
