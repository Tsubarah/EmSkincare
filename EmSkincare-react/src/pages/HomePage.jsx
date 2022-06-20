import Hero from '../components/Hero'
import TreatmentIcons from '../components/TreatmentIcons'
import './HomePage.css'
import PageTransition from '../components/animations/PageTransition'
import SwipeInFromBottom from '../components/animations/SwipeInFromBottom'
import { iconsInfo } from '../services/HomePageIconsInfo'

const iconsInfoCopy = [...iconsInfo]

export default function HomePage() {
  return (
  <PageTransition>
    <main className="wrapper">
      <Hero />

      <section className="treatments">
        <h2>Our Treatments</h2>
        <SwipeInFromBottom>
          <div className="treatment-container">
            {iconsInfoCopy.map(icon => (
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
