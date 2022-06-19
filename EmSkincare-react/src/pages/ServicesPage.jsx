import { services } from '../services/services'
import Service from '../components/Service'
import './ServicesPage.css'
import PageTransition from '../components/animations/PageTransition'

export default function ServicesPage() {
  
  const servicesCopy = [...services]

  return ( 
    <PageTransition>
      <main className="wrapper">
        <section className="service-info">
          <div className="service-info-text">
            <h1>What to consider before treatment:</h1>
            <p>Feel free to come 5 minutes before your appointment, it can be nice to sit down and take a few deep breaths before it is time for your treatment. Please let us know if you would not be able to show up for your appointment - at the latest, the day before.</p>
            <p>If you have allergies or hypersensitivity, we would appreciate if you let us know when you book your appointment. In this way, we have time to go through all the products in peace, and your treatment will not suffer.</p>
          </div>
        </section>
        {
        servicesCopy.map(service => 
          <Service
            key={service.section}
            section={service.section}
            name={service.name}
            description={service.description}
            item={service.items}
          />
          )
        }
      </main>
    </PageTransition>
  )
}
