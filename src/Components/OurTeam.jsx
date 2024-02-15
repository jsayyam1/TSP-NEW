import React, { useEffect } from 'react'
import '../styles/ourteam.css'
import img1 from '../Assets/IMG-20231228-WA0016.jpg'
import img2 from '../Assets/Sayyam_Jain.jpg'
import img3 from '../Assets/IMG-20231228-WA0017.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurTeam() {

    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);

  return (
  <React.Fragment>
<section id="ourteam-container">
    <h1 style={{color: 'black', textAlign: 'center'}}>With pride, we unveil our formidable and goal-oriented team!</h1>

    <div id="ourteam">

        <div className="box" data-aos="flip-right">
            <div className="img-box">
                <img src={img1} alt="teammember1-img"></img>
            </div>

            <div className="text-box">
                <h2 className="h-secondary center"><span id="clr-txt">Avyay</span> Tandon</h2>
                <p className="center">
                    Avyay Tandon, our esteemed and visionary CEO, brings a wealth of experience, championing
                    strategic development and fostering a dynamic business-centric culture. Guided by a
                    forward-looking vision, he expertly navigates the organization, inspiring each team member to
                    strive for excellence in every endeavor. Avyay's transformative leadership enriches our
                    enterprise with extensive expertise and a steadfast commitment to lasting success.
                </p>
            </div>
        </div>


        <div className="box" data-aos="flip-right">
            <div className="img-box">
                <img src={img2} alt="teammember2-img"></img>
            </div>

            <div className="text-box">
                <h2 className="h-secondary center"><span id="clr-txt">Sayyam</span> Jain</h2>
                <p className="center">
                    Sayyam Jain, an adept strategic visionary, propels operational excellence, demonstrating a keen
                    focus on efficiency, and an ardent passion for innovation. Actively overseeing daily operations,
                    he ensures seamless execution, sustainable growth, and fosters a collaborative environment.
                    Apart from excelling in entrepreneurship, Sayyam distinguishes himself as a professional
                    cricketer, dedicated reader, and prolific blog writer.
                </p>
            </div>
        </div>


        <div className="box" data-aos="flip-right">
            <div className="img-box">
                <img src={img3} alt="teammember3-img"></img>
            </div>

            <div className="text-box">
                <h2 className="h-secondary center"><span id="clr-txt">Yash</span> Mitra</h2>
                <p className="center">
                    Yash Mitra, a versatile CFO adeptly merges technical prowess with marketing, social media and
                    design. Beyond work, my dedication spans fitness, culinary arts and literature. Committed to
                    excellence and driven by success, I eagerly apply my diverse skills, making meaningful
                    contributions. Embracing challenges as opportunities, I believe success stems from determination
                    and adaptability. Let's collaborate for innovation and growth!</p>
            </div>
        </div>
    </div>
</section>
<div style={{marginTop: '-200px'}}></div>
</React.Fragment>

  )
}

export default OurTeam;
