import '../styling/LogoHeader.css';
import logo from '../assets/spelogo-test.png';


function LogoHeader() {
  return (
    <>
      <div className="header">
        <img className='logo' src={logo} alt="speelotheek logo" />
      </div>
    </>
  )
}

export default LogoHeader;