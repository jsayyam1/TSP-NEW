import React from 'react'
import Section from './Section'
import '../styles/style.css'
import aboutimg from '../Assets/image-removebg-preview (3) 1.png'

function Services() {
  return (
    <>
    <Section></Section>
      <div className='aboutus-section'>
        <h1>About Us</h1> 
        <div className="aboutus-grid">
          <div>
            <img src={aboutimg} alt="" />
          </div>
          <div className='grid'>
            <p>
              The Stallion Project (TSP) exemplifies a contemporary business consultancy and incubation center devoted to guiding aspiring 
              entrepreneurs toward success. Unlike conventional firms, TSP wholeheartedly dedicates itself to client triumph. 
              In an innovative approach, we eschew financial charges and, instead, engage intricately in the company's prosperity by 
              acquiring a modest equity stake, ensuring our alignment with the client's journey to success.
            </p>
            <p>
              At TSP, we are deeply committed to incubating and expanding cutting-edge E-businesses within our company. 
              If you possess a uniquely innovative idea, TSP is poised to guide you in transforming it into a tangible reality.
            </p>
          </div>
        </div>

        <h1>Our Services</h1> 
      </div>
    </>
  )
}

export default Services
