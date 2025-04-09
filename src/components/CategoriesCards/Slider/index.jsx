import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import CourseCard from '../../CourseCard';

export default function Slider({ courses, buttonColor }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        className="mySwiper"
        pagination={{
          type: 'fraction',
        }}
      >
        {courses && courses.length > 0 ?
          courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <CourseCard item={course} buttonColor={buttonColor ? buttonColor : null} />
            </SwiperSlide>
          ))
          : null}

      </Swiper>
    </>
  );
}
