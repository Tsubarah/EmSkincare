import './AboutPage.css'
import emelie from '/assets/images/EmelieProfile.jpg'

export default function AboutPage() {
  return (
    <main className="wrapper">
    <section className="about-me">
      <div className="about-me-container">
        <img src={emelie} alt="placeholder for Emelie" />
        
        <div className="about-me-text">
          <h1>Our Story</h1>
          <p>My name is Emelie and I grew up in Malmö, Sweden. I started working on super yachts as a stewardess in 2011, before following my dreams to take my degree as a Cidesco certified esthetician in 2018. In recent years I have worked at both spa facilities and salons.</p>

          <p>I moved to France in 2021 and decided to open EmSkincare at Rue du marc in Antibes. I look forward to taking care of you.</p>

          <h3>- Emelie Glans</h3>
      </div>
      </div>
    </section>
    <section className="about-emskincare">

    </section>
  </main>
  )
}
