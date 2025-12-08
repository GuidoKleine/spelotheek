import './styling/App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage.tsx';
import MemberPage from './pages/MemberPage.tsx';
import VolunteerPage from './pages/VolunteerPage.tsx';
import CatalogusPage from './pages/CatalogusPage.tsx';
import OpeningTimesPage from './pages/OpeningTimePage.tsx';
import NavBar from './components/Navigation.tsx';
import LogoHeader from './components/LogoHeader.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='app-container'>
      <NavBar />
      <LogoHeader />
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


export default App
