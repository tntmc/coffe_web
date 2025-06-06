import React, {useState}  from 'react'
import { Link } from 'react-router-dom'

// styling
import './style/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// components
import { RiMenu3Line } from 'react-icons/ri'

// assets
import Logo from '../assets/image/Logo.png'

function Navbar() {

  const [navScroll, setScroll] = useState(false)
  const handleScroll = () => {
    if (window.scrollY >= 40) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <>
      <section id='navbar'>
        <nav className={`z-4 navbar fixed-top navbar-expand-lg mx-auto mt-2 ${navScroll ? 'navbar-scroll' : 'navbar'}`} id='nav' style={{width: '85%'}}>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/' id='logo'>
              <img src={Logo} alt="logo" className='img-fluid' style={{width: '2em', height: '2em', marginInline: '0.35em', borderRadius: '50%'}} ></img>
              <span className='me-2 text-white d-lg-none d-lg-flex' style={{fontWeight: '600'}} id="product-name">Kluwung</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id='toggle-button' style={{border: 'transparent transparent'}} >
              <span className='text-dark'><RiMenu3Line/></span>
            </button>
            <div className="collapse navbar-collapse show nav text-white" id="navbarNavAltMarkup">
              <ul className='navbar-nav nav-underline'>
                <li className='nav-item'>
                  <a className='nav-link' aria-current="page" href='#Home'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' aria-current="page" href='#About'>About Us</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' aria-current="page" href='#Commitment'>Commitment</a>
                </li>
                {/* <li className='nav-item dropdown'>
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#" aria-expanded="false" id='dropdown'>Commitment</a>
                  <ul className='dropdown-menu'>
                      <li className="dropdown-item">
                        <a className="nav-link" aria-current="page" href="#Mockup">Our vision</a>
                      </li>
                      <li className="dropdown-item">
                        <a className="nav-link" aria-current="page" href="#Process">Our mission</a>
                      </li>
                    </ul>
                </li> */}
                <li className='nav-item dropdown'>
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#" aria-expanded="false" id='dropdown'>Gallery</a>
                  <ul className='dropdown-menu'>
                      <li className="dropdown-item">
                        <a className="nav-link" aria-current="page" href="#Gallery">Product</a>
                      </li>
                      {/* <li className="dropdown-item">
                        <a className="nav-link" aria-current="page" href="#Mockups">Mockups</a>
                      </li>
                      <li className="dropdown-item">
                        <a className="nav-link" aria-current="page" href="#Process">Process</a>
                      </li> */}
                      <li className="dropdown-item">
                        <a className="nav-link" aria-current="page" href="#Portfolio">Portfolio</a>
                      </li>
                    </ul>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' aria-current="page" href='#Contact'>Contact</a>
                </li>
                {/* when in breakpoint md this will be appear */}
                <li className='nav-item dropdown d-lg-none d-lg-block'>
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#" aria-expanded="false" id='dropdown'>Languange</a>
                  <ul className='dropdown-menu dropdown-menu-end'>
                    <li className="dropdown-item">
                      <a className="nav-link" aria-current="page" href="/">Eng</a>
                    </li>
                    <li className="dropdown-item">
                      <a className="nav-link" aria-current="page" href="/">Ind</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a className="nav-link dropdown-toggle language-button" role="button" data-bs-toggle="dropdown" href="#" aria-expanded="false" id='lang-dropdown dropdown'>Lang</a>
            <ul className='dropdown-menu dropdown-menu-end'>
              <li className="dropdown-item">
                <a className="nav-link" aria-current="page" href="/">Eng</a>
              </li>
              <li className="dropdown-item">
                <a className="nav-link" aria-current="page" href="/">Ind</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar


 {/* <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/gallery'>Gallery</Link>
              <Link className='nav-link' to='/contact'>Contact</Link> */}