import React from "react"

const Service = ({ section, name, description, item }) => {
  return (
    <section className={`${section} section-wrapper`}>
      <div className="service-section-intro">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="services">
        {item.map(item => {
          return  <div 
                    className="service" 
                    key={item.itemName}
                  >
                    <div className="service-description">
                      <h4>{item.itemName}</h4>
                      <p>{item.itemDescription}</p>
                      <p>{item.duration}</p>
                    </div>
                    <div className="service-price">
                      <p>€{item.price}</p>
                    </div>
                  </div>
          })
        }
      </div>
    </section>
  )
}

export default Service
