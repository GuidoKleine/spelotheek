import { useState } from 'react';
import { Link } from 'react-router';
import '../styling/navHamburger.css';

export default function NavHamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div>
        <div className="hamburger">
          <button onClick={toggleHamburger}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </button>
        </div>
        <div
          style={{ display: hamburgerOpen ? 'inline' : 'none' }}
        >
          <ul className="hamburger_list">
          <Link className="hamburger__link" to="/">
            {' '}
            Home{' '}
          </Link>
          <Link className="hamburger__link" to="/lid-worden">
            {' '}
            Lid worden{' '}
          </Link>
          <Link className="hamburger__link" to="/vrijwilligers">
            {' '}
            Vrijwilligers{' '}
          </Link>
          <Link className="hamburger__link" to="/catalogus">
            {' '}
            Catalogus{' '}
          </Link>
          <Link className="hamburger__link" to="/openingstijden">
            {' '}
            Openingstijden{' '}
          </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
