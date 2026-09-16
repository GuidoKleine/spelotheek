import BaseCard from '../components/Catalogus/BaseCard';
import catagorieData from '../../test/mocks/stubs/catagorieData.json';

function CatalogusPage() {
  const CatalogusList = catagorieData.map((categorie) => (
    <a href='.'>
      <BaseCard
        key={categorie.title}
        title={categorie.title}
        image={categorie.img}
      />
    </a>
  ));

  return (
    <>
      <div className="catalogus-page">
        <h2>Catalogus Pagina</h2>
        <p className="catalogus-intro-block">
          Hier vindt u de complete catalogus van Speelotheek Woerden. Mail ons
          met je aanvragen als je iets zou willen reserveren kosten zijn €0,50
          per artikelen.
        </p>
        <div className="catalogus-grid-container">{CatalogusList}</div>
      </div>
    </>
  );
}

export default CatalogusPage;
