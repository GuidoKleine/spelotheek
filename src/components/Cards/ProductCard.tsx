import { useNavigate } from "react-router";
import "@/styling/components/ProductCard.css";

interface ProductInformationProps {
  title: string;
  image: string;
  description: string;
}


export default function ProductCard({ title, image, description }: ProductInformationProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${title}`)

  }
  return (
    <>
      <div className="productCard">
        <h3>{title}</h3>
        <img src={image}></img>
        <p>{description}</p>
        <button className="productCard_button" onClick={handleClick}>Artikelgegevens</button>
      </div>
    </>
  )
}