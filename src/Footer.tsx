const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <h2>Panto</h2>
        <p>
          The advantage of hiring a workspace with us is that gives you
          comfortable service and all-around facilities.
        </p>
      </div>

      <div className="footer-column">
        <h3>Services</h3>
        <a href="#">Email Marketing</a>
        <a href="#">Campaigns</a>
        <a href="#">Branding</a>
      </div>

      <div className="footer-column">
        <h3>Furniture</h3>
        <a href="#">Beds</a>
        <a href="#">Chair</a>
        <a href="#">All</a>
      </div>

      <div className="footer-column">
        <h3>Follow Us</h3>
        <a href="#">
          <img
            src="/icons/facebook.svg"
            alt="Facebook icon next to Facebook social link in footer"
          />
          Facebook
        </a>
        <a href="#">
          <img
            src="/icons/twitter.svg"
            alt="Twitter icon next to Twitter social link in footer"
          />
          Twitter
        </a>
        <a href="#">
          <img
            src="/icons/instagram.svg"
            alt="Instagram icon next to Instagram social link in footer"
          />
          Instagram
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>Copyright © 2021</p>
      <div className="footer-links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
