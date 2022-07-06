
export default function TreatmentIcons({ iconType, iconImg, iconDescription }) {
  return (
      <div className="treatment">
          <div className="treatment-icon"> 
            <img src={iconImg} alt={iconDescription} />
          </div>
          <div className="treatment-title">
            <h6>{iconType}</h6>
          </div>
      </div>
  )
}
