import Hero from '../components/Hero'
import TreatmentIcons from '../components/TreatmentIcons'

export default function HomePage() {
  return (
  <main className="wrapper">
    <Hero />

    <section className="treatments">
      <TreatmentIcons />
      
      <p>Get your treatment done for a great mood. Simple pleasures can make your week, not just day</p>
      
      <a href="/treatments.html" className="treatment-btn">VIEW SERVICE MENU</a>
    </section>
  </main>
  )
}
