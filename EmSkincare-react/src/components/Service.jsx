import React from "react"

const Service = ({ section, name, description, item }) => (
    <section className={`${section} section-wrapper`}>
      <div className="service-section-intro">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="services">
        <div className="service">
          <div className="service-description">
            <h4>{item}</h4>
            <p>{item.itemDescription}</p>
          </div>
          <div className="service-price">{item.price}</div>
        </div>
      </div>
    </section>
)

export default Service
