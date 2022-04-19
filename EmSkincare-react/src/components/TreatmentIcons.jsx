import React from 'react'

export default function TreatmentIcons() {
  return (
      <>
      <h2>Our Treatments</h2>
      <div className="treatment-container">
        <div className="treatment">
          <div className="treatment-icon">
            <img src="./assets/icons/facial-treatment.png" alt="" />
          </div>
          <div className="treatment-title">
            <h6>Facial</h6>
          </div>
        </div>
  
        <div className="treatment">
          <div className="treatment-icon"> 
            <img src="./assets/icons/eyebrow.png" alt="" />
          </div>
          <div className="treatment-title">
            <h6>Lashes & Brows</h6>
          </div>
        </div>

        <div className="treatment">
          <div className="treatment-icon"> 
            <img src="./assets/icons/massage.png" alt="" />
          </div>
          <div className="treatment-title">
            <h6>Massage</h6>
          </div>
        </div>

        <div className="treatment">
          <div className="treatment-icon"> 
            <img src="./assets/icons/body.png" alt="" />
          </div>
          <div className="treatment-title">
            <h6>Body</h6>
          </div>
        </div>

        <div className="treatment">
          <div className="treatment-icon"> 
            <img src="./assets/icons/waxing.png" alt="" />
          </div>
          <div className="treatment-title">
            <h6>Waxing</h6>
          </div>
        </div>
  
        <div className="treatment">
          <div className="treatment-icon">
            <img src="./assets/icons/pedicure.png" alt="" />
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
