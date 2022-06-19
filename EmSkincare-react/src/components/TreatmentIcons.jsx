import body from '/assets/icons/body.png'
import eyebrow from '/assets/icons/eyebrow.png'
import face from '/assets/icons/facial-treatment.png'
import massage from '/assets/icons/massage.png'
import pedicure from '/assets/icons/pedicure.png'
import wax from '/assets/icons/waxing.png'

export default function TreatmentIcons() {
  return (
      <>
        <h2>Our Treatments</h2>
        <div className="treatment-container">
          <div className="treatment">
            <div className="treatment-icon">
              <img src={face} alt="" />
            </div>
            <div className="treatment-title">
              <h6>Facial</h6>
            </div>
          </div>
    
          <div className="treatment">
            <div className="treatment-icon"> 
              <img src={eyebrow} alt="" />
            </div>
            <div className="treatment-title">
              <h6>Lashes & Brows</h6>
            </div>
          </div>

          <div className="treatment">
            <div className="treatment-icon"> 
              <img src={massage} alt="" />
            </div>
            <div className="treatment-title">
              <h6>Massage</h6>
            </div>
          </div>

          <div className="treatment">
            <div className="treatment-icon"> 
              <img src={body} alt="" />
            </div>
            <div className="treatment-title">
              <h6>Body</h6>
            </div>
          </div>

          <div className="treatment">
            <div className="treatment-icon"> 
              <img src={wax} alt="" />
            </div>
            <div className="treatment-title">
              <h6>Waxing</h6>
            </div>
          </div>
    
          <div className="treatment">
            <div className="treatment-icon">
              <img src={pedicure} alt="" />
            </div>
            <div className="treatment-title">
              <h6>Pedicure</h6>
            </div>
          </div>

          {/* <div className="treatment">
            <div className="treatment-icon">
              <img src="./assets/icons/facial-treatment.png" alt="" />
            </div>
            <div className="treatment-title">
              <h6>Special</h6>
            </div>
          </div> */}
        </div>
      </>
  )
}
