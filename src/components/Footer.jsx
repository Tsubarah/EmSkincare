import instagram from '/assets/icons/instagram.svg'

const Footer = () => (
  <footer>
    <a href="/" className="footer-logo">
      <img src="../assets/images/logo.png" alt="Logo of Emskin" />
    </a>
    <h6>Professional skincare for you.</h6>

    <div className="social-icons">
      <a href="https://instagram.com/em.skincare.antibes?igshid=YmMyMTA2M2Y=" target="_blank">
        <img src={instagram} alt="Instagram logo" />
      </a>
      <a href="https://facebook.com" target="_blank">
        <img src="../assets/icons/facebook.svg" alt="Facebook logo" />
      </a>
    </div>
  </footer>
)

export default Footer
