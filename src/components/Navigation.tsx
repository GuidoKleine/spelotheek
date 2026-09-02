import '../styling/Navigation.css';
import { Link } from 'react-router';
import NavHamburger from './NavHamburger.tsx';

function NavBar() {
  return (
    <>
      <div className="navBar">
        <NavHamburger />
        <nav className='navBar__menu'>
          <Link className="navBar__link" to="/">
            {' '}
            Home{' '}
          </Link>
          <Link className="navBar__link" to="/lid-worden">
            {' '}
            Lid worden{' '}
          </Link>
          <Link className="navBar__link" to="/vrijwilligers">
            {' '}
            Vrijwilligers{' '}
          </Link>
          <Link className="navBar__link" to="/catalogus">
            {' '}
            Catalogus{' '}
          </Link>
          <Link className="navBar__link" to="/openingstijden">
            {' '}
            Openingstijden{' '}
          </Link>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
