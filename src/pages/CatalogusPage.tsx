import BaseCard from '../components/Catalogus/BaseCard';
import '../styling/CatalogusPage.css';

function CatalogusPage() {
  return (
    <>
      <h2>Catalogus Pagina</h2>
      <div className='catalogusContainer'>
        <BaseCard />
        <BaseCard />
        <BaseCard />
      </div>
    </>
  );
}

export default CatalogusPage;
