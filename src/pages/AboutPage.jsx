import './AboutPage.css'
import emelie from '/assets/images/EmelieProfile.jpg'
import PageTransition from '../components/animations/PageTransition'

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="wrapper">
        <section className="about-emskincare">
          <div classname="about-emskincare-text">
            <p><strong>Emskincare</strong> is a Scandinavian/English speaking skincare salon located in Antibes, and my vision is to make everyone feel welcome and to be able to enjoy a relaxing treatment. In addition, I will be able to help and guide you with your questions and needs, walk you through your skincare routine and help you to choose products suited for your personal needs.</p>
            <p>Skincare is a science and being well informed and having a basic understanding leads to results that will last long after you leave the salon.</p>
          </div>
        </section>
        <section className="about-me">
          <div className="about-me-container">
            <img src={emelie} alt="Image of Emelie" />
            
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
    </PageTransition>
  )
}
