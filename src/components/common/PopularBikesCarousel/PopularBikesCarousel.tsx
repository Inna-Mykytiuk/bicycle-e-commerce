'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PopularBike } from '../../../types/types';
import Bike from '../Bike/Bike';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

interface PopularBikesCarouselProps {
  bikes: PopularBike[];
}

const PopularBikesCarousel: React.FC<PopularBikesCarouselProps> = ({
  bikes,
}) => {
  // console.log(bikes);
  return (
    <Swiper
      grabCursor={true}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-bike-slider mb-8"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {bikes.map(bike => (
        <SwiperSlide key={bike._id}>
          <Bike bike={bike} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularBikesCarousel;
