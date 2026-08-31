import "../styling/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-contact-block">
        <div>
          <p className="contact-information">Speelotheek Woerden</p>
          <p className="contact-information">Tournoysveld 94</p>
          <p className="contact-information">3443 EW Woerden</p>
          <p className="contact-information">
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
