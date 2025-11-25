import './styling/App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router";
import HomePage from './pages/HomePage.tsx';
import MemberPage from './pages/MemberPage.tsx';
import VolunteerPage from './pages/VolunteerPage.tsx';
import CatalogusPage from './pages/CatalogusPage.tsx';
import OpeningTimesPage from './pages/OpeningTimePage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='lid-worden' element={<MemberPage />} />
          <Route path='vrijwilligers' element={<VolunteerPage />} />
          <Route path='catalogus' element={<CatalogusPage />} />
          <Route path='openingstijden' element={<OpeningTimesPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

function Navigation() {
  return (
    <>
      <nav>
        <Link className='nav-link' to="/"> Home </Link>
        <Link className='nav-link' to="/lid-worden"> Lid worden </Link>
        <Link className='nav-link' to="/vrijwilligers"> Vrijwilligers </Link>
        <Link className='nav-link' to="/catalogus"> Catalogus </Link>
        <Link className='nav-link' to="/openingstijden"> Openingstijden </Link>
      </nav>
    </>
  )
}

export default App
