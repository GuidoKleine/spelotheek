import '../../styling/components/Catalogus/BaseCard.css';

export default function BaseCard({ children }) {
  return (
    <>
      <div className="baseCard">
        {children}
      </div>
    </>
  )
} 