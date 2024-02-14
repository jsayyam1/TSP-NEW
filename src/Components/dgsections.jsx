import React from 'react'
import '../styles/style.css'
import img from '../Assets/dtabout.png'
import img2 from '../Assets/dtapproach.png'
import img3 from '../Assets/dtsession.png'
import img4 from '../Assets/dtend.png'

function dgsections() {

  // useEffect(() => {
  //   AOS.init({duration: 2000});
  // }, []);

  return (
    <>
      <div className='aboutus-section'>
        <div data-aos="fade-bottom">
          <h1>About Us</h1> 
        </div>
        <div className="aboutus-grid">
          <div>
            <img src={img} alt="" data-aos="fade-right" />
          </div>
          <div className='grid' data-aos="fade-left">
            <p>
              At Dragon Talks, we cultivate a vibrant and supportive atmosphere dedicated to refining your public speaking prowess. 
              Led by seasoned trainers, our program covers essential facets such as body language, voice modulation, and presentation 
              structure. Gain skills to engage audiences, conquer nerves, and adeptly handle challenging queries.
            </p>
            <p>
              Our commitment extends beyond the professional realm—we believe learning should be enjoyable. 
              Balancing informativeness and entertainment, our program facilitates connections among participants, fostering a community where experiences are shared, and insights are gained.
            </p>
            <p>
                Embrace a collaborative spirit as you interact with like-minded individuals, drawing inspiration from their triumphs and overcoming challenges together. At Dragon Talks, we redefine the learning experience by infusing enjoyment into every session.
                And, of course, relish the thrill of delivering impactful presentations that captivate and resonate. With Dragon Talks, turning that vision into reality becomes second nature. Join us in creating a fun, supportive environment where you can truly become the best public speaker you aspire to be!
            </p>
          </div>
        </div>

        <br />

        <div data-aos="fade-bottom">
          <h1>Our Approach To Public Speaking Mastery</h1> 
        </div>
        <div className="aboutus-grid">
          <div className='grid' data-aos="fade-left">
            <p>
             At Dragon Talks, we craft a unique approach to public speaking mastery, emphasizing a blend of skill development and a 
             supportive atmosphere. Our experienced trainers lead you through the fundamentals, covering essential aspects like body 
             language, voice modulation, and presentation structure. We go beyond the basics, teaching you to engage your audience, conquer
              nervousness, and adeptly navigate challenging questions. Through our distinctive blend of professional guidance and an 
              njoyable learning environment, Dragon Talks ensures you become the best public speaker you can be, making your journey to 
              mastery both rewarding and empowering.
            </p>
          </div>
          <div>
            <img src={img2} alt="" data-aos="fade-right" />
          </div>
        </div>

        <div data-aos="fade-bottom">
          <h1>Unlock Financial Wisdom</h1> 
        </div>
        <div className="aboutus-grid">
          <div>
            <img src={img3} alt="" data-aos="fade-right" />
          </div>
          <div className='grid' data-aos="fade-left">
            <p>
              Embark on a journey to unlock financial wisdom with Dragon Talks! Explore our session schedule designed to provide insights 
              not only into public speaking mastery but also financial acumen. Our diverse sessions cover topics that bridge the gap 
              between effective communication and financial intelligence. Join us to discover the intersection of eloquence and financial 
              wisdom, setting the stage for a well-rounded and empowered professional journey. Check out our schedule and seize the 
              opportunity to enhance both your speaking skills and financial knowledge with Dragon Talks.
            </p>
          </div>
        </div>

        <div data-aos="fade-bottom">
          <h1>Get In Touch</h1> 
        </div>
        <div className="aboutus-grid">
          <div className='grid' data-aos="fade-left">
            <p>
              Ready to embark on a transformative journey with Dragon Talks? Connect with us to discover how our dynamic programs can 
              elevate your public speaking skills and financial wisdom. Whether you're an aspiring speaker or someone seeking valuable 
              financial insights, our team is here to guide you. Reach out, and let's explore the possibilities together. Get in touch with 
              Dragon Talks, where your path to becoming a confident public speaker and gaining financial wisdom begins.
            </p>
          </div>
          <div>
            <img src={img4} alt="" data-aos="fade-right" />
          </div>
        </div>
      </div>
    </>
  )
}

export default dgsections
