import BaseCard from '../components/Catalogus/BaseCard';
import '../styling/pages/CatalogusPage.css';

function CatalogusPage() {
  return (
    <>
      <div className="catalogus-page">
        <h2>Catalogus Pagina</h2>
        <p className="catalogus-intro-block">
          Hier vindt u de complete catalogus van Speelotheek Woerden. Mail ons
          met je aanvragen als je iets zou willen reserveren kosten zijn €0,50
          per artikelen.{' '}
        </p>
        <div className="catalogus-grid-container">
          <BaseCard catalogusTitle={'Bewegings speelgoed'} />
          <BaseCard catalogusTitle={'Zintuigelijk materiaal'} />
          <BaseCard catalogusTitle={'Fantasie materiaal'} />
          <BaseCard catalogusTitle={'Expressie materiaal'} />
          <BaseCard catalogusTitle={'Spelletjes'} />
          <BaseCard catalogusTitle={'Puzzels'} />
          <BaseCard catalogusTitle={'Bouw- en constructie materiaal'} />
          <BaseCard catalogusTitle={'Themadozen'} />
        </div>
      </div>
    </>
  );
}

export default CatalogusPage;
