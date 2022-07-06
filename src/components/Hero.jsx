import heroImg from '/assets/images/heroImage.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-img" src={heroImg} alt="hero" />
      <div className="hero-text">
        <h1>Professional skincare for you.</h1>
        <p>Welcome to EmSkincare, a modern salon located in the heart of Antibes where we tailor skincare to your desire.  It is our pleasure to give your skin and body the love and care it deserves.</p>
        <p>Your treatment will be uniquely yours.</p>
      </div>
    </section>
  )
}
