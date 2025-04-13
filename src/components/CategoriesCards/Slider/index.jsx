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
import OptedCourseCard from '../../OptedCourseCard';

export default function Slider({ courses, buttonColor, variant = null, progress=null }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        className="mySwiper"
        pagination={{
          type: 'fraction',
        }}
        modules={{ Navigation }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {courses && courses.length > 0 ?
          courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <CourseCard variant={variant} item={course} buttonColor={buttonColor ? buttonColor : null} progress={progress} />
            </SwiperSlide>
          ))
          : null}

      </Swiper>
    </>
  );
}
