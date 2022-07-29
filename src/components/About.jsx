import React from 'react';
import '././styles/about.css';

const About = () => {
  return (
    <div className='about'>
        <h4>About Us</h4>
        <div className="s-contact-info-text">Haile Selassie Avenue<br/>
        P.O BOX 52428-00200 Nairobi</div>
        <div className="s-contact-info-item s-font-body"></div>
        <div className="s-contact-info-text">From Mon-FRI<br/>7AM-5PM</div>

        <div className="s-contact-info-item s-font-body s-show-in-small-screen">
            <a href="tel:+254112 680 887">
                {/* <div className="s-contact-info-icon">
                    <div className="entypo-mobile"></div>
                </div> */}
                <div className="s-contact-info-text">+254112 680 887</div>
            </a>
        </div>

        <div className="s-contact-info-item s-font-body s-show-in-large-screen">
            {/* <div className="s-contact-info-icon">
               <div className="entypo-mobile"></div>
            </div> */}
        </div>

        <div className="s-contact-info-item s-font-body">
            <a href="mailto:fpioneer19@gmail.com">
                {/* <div className="s-contact-info-icon">
                <div className="entypo-mail"></div>
                </div> */}
                <div className="s-contact-info-text">fpioneer19@<wbr/>gmail.com</div>
            </a>
        </div>

    </div>
  )
}

export default About