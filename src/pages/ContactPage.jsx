import phone from '/assets/icons/phone.png';
import mail from '/assets/icons/email.png';
import location from '/assets/icons/location.png';
import instagram from '/assets/icons/instagram.svg'
import emSkincareClinic from '/assets/images/emSkincareClinic.jpg';
import PageTransition from '../components/animations/PageTransition';
import SwipeInFromBottom from '../components/animations/SwipeInFromBottom';
import './ContactPage.css'

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
              <h2>Opening hours</h2>
              <p>Tuesday - Saturday: 10.00 - 18.00</p>
            </div>
            <a 
              href="https://instagram.com/em.skincare.antibes?igshid=YmMyMTA2M2Y=" 
              target="_blank" 
              className="instagram-btn"
            >
              <img src={instagram} alt="Icon of Instagram" />
              Like us on Instagram!
            </a>
          </article>
        </div>
        <SwipeInFromBottom>
          <div className="contact-info">
            <div className="adress">
              <img src={location} alt="" />
              <h4>ADRESS</h4>
              <p>16 Rue du marc, Antibes 06600</p>
            </div>

            <div className="mail">
              <img src={mail} alt="" />
              <h4>E-MAIL</h4>
              <p>info@emskincare.fr</p>
            </div>
            
            <div className="phone">
              <img src={phone} alt="" />
              <h4>PHONE</h4>
              <p>+339 83 99 02 45</p>
            </div>
          </div>
        </SwipeInFromBottom>
      </div>
    </PageTransition>
  )
}
