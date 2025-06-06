import React, {useState} from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// components
import Navbar from './components/navbar'
import Footer from './components/footer'


// pages
import About from './pages/About'
import Commitment from './pages/Commitment'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function Home() {

  const [containerScroll, setScroll] = useState(false)
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)


  return (
    <>
      <Navbar/>
      <section className={`${containerScroll ? 'Home-scroll' : ''}`} id='Home'>
        <div className={`card mx-auto hero-container ${containerScroll ? 'hero-container-scroll' : 'hero-container'}`} id='home-card'>
          <div className='card-body' id='home-card-body'>

            <div className='d-flex justify-content-center text-start'>
              <h1 className='fw-bold index-1'>Bean</h1>
            </div>
            <div className='d-flex justify-content-center text-center'>
              <h1 className='fw-bold index-2'>&</h1>
            </div>
            <div className='d-flex justify-content-center text-center'>
              <h1 className='fw-bold index-3'>Vanilla</h1>
            </div>

          </div>
        </div>
      </section>
      <About/>
      <Commitment/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
