import '../../styling/components/Catalogus/BaseCard.css';

interface CatalogusInformationProps {
  title: string;
  image: string;
}

export default function BaseCard({title, image}: CatalogusInformationProps) {
  return (
    <>
      <div className="catalogusCard">
        <h3>{title}</h3>
        <img src={image}></img>
      </div>
    </>
  )
} 