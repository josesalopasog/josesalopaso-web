import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


const ProjectsSwiper = () => {
  return (
    <div className="container w-full mx-auto">
      <Swiper
        className="w-[100%] mx-auto"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          500: {
            slidesPerView: 0,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        coverflowEffect={{
          rotate: 2,
          stretch: 10,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          <a href="https://josesalopasog.github.io/mercadofake-web/" className="flex flex-col items-center justify-center w-[300px] h-[400px] p-5 bg-black/100 rounded-lg m-0 " target="_blank">
            <h2 className='text-[30px]'>Mercado Fake</h2>
            <p className='text-[16px] ' >Un clon de Mercado Libre</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center w-[300px] h-[400px] p-5 bg-black/100 rounded-lg m-0">
            <h2>Proyecto 2</h2>
            <p>Descripción 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center w-[300px] h-[400px] p-5 bg-black/100 rounded-lg m-0">
            <h2>Proyecto 3</h2>
            <p>Descripción 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center w-[300px] h-[400px] p-5 bg-black/100 rounded-lg m-0">
            <h2>Otros</h2>
            <p className='text-[16px] '>Visita mis otros proyectos en GitHub</p>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow transition-colors duration-3000">
          </div>
          <div className="swiper-button-next slider-arrow transition-colors duration-3000">
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
    </div>
  );
};

export default ProjectsSwiper;