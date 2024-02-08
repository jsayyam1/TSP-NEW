import React from 'react'
import '../styles/style.css'
import aboutimg from '../Assets/image-removebg-preview (3) 1.png'

function Services() {
  return (
    <>
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
        <div className='ourservices-grid'>
          <div className='service-card'>
            <h1>Consultancy</h1>
            <p>
              Our consultancy services are intricately crafted to empower businesses with strategic planning across pivotal domains. 
              From meticulous financial planning to impactful PR strategies, we specialize in delivering comprehensive solutions. 
              Our expertise extends to the dynamic realm of digital marketing, where we design campaigns resonating with your target 
              audience. Another forte is social media management, ensuring a robust online presence and fostering engagement.
            </p>
          </div>
          <div className='service-card'>
            <h1>Incubation Space</h1>
            <p>
              Championing innovation, we extend incubation space to nascent startups. Acknowledging the potential for reciprocal growth, 
              we furnish not only physical infrastructure but also invest in our clients' ventures, fostering a partnership that transcends 
              conventional support. In reciprocation for our investment, we secure a percentage of equity, aligning our interests seamlessly 
              with the success of the startups we nurture.
            </p>
          </div>
          <div className='service-card'>
            <h1>Digital Marketing</h1>
            <p>
              Our comprehensive digital marketing services are intricately designed to enhance your brand's presence in the digital realm. 
              Encompassing the creation of compelling content and the implementation of SEO strategies, we address all aspects of online 
              visibility. Central to our approach is adept social media management, amplifying your brand's voice across diverse platforms, 
              fostering engagement, and cultivating a devoted audience.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
