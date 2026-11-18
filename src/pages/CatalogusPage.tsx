import BaseCard from '../components/Cards/BaseCard';
import CatalogusCard from '../components/Cards/CatalogusCard';
import '@/styling/pages/CatalogusPage.css';
import { getCatalogus } from '@/api/useCatalogusApi';
import { useEffect, useState } from 'react';

function CatalogusPage() {
type Categorie = {
  id: string,
  category: string,
  title: string,
  description: string,
  img: string,
}

  const [catalogus, setCatalogus] = useState<Categorie[]>([]);

  useEffect(() => {
    getCatalogus().then((data) => {
       setCatalogus(data)});
  }, []);

  const CatalogusList = catalogus.map((categorie) => (
    <a href={`catalogus/${categorie.title}`}>
      <BaseCard>
        <CatalogusCard
          key={categorie.title}
          title={categorie.title}
          image={categorie.img}
        />
      </BaseCard>
    </a>
  ));

  return (
    <>
      <section className="catalogus-page">
        <h2>Catalogus</h2>
        <p className="catalogus-intro-block">
          Hier vindt u de complete catalogus van Speelotheek Woerden. Mail ons
          met je aanvragen als je iets zou willen reserveren kosten zijn €0,50
          per artikelen.
        </p>
        <div className="catalogus-grid-container">{CatalogusList}</div>
      </section>
    </>
  );
}

export default CatalogusPage;
