'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PopularBike } from '../PopularBikes/types';
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
  console.log(bikes);
  return (
    <Swiper
      grabCursor={true}
      // slidesPerView={3}
      // spaceBetween={30}
      // pagination={{
      //   clickable: true,
      // }}
      // modules={[Pagination]}
      // className="mySwiper"
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
