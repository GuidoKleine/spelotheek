import BaseCard from '../components/Catalogus/BaseCard';
import '../styling/CatalogusPage.css';

function CatalogusPage() {
  return (
    <>
      <h2>Catalogus Pagina</h2>
      <div className='catalogus-grid-container'>
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
      </div>
    </>
  );
}

export default CatalogusPage;
