import "../styling/components/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-contact-block">
        <div className="contact-information">
          <p>Speelotheek Woerden</p>
          <p>Tournoysveld 94</p>
          <p>3443 EW Woerden</p>
          <p>
            Contact (alleentijdens openingstijden):
          </p>
        </div>
        <ul className="contact-information-list">
          <li>
            <a href="mailto:info@speelotheekwoerden.nl">
              info@speelotheekwoerden.nl
            </a>
          </li>
          <li>
            <a href="tel:06-37394301">06-37394301</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
