import React, {useState, useEffect} from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../../pages/style/About.css'
import 'swiper/css';

// components
import { Swiper, SwiperSlide } from 'swiper/react';

// image
import coffeeVanilla from '../../assets/image/CoffeVanillaBg.png'
import coffee from '../../assets/image/CoffeBeansMini.png'
import vanilla from '../../assets/image/VanillaBeansMini.png'




function SliderAbout() {

  const [isexpand, setisexpand] = useState(false);

  useEffect (() => {
    document.body.classList.toggle('expand', isexpand);
  }, [isexpand]);

  const toggleexpand = () => {
    setisexpand(prev => !prev);
  }

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
                <div className='col-lg-6 col-md-5'>
                  <img src={coffeeVanilla} alt='Coffee and Vanilla' id='about-us-picture' className='img-fluid rounded-3' />
                </div>

                <div className='col-lg-6 col-md-7'>
                  <h1 className='text-start mb-2'>About Us</h1>
                  <p className='text-start'>
                    Kluwung Bean & Vanilla  one of as a agriculturing
                    company focused on coffee, vanilla, and agruiculturing craft.
                    Kluwung Bean & Vanilla was founded by Planters in plants, Organic fertailizer research for decades and has the best people in their field who are superior, young, energetic, good personalities as a strong foundation for our company.
                  </p>
                  {/* expanded description */}
                  <div className={`${isexpand ? 'expand' : 'unexpand'}`} id='span-description'>
                    <h1 className='text-start mt-2 mb-2 '>Description </h1>
                    <p className='text-start'>
                      The focus of Kluwung Bean & Vanilla products is Coffee bean, Vanilla pods, exclusive ornaments by coffeee wooden with the concept of the handmade industry.
                      We also accept custom product design to provide breadth for consumers in developing concepts, ideas, and designs with Kluwung Bean & Vanilla.
                      We are also proud to use local Indonesian resources reflected in the character of our products and various other materials.
                      In the production process, conventional processes collaborate with the industrial revolution era 4.0 process in the utilization of digital technology from planting, fertilizing, cultivating, processing ( production, Quality Control, Packing, Delivery )to the core production process with semi-automatic systems giving birth to the best products. Supported by digital marketing on all digital potential becomes the branding power of Kluwung Bean & Vanilla
                    </p>
                  </div>
                  <button className='btn d-flex btn-outline-light align-items-start justify-content-start' onClick={toggleexpand}>
                    {isexpand ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              </main>

            </div>
          </SwiperSlide>

          <SwiperSlide className='card' id='slider-commitment-card'>
            <div className='card-body'>

              <main className='row mx-auto p-3'>
                <div className="col-xl-5 col-lg-6">
                  <h1 className='text-start mb-2'>About Product</h1>
                  <p className='text-start'>
                    Coffee and Vanilla Premium
                    Indulge in the Richness of Contrast.
                    Coffee and Vanilla Premium is a luxurious blend crafted for those who crave the perfect balance between boldness and sweetness. This product brings together the deep, roasted aroma of premium coffee with the creamy, comforting warmth of smooth vanilla. Whether you're starting your day or winding down, it delivers a sophisticated, sensory experience that feels both invigorating and soothing.
                  </p>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12">

                  <main className='row mx-auto p-3'>
                    <div className='col-sm-6'>
                      <img src={coffee} alt='Coffee Beans' className='img-fluid rounded-3' />
                      <p className='text-start fw-bold'>Coffee Beans</p>
                    </div>
                    <div className='col-sm-6'>
                      <img src={vanilla} alt='Vanilla Beans' className='img-fluid rounded-3' />
                      <p className='text-start fw-bold'>Vanilla Beans</p>
                    </div>
                  </main>

                </div>
              </main>

            </div>
          </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SliderAbout
