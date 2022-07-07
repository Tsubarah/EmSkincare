import Hero from '../components/Hero'
import TreatmentIcons from '../components/TreatmentIcons'
import './HomePage.css'
import PageTransition from '../components/animations/PageTransition'
import SwipeInFromBottom from '../components/animations/SwipeInFromBottom'
import { icons } from '../utils/icons'

const iconsCopy = [...icons]

export default function HomePage() {
  return (
  <PageTransition>
    <main className="wrapper">
      <Hero />
      {/* <a 
        href="https://instagram.com/em.skincare.antibes?igshid=YmMyMTA2M2Y=" 
        target="_blank" 
        className="book-btn"
      >
        Book an appointment today
      </a> */}
      <section className="treatments">
        <h2>Our Treatments</h2>
        <SwipeInFromBottom>
          <div className="treatment-container">
            {iconsCopy.map(icon => (
              <TreatmentIcons 
                key={icon.type} 
                iconType={icon.type} 
                iconImg={icon.image} 
                iconDescription={icon.description}
              />
              ))
            }
          </div>
        </SwipeInFromBottom>
        
        <p>Get your treatment done for a great mood. Simple pleasures can make your week, not just day</p>
        
        <a href="/services" className="treatment-btn">VIEW SERVICE MENU</a>
      </section>
    </main>
  </PageTransition>
  )
}
