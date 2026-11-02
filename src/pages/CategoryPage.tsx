import ProductsData from '../../test/stubs/payloads/ProductsData.json';
import BaseCard from '../components/Catalogus/BaseCard';
import { useParams } from 'react-router';

function CategoryPage() {
  const { CategorieInfoParam } = useParams();
  const ProductsInfo = ProductsData.map((products) => (
    <>  
      <BaseCard 
        key={products.id}
        title={products.title}  
        image={products.img}
      />
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
