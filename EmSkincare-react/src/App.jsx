import { useState } from "react"
import Footer from "./components/footer"
import "./style.css"

const treatments = [
  {
    name: "Brows",
    description: "Lorem, ipsum dolor.",
    items: [
      {
        itemName: "Brow Wax & Style",
        itemDescription: "Description",
        price: 99,
        duration: "20min",
      },
    ],
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <div class="topnav">
          <a href="/" class="logo">
            <img src="./assets/images/logo.png" alt="Logo of Emskin" />
          </a>
          <div class="navMenu">
            <a href="/">Home</a>
            <a href="/about.html">About</a>
            <a href="/treatments.html">Treatments</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </header>

      <main class="wrapper">
        <section class="hero">
          <img
            class="hero-img"
            src="./assets/images/heroImage.jpg"
            alt="hero"
          />
          <div class="hero-text">
            <h1>Professional skincare for you.</h1>
            <p>
              Welcome to EmSkincare, a modern salon located in the heart of
              Antibes where we tailor skincare to your desire. It is our
              pleasure to give your skin and body the love and care it deserves.
            </p>
            <p>Your treatment will be uniquely yours.</p>
          </div>
        </section>

        <section class="treatments">
          <h2>Our Treatments</h2>

          {/* {treatments.map((treatment) => (
            <Treatment
              name={treatment.name}
              description={treatment.description}
              items={treatment.items}
            />
          ))} */}

          <div class="treatment-container">
            <div class="treatment">
              <div class="treatment-icon">
                <img src="./assets/icons/facial-treatment.png" alt="" />
              </div>
              <div class="treatment-title">
                <h6>Facial</h6>
              </div>
            </div>

            <div class="treatment">
              <div class="treatment-icon">
                <img src="./assets/icons/eyebrow.png" alt="" />
              </div>
              <div class="treatment-title">
                <h6>Lashes & Brows</h6>
              </div>
            </div>

            <div class="treatment">
              <div class="treatment-icon">
                <img src="./assets/icons/massage.png" alt="" />
              </div>
              <div class="treatment-title">
                <h6>Massage</h6>
              </div>
            </div>

            <div class="treatment">
              <div class="treatment-icon">
                <img src="./assets/icons/body.png" alt="" />
              </div>
              <div class="treatment-title">
                <h6>Body</h6>
              </div>
            </div>

            <div class="treatment">
              <div class="treatment-icon">
                <img src="./assets/icons/waxing.png" alt="" />
              </div>
              <div class="treatment-title">
                <h6>Waxing</h6>
              </div>
            </div>

            <div class="treatment">
              <div class="treatment-icon">
                <img src="./assets/icons/pedicure.png" alt="" />
              </div>
              <div class="treatment-title">
                <h6>Pedicure</h6>
              </div>
            </div>

            {/* <div class="treatment">
              <div class="treatment-icon">
                <img src="./assets/icons/facial-treatment.png" alt="" />
              </div>
              <div class="treatment-title">
                <h6>Special</h6>
              </div>
            </div> */}
          </div>
          <p>
            Get your treatment done for a great mood. Simple pleasures can make
            your week, not just day
          </p>
          <a href="/treatments.html" class="treatment-btn">
            VIEW SERVICE MENU
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
