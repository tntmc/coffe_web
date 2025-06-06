import React from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/Contact.css'

// components
import { BiSolidCoffeeBean } from "react-icons/bi";
import MapView from '../components/MapView';


function Contact() {
  return (
    <>
      <section id='Contact'>
        <main className='container-fluid mx-auto' style={{width: '85%'}}>



            <main className='row'>
              <div className='col-lg-6 col-md-6' id='contact-title-container'>
                <h1 className='text-start fw-bold mt-3 mb-2 text-light' id='contact-title'>Contact Us</h1>
                <h2 className='text-start text-light mb-3' id='contact-subtitle'>We would love to hear or discuss about Kluwung beans & vanilla from you!</h2>

                <div className='card' id="contact-card">
                  <div className="card-body">
                    <h2 className='text-start text-light mb-3 border-bottom border-light-subtle pb-3' id='contact-subtitle'>Or get visit in</h2>
                    {/* <ul className='list-unstyled text-white'>
                      <li className='text-start text-light mb-3'><BiSolidCoffeeBean /> Email-1: <a href="mailto:abisatya.diwangkara@gmail.com">abisatya.diwangkara@gmail.com</a></li>
                      <li className='text-start text-light mb-3'><BiSolidCoffeeBean /> Email-2: <a href="mailto:adebond2002@gmail.com">adebond2002@gmail.com</a></li>
                      <li className='text-start text-light mb-3'><BiSolidCoffeeBean /> Location <a href="https://maps.app.goo.gl/qDuZMTRaRKcDGZKo8">Kluwung beans & vanilla Location</a></li>
                    </ul> */}

                    <MapView className='text-start text-light mb-3' id='map-view' />
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='card' id='contact-card'>
                  <div className='card-body' id='contact-card-body'>
                    <h2 className='h5 text-start text-uppercase border-bottom pb-2 text-light fw-bold'>Contact form</h2>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInputuser" placeholder="yourname"></input>
                      <label htmlFor="floatingInputuser">Your Name</label>
                    </div>

                    <div className="form-floating mb-3 ">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                      <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3 ">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                      <label htmlFor="floatingTextarea">Comments</label>
                    </div>

                    <button type='button' className='btn mt-2 mb-2 p-2' id='contact-submit'>Submit</button>
                  </div>
                </div>
              </div>
            </main>



        </main>
      </section>
    </>
  )
}

export default Contact
