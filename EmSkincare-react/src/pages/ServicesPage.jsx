import React from 'react'
import Service from '../components/Service'

export default function ServicesPage() {
  
  const services = [
    {
      section: "facial",
      name: "Facial & Body Treatments",
      description: "A 90 minute facial is recommended for costumers in need of longer extraction or a longer massage.",
      items: [
        {
          itemName: "Facial 60",
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream. (60 min)",
          price: 67,
          duration: "60 min",
        },
        {
          itemName: "Facial 75",
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream, brow shaping. (75 min)",
          price: 72,
          duration: "75 min",
        },
        {
          itemName: "Facial 90",
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream, brow shaping. (90 min)",
          price: 79,
          duration: "90 min",
        },
        {
          itemName: "Facemapping",
          itemDescription: "When Facemapping, we look over your skin and what it needs. Free when buying products in combination with the treatment. (15 min)",
          price: 19,
          duration: "15 min",
        },
        {
          itemName: "Dermalogica Pro Eye Flash",
          itemDescription: "A professional eye treatment with chemical peeling. The peeling is powerful enough to reduce fine lines and irregularities, but at the same time adapted not to irritate the thin skin. (15 min)",
          price: 25,
          duration: "15 min",
        },
        {
          itemName: "Back Treatment",
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream. (60 min)",
          price: 59,
          duration: "60 min",
        },
      ]
    },
    {
      section: "lashes-brows",
      name: "Lashes & Brows",
      description: "Brows can change it all. Try out styling and tinting your brows and see the difference.",
      items: [
        {
          itemName: "Lash Lift 60",
          itemDescription: "Add content",
          price: 65,
          duration: "20 min",
        },
        {
          itemName: "Lash Lift 75",
          itemDescription: "With lash or brow tinting. (75 min)",
          price: 75,
          duration: "75 min",
        },
        {
          itemName: "Lash Lift 90",
          itemDescription: "With lash and brow tinting including shaping. (90 min)",
          price: 85,
          duration: "90 min",
        },
        {
          itemName: "Lash & Brow Tinting",
          itemDescription: "Including brow shaping. (45 min)",
          price: 35,
          duration: "45 min",
        },
        {
          itemName: "Lash Tinting",
          itemDescription: "Add content (30 min)",
          price: 22,
          duration: "30 min",
        },
        {
          itemName: "Brow Tinting",
          itemDescription: "Including brow shaping. (45 min)",
          price: 35,
          duration: "45 min",
        },
      ],
    },
    {
      section: "massage",
      name: "Massage",
      description: "A well needed massage can improve your performance by reducing stress.",
      items: [
        {
          itemName: "Full-Body",
          itemDescription: "Relaxing Spa-massage. (60 min)",
          price: 64,
          duration: "60 min",
        },
        {
          itemName: "Full-Body Luxe",
          itemDescription: "Includes face- and head massage. (90 min)",
          price: 89,
          duration: "90 min",
        },
        {
          itemName: "Half-Body",
          itemDescription: "Relaxing half-body (back and legs) massage. (30 min)",
          price: 45,
          duration: "30 min",
        },
        {
          itemName: "Facial Massage",
          itemDescription: "Add content. (30 min)",
          price: 35,
          duration: "30 min",
        },
      ],
    },
    {
      section: "waxing",
      name: "Waxing",
      description: "Add content about waxing",
      items: [
        {
          itemName: "Full Legs",
          itemDescription: "Add Content (60 min)",
          price: 55,
          duration: "60 min",
        },
        {
          itemName: "Half Legs",
          itemDescription: "Add Content (30 min)",
          price: 35,
          duration: "30 min",
        },
        {
          itemName: "Bikini",
          itemDescription: "Add Content (30 min)",
          price: 29,
          duration: "30 min",
        },
        {
          itemName: "Full Legs & Bikini",
          itemDescription: "Add Content (90 min)",
          price: 75,
          duration: "90 min",
        },
        {
          itemName: "Half Legs & Bikini",
          itemDescription: "Add Content (60 min)",
          price: 48,
          duration: "60 min",
        },
        {
          itemName: "Arms",
          itemDescription: "Add Content (30 min)",
          price: 30,
          duration: "30 min",
        },
        {
          itemName: "Underarms",
          itemDescription: "Add Content (15 min)",
          price: 18,
          duration: "15 min",
        },
        {
          itemName: "Back",
          itemDescription: "Add Content (30 min)",
          price: 35,
          duration: "30 min",
        },
        {
          itemName: "Stomach",
          itemDescription: "Add Content (30 min)",
          price: 40,
          duration: "30 min",
        },
        {
          itemName: "Full Face",
          itemDescription: "Add Content (30 min)",
          price: 25,
          duration: "30 min",
        },
        {
          itemName: "Specific Part of Face",
          itemDescription: "Add Content (15 min)",
          price: 18,
          duration: "15 min",
        },
      ],
    },
    {
      section: "pedicure",
      name: "Pedicure",
      description: "Add content about pedicure",
      items: [
        {
          itemName: "Pedicure",
          itemDescription: "Pedicure without color. (60 min)",
          price: 45,
          duration: "60 min",
        },
        {
          itemName: "Pedicure Color",
          itemDescription: "Pedicure with color. (75 min)",
          price: 55,
          duration: "75 min",
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
        item={service.items}
        itemName={service.items[0].itemName}
        itemDescription={service.items[0].itemDescription}
        itemPrice={service.items[0].price}
        itemDuration={service.items[0].duration}
      />
    })
  )
}
