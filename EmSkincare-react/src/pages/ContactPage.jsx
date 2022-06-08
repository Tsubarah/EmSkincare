import phone from '/assets/icons/telephone.png';
import mail from '/assets/icons/email.png';
import location from '/assets/icons/address.png';
import emSkincareClinic from '/assets/images/emSkincareClinic.jpg';
import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">
        Contact us
      </h1>
      <div className="contact-container">
        <img src={emSkincareClinic} alt="" />
      </div>

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
          {/* <p>Mon-Fri 10-16</p> */}
        </div>
      </div>
      
    </div>
  )
}
