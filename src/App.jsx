import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from './assets/images/image1.jpg'
import slide_image_2 from './assets/images/image2.jpg'
import slide_image_3 from './assets/images/image3.jpg'
import slide_image_4 from './assets/images/image4.jpg'
import slide_image_5 from './assets/images/image5.jpg'
import slide_image_6 from './assets/images/image6.jpg'
import slide_image_7 from './assets/images/image7.jpg'

function App() {
  return (
      <div className='container'>
        <h1 className="heading">Galeria Viggo</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
              rotate:0,
              stretch:0,
              depth:100,
              modifier:2.5
            }}
          pagination={{el:'.swiper-pagination',clickable:true}}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow,Pagination,Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="viggo1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="viggo2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="viggo3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="viggo4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="viggo5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="viggo6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="viggo7" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
  )
}

export default App