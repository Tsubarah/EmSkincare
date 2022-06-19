
export default function TreatmentIcons({ iconType, iconImg }) {
  return (
      <div className="treatment">
          <div className="treatment-icon"> 
            <img src={iconImg} alt="" />
          </div>
          <div className="treatment-title">
            <h6>{iconType}</h6>
          </div>
      </div>
  )
}
