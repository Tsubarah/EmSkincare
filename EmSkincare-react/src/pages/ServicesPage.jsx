import React from 'react'
import Service from '../components/Service'

export default function ServicesPage() {
  
  const services = [
    {
      section: "lashes-brows",
      name: "Lashes & Brows",
      description: "Brows can change it all. Try out styling and tinting your brows and see the difference.",
      item: [
        {
          itemName: "Lash Lift 60",
          itemDescription: "Add content",
          price: 99,
          duration: "20min",
        },
      ],
    },
  ]

  return (
    services.map(service => {
      <Service
        section={service.section}
        name={service.name}
        description={service.description}
        item={service.item}
        itemName={service.item[0].itemName}
        itemDescription={service.item[0].itemDescription}
        itemPrice={service.item[0].price}
        // itemDuration={service.item[0].duration}
      />
    })
  //   <main className="wrapper">
  //   <section className="treatment-info">
  //     <div className="info-text">
  //       <h1>What to consider before treatment:</h1>
  //       <p>Feel free to come 5 minutes before your appointment, it can be nice to sit down and take a few deep breaths before it is time for your treatment. Please let us know if you would not be able to show up for your appointment - at the latest, the day before.</p>
  //       <p>If you have allergies or hypersensitivity, we would appreciate if you let us know when you book your appointment. In this way, we have time to go through all the products in peace, and your treatment will not suffer.</p>
  //     </div>
  //   </section>

  //   <section className="facial section-wrapper">
  //     <div className="service-section-intro">
  //       <h2>Facial & Body Treatments</h2>
  //       <p> A 90 minute facial is recommended for costumers in need of longer extraction or a longer massage.</p>
  //     </div>
      
  //     <div className="services">
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Facial 60</h4>
  //           <p>Includes cleansing, peeling, steam, extraction, massage, mask, cream. (60 min)</p>
  //         </div>
  //         <div className="service-price">€67</div>
  //       </div>
        
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Facial 75</h4>
  //           <p>Includes cleansing, peeling, steam, extraction, massage, mask, cream, brow shaping. (75 min)</p>
  //         </div>
  //         <div className="service-price">€72</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Facial 90</h4>
  //           <p>Includes cleansing, peeling, steam, extraction, massage, mask, cream, brow shaping. (90 min)</p>
  //         </div>
  //         <div className="service-price">€79</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Facemapping</h4>
  //           <p>When Facemapping, we look over your skin and what it needs. Free when buying products in combination with the treatment. (15 min)</p>
  //         </div>
  //         <div className="service-price">€19</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Dermalogica Pro Eye Flash</h4>
  //           <p>Add an eye treatment to your appointment.</p>
  //           <p>A professional eye treatment with chemical peeling. The peeling is powerful enough to reduce fine lines and irregularities, but at the same time adapted not to irritate the thin skin. (15 min)</p>
  //         </div>
  //         <div className="service-price">€25</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Back Treatment</h4>
  //           <p>Includes cleansing, peeling, steam, extraction, massage, mask, cream. (60 min)</p>
  //         </div>
  //         <div className="service-price">€59</div>
  //       </div>
  //     </div>
  //   </section>

  //   <section className="lashes-brows section-wrapper">
  //     <div className="service-section-intro">
  //       <h2>Lashes & Brows</h2>
  //       <p>Brows can change it all. Try out styling and tinting your brows and see the difference.</p>
  //     </div>
      
  //     <div className="services">
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Lash Lift 60</h4>
  //           <p>Add content</p>
  //         </div>
  //         <div className="service-price">€65</div>
  //       </div>
        
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Lash Lift 75</h4>
  //           <p>With lash or brow tinting. (75 min)</p>
  //         </div>
  //         <div className="service-price">€75</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Lash Lift 90</h4>
  //           <p>With lash and brow tinting including shaping. (90 min)</p>
  //         </div>
  //         <div className="service-price">€85</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Lash & Brow Tinting</h4>
  //           <p>Including brow shaping. (45 min)</p>
  //         </div>
  //         <div className="service-price">€35</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Lash Tinting</h4>
  //           <p>Add content (30 min)</p>
  //         </div>
  //         <div className="service-price">€22</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Brow Tinting</h4>
  //           <p>Including brow shaping. (45 min)</p>
  //         </div>
  //         <div className="service-price">€35</div>
  //       </div>
  //     </div>
  //   </section>

  //   <section className="massage section-wrapper">
  //     <div className="service-section-intro">
  //       <h2>Massage</h2>
  //       <p>A well needed massage can improve your performance by reducing stress.</p>
  //     </div>
      
  //     <div className="services">
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Full-Body</h4>
  //           <p>Relaxing Spa-massage. (60 min)</p>
  //         </div>
  //         <div className="service-price">€64</div>
  //       </div>
        
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Full-Body Luxe</h4>
  //           <p>Includes face- and head massage. (90 min)</p>
  //         </div>
  //         <div className="service-price">€89</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Half-Body</h4>
  //           <p>Relaxing half-body (back and legs) massage. (30 min)</p>
  //         </div>
  //         <div className="service-price">€45</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Facial Massage</h4>
  //           <p>Add content. (30 min)</p>
  //         </div>
  //         <div className="service-price">€35</div>
  //       </div>
  //     </div>
  //   </section>

  //   <section className="waxing section-wrapper">
  //     <div className="service-section-intro">
  //       <h2>Waxing</h2>
  //       <p>Add content about waxing</p>
  //     </div>
      
  //     <div className="services">
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Full Legs</h4>
  //           <p>Add Content (60 min)</p>
  //         </div>
  //         <div className="service-price">€55</div>
  //       </div>
        
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Half Legs</h4>
  //           <p>Add Content (30 min)</p>
  //         </div>
  //         <div className="service-price">€35</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Bikini</h4>
  //           <p>Add Content (30 min)</p>
  //         </div>
  //         <div className="service-price">€29</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Full Legs & Bikini</h4>
  //           <p>Add content. (90 min)</p>
  //         </div>
  //         <div className="service-price">€75</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Half Legs & Bikini</h4>
  //           <p>Add content. (60 min)</p>
  //         </div>
  //         <div className="service-price">€48</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Arms</h4>
  //           <p>Add content. (30 min)</p>
  //         </div>
  //         <div className="service-price">€30</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Underarms</h4>
  //           <p>Add content. (15 min)</p>
  //         </div>
  //         <div className="service-price">€18</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Back</h4>
  //           <p>Add content. (30 min)</p>
  //         </div>
  //         <div className="service-price">€35</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Stomach</h4>
  //           <p>Add content. (30 min)</p>
  //         </div>
  //         <div className="service-price">€40</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Full Face</h4>
  //           <p>Add content. (30 min)</p>
  //         </div>
  //         <div className="service-price">€25</div>
  //       </div>

  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Specific Part Of Face</h4>
  //           <p>Add content. (15 min)</p>
  //         </div>
  //         <div className="service-price">€18</div>
  //       </div>
  //     </div>
  //   </section>

  //   <section className="pedicure section-wrapper">
  //     <div className="service-section-intro">
  //       <h2>Pedicure</h2>
  //       <p>Add content about pedicure</p>
  //     </div>
      
  //     <div className="services">
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Pedicure</h4>
  //           <p>Pedicure without color. (60 min)</p>
  //         </div>
  //         <div className="service-price">€45</div>
  //       </div>
        
  //       <div className="service">
  //         <div className="service-description">
  //           <h4>Pedicure Color</h4>
  //           <p>Pedicure with color. (75 min)</p>
  //         </div>
  //         <div className="service-price">€55</div>
  //       </div>
  //     </div>
  //   </section>
  // </main>
  )
}
