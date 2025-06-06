import React from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../pages/style/Commitment.css'
import 'swiper/css';


// components
import { Swiper, SwiperSlide } from 'swiper/react';

function sliderCommitment() {
  return (
    <>
      <Swiper
        autoHeight={true}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        direction='horizontal'
        observer={true}
        observeParents={true}
        onInit={(swiper) => swiper.update()}
        breakpoints={{
           0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className='Swiper-about mx-auto' style={{width: '95%'}}>
          <SwiperSlide className='card' id='slider-commitment-card'>
            <div className='card-body'>
              <h1 className='text-start mb-2 fw-bold'>Our Vision</h1>
              <ul>
                <li className='text-start'>Producing plantation product with the best quality and supported by profesional human resources</li>
                <li className='text-start'>Leading in reasearch and inovation of plantation products</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-commitment-card'>
            <div className='card-body'>
              <h1 className='text-start mb-2 fw-bold'>Our Mission</h1>
              <ul>
                <li className='text-start'>Producing plantation product with the best quality and supported by profesional human resources</li>
                <li className='text-start'>Leading in reasearch and inovation of plantation products</li>
                <li className='text-start'>Make Kluwung Bean & vanilla plantation products one of the pride of Indonesia's agriculture</li>
                <li className='text-start'>create happy or satisfied a customer is with a company's products, services, and overall experience</li>
              </ul>
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  )
}

export default sliderCommitment
