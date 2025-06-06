import React from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../pages/style/About.css'
import 'swiper/css';

// components
import { Swiper, SwiperSlide } from 'swiper/react';

// image
import coffeeVanilla from '../assets/image/CoffeVanillaBg.png'
import Harvesting from '../assets/image/Harvesting.png'
import Drying from '../assets/image/Drying.png'
import QualityControl from '../assets/image/QualityControl.png'
import Roasting from '../assets/image/Roasting.png'

import Arabica from '../assets/image/Arabica.png'
import Robusta from '../assets/image/Robusta.png'
import Vanilla from '../assets/image/Vanilla.png'
import Excellsa from '../assets/image/excellsa.png'


function sliderGallery() {
  return (
    <>
      <Swiper
        autoHeight={true}
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className='Swiper-about mx-auto' style={{width: '95%'}}>
          <SwiperSlide className='card' id='slider-commitment-card'>
            <div className='card-body'>

              <main className='row mx-auto p-3'>
                <div className='col-md-6'>
                  <img src={coffeeVanilla} alt='Coffee and Vanilla' id='about-us-picture' className='img-fluid rounded-3' />
                </div>

                <div className='col-md-6'>
                  <h1 className='text-start mb-2 mt-2'>Welcome to gallery !</h1>
                  <p className='text-start'>
                    Kluwung Beans & Vanilla Gallery is a collection of our products and the process of making them.
                    You can see how we grow, harvest, and process our beans and vanilla.
                  </p>
                  <p className='text-start'>
                    We are committed to providing the best quality products and services to our customers.
                    We hope you enjoy our gallery and learn more about our products.
                  </p>
                </div>
              </main>

            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-commitment-card'>
            <div className='card-body'>

              <main className='row mx-auto p-3'>
                <div className='col-md-12'>
                  <h1 className='text-center mb-2'>Our Process</h1>
                </div>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={false}
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
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
                  className='Swiper-about mx-auto' style={{width: '100%'}}>

                  <SwiperSlide className='card'>
                    <img src={Harvesting} alt='Harvesting' className='img-fluid rounded-3' />
                    <p className='text-center'>Harvesting</p>
                  </SwiperSlide>

                  <SwiperSlide className='card'>
                    <img src={Drying} alt='Drying' className='img-fluid rounded-3' />
                    <p className='text-center'>Drying</p>
                  </SwiperSlide>

                  <SwiperSlide className='card'>
                    <img src={QualityControl} alt='Quality Control' className='img-fluid rounded-3' />
                    <p className='text-center'>Quality Control</p>
                  </SwiperSlide>

                  <SwiperSlide className='card'>
                    <img src={Roasting} alt='Roasting' className='img-fluid rounded-3' />
                    <p className='text-center'>Roasting</p>
                  </SwiperSlide>

                </Swiper>
              </main>

            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-commitment-card'>
            <div className='card-body'>

              <main className='row mx-auto p-3'>
                <div className="col-md-12">
                  <h1 className='text-center mb-2'>Mockups Product</h1>
                  <p className='text-start'>

                  </p>
                </div>
                <div className="col-md-12">

                 <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={false}
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
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1280: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                    className='Swiper-about mx-auto' style={{width: '100%'}}
                 >
                    <SwiperSlide className='card'>
                      <img src={Arabica} alt='Mockup Product 1' className='img-fluid rounded-3' />
                      <p className='text-center fw-bold'>Arabica green beans</p>
                    </SwiperSlide>

                    <SwiperSlide className='card'>
                      <img src={Robusta} alt='Mockup Product 2' className='img-fluid rounded-3' />
                      <p className='text-center fw-bold'>Robusta</p>
                    </SwiperSlide>

                    <SwiperSlide className='card'>
                      <img src={Excellsa} alt='Mockup Product 3' className='img-fluid rounded-3' />
                      <p className='text-center fw-bold'>Excellsa</p>
                    </SwiperSlide>

                    <SwiperSlide className='card'>
                      <img src={Vanilla} alt='Mockup Product 4' className='img-fluid rounded-3' />
                      <p className='text-center fw-bold'>Vanilla</p>
                    </SwiperSlide>

                  </Swiper>

                </div>
              </main>

            </div>
          </SwiperSlide>
      </Swiper>
    </>
  )
}

export default sliderGallery
