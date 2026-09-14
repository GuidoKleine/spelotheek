import '../../styling/components/Catalogus/BaseCard.css';

export default function BaseCard({catalogusTitle}) {
  return (
    <>
      <div className="catalogusCard">
        <h3>{catalogusTitle}</h3>
      </div>
    </>
  )
} 