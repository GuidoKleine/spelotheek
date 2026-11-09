
interface CatalogusInformationProps {
  title: string;
  image: string;
}



export default function CatalogusCard({ title, image }: CatalogusInformationProps) {
  return (
    <>
      <div >
        <h3>{title}</h3>
        <img src={image}></img>
      </div>
    </>
  )
}