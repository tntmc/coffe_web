import React from 'react'
import { Link } from 'react-router-dom'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/footer.css'

// components
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import ButtonWhatsapp from './ButtonWhatsapp'

// assets
import Logo from '../assets/image/Logo.png'
// import landscape from '../assets/image/Landscape1.png'

function Footer() {
  return (
    <>

      <footer className='text-center text-lg-start mx-auto' style={{width: '100%'}}>
        {/* <div className='container-fluid' id='footer-image'>
          <img src={landscape} alt="landscape" className='img-fluid' id='footer-image' style={{width: '100%', height: '100%'}}></img>
        </div> */}
        <section className='container-fluid p-3 text-start text-white'>
          <main className='row mx-auto p-3' style={{width: '90%'}}>
            <div className='col-xl-5 col-lg-7 col-md-12 mb-3'>
              <div className='d-flex mb-1'>
                <img src={Logo} alt="logo" className='img-fluid me-2' style={{width:'5em', height:'5em', marginInline: '0.25em', borderRadius: '50%'}}></img>
                <h1 className='text-uppercase fw-bold mt-1'>Kluwung Beans & Vanilla</h1>
              </div>
              <p style={{fontSize: '0.9em'}}>
                Kluwung Bean & Vanilla  one of as a agriculturing
                company focused on coffee, vanilla, and agruiculturing craft.
                Kluwung Bean & Vanilla was founded by Planters in plants, Organic fertilizer research for decades and has the best people in their field who are superior, young, energetic, good personalities as a strong foundation for our company.
              </p>
            </div>

            <div className='col-xl-3 col-lg-5 col-md-6 mb-3'>
              <div className='card' id='footer-info-card'>
                <div className='card-body' id='footer-info-card-body'>
                  <h2 className='h5 text-start text-uppercase border-bottom pb-2'>our services</h2>
                    <ul className="list-unstyled text-white" style={{marginBlock:'1.25em',fontSize: '0.85em'}}>
                      <li>
                        <p style={{textDecoration: 'none'}}><BiSolidCoffeeBean /> Plantation planting Management</p>
                      </li>
                      <li>
                        <p style={{textDecoration: 'none'}}><BiSolidCoffeeBean /> Plantation maintenance</p>
                      </li>
                      <li>
                        <p style={{textDecoration: 'none'}}><BiSolidCoffeeBean /> Organic handling</p>
                      </li>
                      <li>
                        <p style={{textDecoration: 'none'}}><BiSolidCoffeeBean /> Production-Market Distribution</p>
                      </li>
                    </ul>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-5 col-md-6 mb-3'>
              <div className='card' id='footer-info-card'>
                <div className='card-body' id='footer-info-card-body'>
                  <h2 className='h5 text-start text-uppercase border-bottom pb-2'>our Contact</h2>
                    <ul className="list-unstyled text-white" style={{marginBlock: '1.25em', fontSize: '0.85em'}}>
                      <li>
                        <p style={{textDecoration: 'none'}}><FaPhoneAlt/> +62 81 235 879 777</p>
                      </li>
                      <li style={{marginBottom: '1.25em'}}>
                        <a style={{textDecoration: 'none', color:'white'}} href='https://abisatyadiwangkara.github.io/'><IoMdGlobe /> https://abisatyadiwangkara.github.io/</a>
                      </li>
                      <li style={{marginBottom: '1.25em'}}>
                        <a style={{textDecoration: 'none', color:'white'}} href="mailto:adebond2002@gmail.com"><MdEmail /> adebond2002@gmail.com</a>
                      </li>
                      <li style={{marginBottom: '1.25em'}}>
                        <a style={{textDecoration: 'none', color:'white'}} href="https://maps.app.goo.gl/qDuZMTRaRKcDGZKo8"><FaMapMarkerAlt /> Kluwung beans & vanilla Location</a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </main>

          <main className='row mx-auto pt-3' style={{width: '100%'}}>
            <div className='col-xl-12'>
              <div className='card' id="connected-card">
                <div className="card-body" id='connected-card-body'>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <h2 className='h5 text-uppercase'>get connected with us:</h2>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/coffeevanilla_abisatya?igsh=MWh5bTk0N3JzNGN3NA%3D%3D&utm_source=qr" style={{textDecoration: 'none'}}><span className='text-white'><FaInstagram/></span></a>
                    </li>
                    <li>
                      <a href="https://maps.app.goo.gl/519VxMsGrYnRFoFF6" style={{textDecoration: 'none'}}><span className='text-white'><FaGoogle/></span></a>
                    </li>
                    <li>
                      <ButtonWhatsapp
                        phoneNumber="6281235879777"
                        message="Hello Ade, I would like to know more about Kluwung Beans & Vanilla."
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </section>

        <div className="d-flex text-start justify-content-center text-white p-4 g-0 border-top border-dark me-2 ms-2">
          <p> &copy; {new Date(). getFullYear()} Copyright
            <span className="text-white fw-bold ms-1">Kluwung Beans & Vanilla</span>
          </p>
        </div>
      </footer>

    </>
  )
}

export default Footer
