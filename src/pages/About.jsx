// import React, {useState, useEffect} from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/About.css'

// components
import SliderAbout from '../components/slider/SliderAbout'


function About() {

  // const [isexpand, setisexpand] = useState(true);

  //   useEffect (() => {
  //     document.body.classList.toggle('expand', isexpand);
  //   }, [isexpand]);

  //   const toggleexpand = () => {
  //     setisexpand(prev => !prev);
  //   }

  return (
    <>
      <section id='About'>

        <main className="row mx-auto p-3">
          <h1 className='fw-bold text-uppercase text-light' id='about-title'>About Kluwung</h1>
          <h2 className='h5 text-light pb-2' id='about-subtitle'>See Kluwung beans & vanilla story</h2>
          {/* <div className="col-md-6">

          </div>
          <div className="col-md-6">

          </div> */}
        </main>

        <SliderAbout />
      </section>
    </>
  )
}

export default About
