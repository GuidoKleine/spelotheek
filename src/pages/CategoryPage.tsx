import BaseCard from '../components/Cards/BaseCard';
import BewegingsSpeelgoedProductsData from '../../test/stubs/payloads/BewegingsSpeelgoedProductsData.json';
import ProductCard from '../components/Cards/ProductCard';
import { useParams } from 'react-router';

function CategoryPage() {
  const { CategorieInfoParam } = useParams();
  const ProductsInfo = BewegingsSpeelgoedProductsData.map((products) => (
    <>
      <BaseCard>
        <ProductCard
          key={products.id}
          title={products.title}
          image={products.img}
          description={products.description}
        />
      </BaseCard>
    </>
  ));

  return (
    <>
      <div className="catalogus-page">
        <h2>{CategorieInfoParam}</h2>
        <div className="catalogus-grid-container">{ProductsInfo}</div>
      </div>
    </>
  );
}

export default CategoryPage;
