import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__call">
          Questions? Call 000-800-919-1743
        </p>

        <div className="footer__links">
          <a href="#">FAQ</a>
          <a href="#">Help Centre</a>
          <a href="#">Account</a>
          <a href="#">Media Centre</a>
          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Corporate Information</a>
          <a href="#">Contact Us</a>
        </div>

        <select className="footer__language">
          <option>English</option>
          <option>Hindi</option>
        </select>

        <p className="footer__country">Netflix India</p>
      </div>
    </div>
  );
}

export default Footer;
