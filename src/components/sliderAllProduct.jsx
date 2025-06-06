import React from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../pages/style/Gallery.css'
import 'swiper/css';

// image
import Arabica from '../assets/image/Arabica.png'
import Robusta from '../assets/image/Robusta.png'
import Vanilla from '../assets/image/Vanilla.png'
import Excellsa from '../assets/image/excellsa.png'
import ArabicaRed from '../assets/image/ArabicaRed.png'
import ArabicaYellow from '../assets/image/ArabicaYellow.png'

// components
import { Swiper, SwiperSlide } from 'swiper/react';

function sliderAbout() {
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className='Swiper-about mx-auto' style={{width: '100%'}}>
          <SwiperSlide className='card' id='slider-product-card'>
            <div className='card-header d-flex'>
              <h1 className='h5 text-start mb-2 mt-2 fw-bold'>Product 1</h1>
              <p className='fw-bold bg-dark p-2'>type: <span>beans</span></p>
            </div>
            <div className='card-body'>
              <h1 className='text-start pb-2'>Arabica Green Beans</h1>
              <img src={Arabica} alt='Arabica Green Beans' className='img-fluid rounded-3 mb-2' />
              <p className='text-start'>
                Arabica beans are grown at high altitudes in cool, tropical climates—o.
                Premium varieties come from carefully selected farms known for their terroir and sustainable farming practices.
                Flavor Profile: Arabica premium coffee is known for its smooth, nuanced flavor and low bitterness.
              </p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
              <p className='text-start'>Price: <span className='fw-bold'>$6.50</span></p>
              <button className='btn btn-outline-light'>More Info</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-product-card'>
            <div className='card-header d-flex'>
              <h1 className='h5 text-start mb-2 mt-2 fw-bold'>Product 2</h1>
              <p className='fw-bold bg-dark p-2'>type: <span>beans</span></p>
            </div>
            <div className='card-body'>
              <h1 className='text-start pb-2'>Arabica Yellow Catura</h1>
              <img src={ArabicaYellow} alt='Arabica Yellow Catura' className='img-fluid rounded-3 mb-2' />
              <p className='text-start'>
                Arabica Yellow Catura is a premium coffee variety known for its unique flavor profile and vibrant yellow cherries.
                Grown at high altitudes, it offers a sweet, fruity taste with floral notes, making it a favorite among coffee connoisseurs.
                The beans are carefully harvested and processed to preserve their exceptional quality, resulting in a smooth and aromatic cup of coffee.
              </p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
              <p className='text-start'>Price: <span className='fw-bold'>$6.75</span></p>
              <button className='btn btn-outline-light'>More Info</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-product-card'>
            <div className='card-header d-flex'>
              <h1 className='h5 text-start mb-2 mt-2 fw-bold'>Product 3</h1>
              <p className='fw-bold bg-dark p-2'>type: <span>beans</span></p>
            </div>
            <div className='card-body'>
              <h1 className='text-start pb-2'>Arabica Red Catura</h1>
              <img src={ArabicaRed} alt='Arabica Red Catura' className='img-fluid rounded-3 mb-2' />
              <p className='text-start'>
                Arabica Red Catura is a premium coffee variety known for its vibrant red cherries and exceptional flavor profile.
                Grown at high altitudes, it offers a sweet, fruity taste with hints of chocolate and caramel.
                The beans are meticulously harvested and processed to ensure the highest quality, resulting in a smooth and aromatic cup of coffee that delights the senses.
              </p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
              <p className='text-start'>Price: <span className='fw-bold'>$7.0</span></p>
              <button className='btn btn-outline-light'>More Info</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-product-card'>
            <div className='card-header d-flex'>
              <h1 className='h5 text-start mb-2 mt-2 fw-bold'>Product 4</h1>
              <p className='fw-bold bg-dark p-2'>type: <span>beans</span></p>
            </div>
            <div className='card-body'>
              <h1 className='text-start pb-2'>Arabica Bourbon</h1>
              <img src={Arabica} alt='Arabica Bourbon' className='img-fluid rounded-3 mb-2' />
              <p className='text-start'>
                Arabica Bourbon is a premium coffee variety known for its rich, complex flavor profile and smooth, balanced taste.
                Grown at high altitudes, it features sweet, fruity notes with hints of chocolate and caramel.
                The beans are carefully harvested and processed to preserve their exceptional quality, resulting in a delightful cup of coffee that is both aromatic and satisfying.
              </p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
              <p className='text-start'>Price: <span className='fw-bold'>$6.75</span></p>
              <button className='btn btn-outline-light'>More Info</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-product-card'>
            <div className='card-header d-flex'>
              <h1 className='h5 text-start mb-2 mt-2 fw-bold'>Product 5</h1>
              <p className='fw-bold bg-dark p-2'>type: <span>beans</span></p>
            </div>
            <div className='card-body'>
              <h1 className='text-start pb-2'>Excellsa</h1>
              <img src={Excellsa} alt='Excelsa Coffee Beans' className='img-fluid rounded-3 mb-2' />
              <p className='text-start'>
                Excelsa Premium is a rare and distinguished variety of coffee, known for its unique flavor profile and exceptional quality.
                Excelsa beans thrive in high-altitude environments, producing a complex cup that stands apart from more common coffee types.
                Key Characteristics: Flavor Profile: Bold and fruity with tart, dark, and mysterious undertones. Notes of tamarind, dark berries, and subtle smoky hints make it a favorite for adventurous coffee lovers.
              </p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
              <p className='text-start'>Price: <span className='fw-bold'>$5.25</span></p>
              <button className='btn btn-outline-light'>More Info</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-product-card'>
            <div className='card-header d-flex'>
              <h1 className='h5 text-start mb-2 mt-2 fw-bold'>Product 6</h1>
              <p className='fw-bold bg-dark p-2'>type: <span>vanila</span></p>
            </div>
            <div className='card-body'>
              <h1 className='text-start pb-2'>Vanilla</h1>
              <img src={Vanilla} alt='Vanilla Pods' className='img-fluid rounded-3 mb-2' />
              <p className='text-start'>
                Vanilla pods, also known as vanilla beans, are the long, slender, dark brown seed pods of the vanilla orchid, primarily Vanilla planifolia. They are highly prized for their rich, sweet, and aromatic flavor, which is a result of the compound vanillin and other complex aroma compounds developed during the curing process.
              </p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
              <p className='text-start'>Price: <span className='fw-bold'>$50</span></p>
              <button className='btn btn-outline-light'>More Info</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-product-card'>
            <div className='card-header d-flex'>
              <h1 className='h5 text-start mb-2 mt-2 fw-bold'>Product 7</h1>
              <p className='fw-bold bg-dark p-2'>type: <span>beans</span></p>
            </div>
            <div className='card-body'>
              <h1 className='text-start pb-2'>Robusta</h1>
              <img src={Robusta} alt='Robusta Coffee Beans' className='img-fluid rounded-3 mb-2' />
              <p className='text-start'>
                Premium Robusta coffee beans are characterized by their bold, earthy flavors, higher caffeine content, and versatility in various coffee preparations.
                When sourced and processed with care, they offer a unique and satisfying coffee experience
              </p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
              <p className='text-start'>Price: <span className='fw-bold'>$5.50</span></p>
              <button className='btn btn-outline-light'>More Info</button>
            </div>
          </SwiperSlide>


      </Swiper>
    </>
  )
}

export default sliderAbout
