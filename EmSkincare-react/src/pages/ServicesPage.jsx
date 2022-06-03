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
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream.",
          price: 67,
          duration: "60 min.",
        },
        {
          itemName: "Facial 75",
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream, brow shaping.",
          price: 72,
          duration: "75 min.",
        },
        {
          itemName: "Facial 90",
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream, brow shaping.",
          price: 79,
          duration: "90 min.",
        },
        {
          itemName: "Facemapping",
          itemDescription: "When Facemapping, we look over your skin and what it needs. Free when buying products in combination with the treatment.",
          price: 19,
          duration: "15 min.",
        },
        {
          itemName: "Dermalogica Pro Eye Flash",
          itemDescription: "A professional eye treatment with chemical peeling. The peeling is powerful enough to reduce fine lines and irregularities, but at the same time adapted not to irritate the thin skin.",
          price: 25,
          duration: "15 min.",
        },
        {
          itemName: "Back Treatment",
          itemDescription: "Includes cleansing, peeling, steam, extraction, massage, mask, cream.",
          price: 59,
          duration: "60 min.",
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
          duration: "20 min.",
        },
        {
          itemName: "Lash Lift 75",
          itemDescription: "With lash or brow tinting.",
          price: 75,
          duration: "75 min.",
        },
        {
          itemName: "Lash Lift 90",
          itemDescription: "With lash and brow tinting including shaping.",
          price: 85,
          duration: "90 min.",
        },
        {
          itemName: "Lash & Brow Tinting",
          itemDescription: "Including brow shaping.",
          price: 35,
          duration: "45 min.",
        },
        {
          itemName: "Lash Tinting",
          itemDescription: "Add content",
          price: 22,
          duration: "30 min.",
        },
        {
          itemName: "Brow Tinting",
          itemDescription: "Including brow shaping.",
          price: 35,
          duration: "45 min.",
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
          itemDescription: "Relaxing Spa-massage.",
          price: 64,
          duration: "60 min.",
        },
        {
          itemName: "Full-Body Luxe",
          itemDescription: "Includes face- and head massage.",
          price: 89,
          duration: "90 min.",
        },
        {
          itemName: "Half-Body",
          itemDescription: "Relaxing half-body (back and legs) massage.",
          price: 45,
          duration: "30 min.",
        },
        {
          itemName: "Facial Massage",
          itemDescription: "Add content.",
          price: 35,
          duration: "30 min.",
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
          itemDescription: "Add Content",
          price: 55,
          duration: "60 min.",
        },
        {
          itemName: "Half Legs",
          itemDescription: "Add Content",
          price: 35,
          duration: "30 min.",
        },
        {
          itemName: "Bikini",
          itemDescription: "Add Content",
          price: 29,
          duration: "30 min.",
        },
        {
          itemName: "Full Legs & Bikini",
          itemDescription: "Add Content",
          price: 75,
          duration: "90 min.",
        },
        {
          itemName: "Half Legs & Bikini",
          itemDescription: "Add Content",
          price: 48,
          duration: "60 min.",
        },
        {
          itemName: "Arms",
          itemDescription: "Add Content",
          price: 30,
          duration: "30 min.",
        },
        {
          itemName: "Underarms",
          itemDescription: "Add Content",
          price: 18,
          duration: "15 min.",
        },
        {
          itemName: "Back",
          itemDescription: "Add Content",
          price: 35,
          duration: "30 min.",
        },
        {
          itemName: "Stomach",
          itemDescription: "Add Content",
          price: 40,
          duration: "30 min.",
        },
        {
          itemName: "Full Face",
          itemDescription: "Add Content",
          price: 25,
          duration: "30 min.",
        },
        {
          itemName: "Specific Part of Face",
          itemDescription: "Add Content",
          price: 18,
          duration: "15 min.",
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
          itemDescription: "Pedicure without color.",
          price: 45,
          duration: "60 min.",
        },
        {
          itemName: "Pedicure Color",
          itemDescription: "Pedicure with color.",
          price: 55,
          duration: "75 min.",
        },
      ],
    },
  ]

  return ( 
    <main className="wrapper">
      <section className="treatment-info">
        <div className="info-text">
          <h1>What to consider before treatment:</h1>
          <p>Feel free to come 5 minutes before your appointment, it can be nice to sit down and take a few deep breaths before it is time for your treatment. Please let us know if you would not be able to show up for your appointment - at the latest, the day before.</p>
          <p>If you have allergies or hypersensitivity, we would appreciate if you let us know when you book your appointment. In this way, we have time to go through all the products in peace, and your treatment will not suffer.</p>
        </div>
      </section>
      {
      services.map(service => 
        <Service
          section={service.section}
          name={service.name}
          description={service.description}
          item={service.items}
        />
        )
      }
    </main>
  )
}
