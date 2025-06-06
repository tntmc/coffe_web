import React from 'react'
import { Link } from 'react-router-dom'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/Gallery.css'

// components
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import SliderFeaProduct from '../components/sliderFeaProduct'
import SliderAllProduct from '../components/sliderAllProduct';
import SliderGallery from '../components/sliderGallery';

// assets
import Package1 from '../assets/image/package1-transparent.png'

function Gallery() {

  return (
    <>
      <section id='Gallery'>
        <SpotlightCard className="custom-spotlight-card card mb-1 mx-auto" id='card-banner' spotlightColor="rgba(204, 166, 169, 0.35)" >
          <div className='card-body'>
            <main className='row'>
              <div className='col-md-8' id='gallery-title-container'>
                <h1 className='fw-bold text-start text-light m-3'>Products & Gallery</h1>
                <p className='fw-bold text-start text-light m-3'>See Kluwung beans & vanilla Gallery</p>
                <button className='fw-bold btn btn-outline-light m-3' data-bs-toggle="modal" data-bs-target="#exampleModal">See More</button>
              </div>
              <div className='col-md-4 d-flex justify-content-center align-items-center' id='gallery-title-container'>
                <img src={Package1} alt="package1" className='img g-0 z-4 mx-auto' id='package-image1'></img>
              </div>
            </main>
          </div>
        </SpotlightCard>

        {/* modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-fullscreen-lg-down modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <h1 className="h5 modal-title fw-bold" id="exampleModalLabel">Kluwung Beans & Vanilla Gallery</h1>
                <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal" aria-label="Close">Close</button>
              </div>
              <div className="modal-body">
                <SliderGallery/>
              </div>
            </div>
          </div>
        </div>
        {/*end modal*/}

        <div className='card mx-auto mt-2 mb-2' id='card-product' style={{width: '90%'}}>
          <div className='card-header'>
            <h1 className='fw-bold text-start m-2 pb-2 border-bottom border-light-subtle'>Featured product</h1>
          </div>

          <div className='card-body'>
            <SliderFeaProduct />
          </div>
        </div>

        <div className='card mx-auto mt-2 mb-2' id='card-product' style={{width: '90%'}}>
          <div className='card-header'>
            <h1 className='fw-bold text-start m-2 pb-2 border-bottom border-light-subtle'>All product</h1>
          </div>

          <div className='card-body'>
            <SliderAllProduct />

          </div>
        </div>

      </section>
    </>
  )
}

export default Gallery
