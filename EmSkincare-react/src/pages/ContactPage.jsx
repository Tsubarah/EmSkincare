import phone from '/assets/icons/phone.png';
import mail from '/assets/icons/email.png';
import location from '/assets/icons/location.png';
import facebook from '/assets/icons/facebookMini2.png'
import emSkincareClinic from '/assets/images/emSkincareClinic.jpg';
import './ContactPage.css'
import PageTransition from '../components/animations/PageTransition';
import SwipeInFromBottom from '../components/animations/SwipeInFromBottom';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="contact-wrapper">
        <div className="contact-container">
          <img src={emSkincareClinic} alt="" />
          <article className="contact-intro">
            <h1>Contact us</h1>
            <div className="contact-description">
              <p>Whether you want to know more about our offers, make an appointment for a treatment or come for a cconsultation, you are welcome to contact us. Below you will find contact information for our clinic</p>
            </div>
            <div className="opening-hours">
              <h2>Opening Hours</h2>
              <p>Monday - Friday: 08.30 - 16.00</p>
              <p>Saturday - Sunday: 10.00 - 16.00</p>
              <p>Lunch closed: 12.00 - 13.00</p>
            </div>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              className="facebook-btn"
            >
              <img src={facebook} alt="" />
              Like us on facebook!
            </a>
          </article>
        </div>
        <SwipeInFromBottom>
          <div className="contact-info">
            <div className="adress">
              <img src={location} alt="" />
              <h4>ADRESS</h4>
              <p>Kamrergatan 11, 211 56 Malmö</p>
            </div>

            <div className="mail">
              <img src={mail} alt="" />
              <h4>E-MAIL</h4>
              <p>benjamin@tsubarah.com</p>
            </div>
            
            <div className="phone">
              <img src={phone} alt="" />
              <h4>PHONE</h4>
              <p>+46722896917</p>
            </div>
          </div>
        </SwipeInFromBottom>
      </div>
    </PageTransition>
  )
}
