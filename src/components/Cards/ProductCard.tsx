
interface ProductInformationProps {
  title: string;
  image: string;
  description: string;
}



export default function ProductCard({ title, image, description }: ProductInformationProps) {
  return (
    <>
      <div className="productCard">
        <h3>{title}</h3>
        <img src={image}></img>
        <p>{description}</p>
        <button>Artikelgegevens</button>
      </div>
    </>
  )
}