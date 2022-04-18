import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
  return (
  <main class="wrapper">
    <Hero />

    <section class="treatments">
      <h2>Our Treatments</h2>
      <div class="treatment-container">
        <div class="treatment">
          <div class="treatment-icon">
            <img src="./assets/icons/facial-treatment.png" alt="" />
          </div>
          <div class="treatment-title">
            <h6>Facial</h6>
          </div>
        </div>
  
        <div class="treatment">
          <div class="treatment-icon"> 
            <img src="./assets/icons/eyebrow.png" alt="" />
          </div>
          <div class="treatment-title">
            <h6>Lashes & Brows</h6>
          </div>
        </div>

        <div class="treatment">
          <div class="treatment-icon"> 
            <img src="./assets/icons/massage.png" alt="" />
          </div>
          <div class="treatment-title">
            <h6>Massage</h6>
          </div>
        </div>

        <div class="treatment">
          <div class="treatment-icon"> 
            <img src="./assets/icons/body.png" alt="" />
          </div>
          <div class="treatment-title">
            <h6>Body</h6>
          </div>
        </div>

        <div class="treatment">
          <div class="treatment-icon"> 
            <img src="./assets/icons/waxing.png" alt="" />
          </div>
          <div class="treatment-title">
            <h6>Waxing</h6>
          </div>
        </div>
  
        <div class="treatment">
          <div class="treatment-icon">
            <img src="./assets/icons/pedicure.png" alt="" />
          </div>
          <div class="treatment-title">
            <h6>Pedicure</h6>
          </div>
        </div>

        {/* <div class="treatment">
          <div class="treatment-icon">
            <img src="./assets/icons/facial-treatment.png" alt="" />
          </div>
          <div class="treatment-title">
            <h6>Special</h6>
          </div>
        </div> */}
      </div>
      
      <p>Get your treatment done for a great mood. Simple pleasures can make your week, not just day</p>
      
      <a href="/treatments.html" class="treatment-btn">VIEW SERVICE MENU</a>
    </section>
  </main>
  )
}
