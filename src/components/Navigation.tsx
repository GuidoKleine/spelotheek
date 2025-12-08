import '../styling/Navigation.css';
import { Link } from 'react-router';

function NavBar() {
  return (
    <>
      <nav className='navBar'>
        <Link className='nav-link' to="/"> Home </Link>
        <Link className='nav-link' to="/lid-worden"> Lid worden </Link>
        <Link className='nav-link' to="/vrijwilligers"> Vrijwilligers </Link>
        <Link className='nav-link' to="/catalogus"> Catalogus </Link>
        <Link className='nav-link' to="/openingstijden"> Openingstijden </Link>
      </nav>
    </>
  )
}

export default NavBar