import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from "react-router";
import './styling/index.css'
import App from './App.tsx'
import MemberPage from './pages/MemberPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Navigation />
      <Routes>
        <Route path='Home' element={<App />} />
        <Route path='lid-worden' element={<MemberPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)

function Navigation() {
  return (
    <>
      <nav>
        <Link className='nav-link' to="/"> Home </Link>
        <Link className='nav-link' to="/lid-worden"> MemberPage </Link>
      </nav>
    </>
  )
}
