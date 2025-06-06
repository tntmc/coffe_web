import React from 'react'

// styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/Commitment.css'

// components
import SliderCommitment from '../components/sliderCommitment'

function Commitment() {
  return (
    <>
      <section id='Commitment'>

        <main className="row mx-auto p-3">
          <h1 className='fw-bold text-uppercase text-light'>Our Commitment</h1>
          <h2 className='h5 text-light'>See Kluwung beans & vanilla vision and mission</h2>
          {/* <div className="col-md-6">

          </div>
          <div className="col-md-6">

          </div> */}
        </main>

        <SliderCommitment/>
      </section>
    </>
  )
}

export default Commitment
