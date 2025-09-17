import "./../Style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Logo */}
        <div className="footer-logo">
          <h2>Food</h2>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Food One</li>
            <li>Food Instant</li>
            <li>Food Genie</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Delivery */}
        <div className="footer-col">
          <h4>We deliver to:</h4>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
