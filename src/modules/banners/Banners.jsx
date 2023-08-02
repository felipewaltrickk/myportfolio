import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageIxD from '../../assets/img/IxD.png'
import productDesign from '../../assets/img/productDesign.png'
import frontEnd from '../../assets/img/frontEnd.png'
import uxUi from '../../assets/img/uxUi.png'
import software from '../../assets/img/software.png'
import './Banners.css';

export const Banners = () => {
  return (
    <div className='container'>
      <Swiper
        slidesPerView={'auto'}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={productDesign} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageIxD} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uxUi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={frontEnd} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={software} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
