import '../../styling/components/Catalogus/BaseCard.css';

interface IBaseCard {
  title: string,
  description: string,
}

export default function BaseCard({ children }) {
  return (
    <>
      <div className="baseCard">
        {children}
      </div>
    </>
  )
} 