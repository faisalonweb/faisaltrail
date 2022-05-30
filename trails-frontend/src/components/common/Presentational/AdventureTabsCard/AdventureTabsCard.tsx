import React from 'react'
import 'src/components/common/Presentational/AdventureTabsCard/AdventureTabsCard.scss'

interface Props {
   trail_img: string;
   trail_title: string;
   trail_distance: string;
   trail_time: string;
}
const AdventureTabsCard = ({trail_img, trail_title, trail_distance, trail_time}:Props) => {
  return (
    <div className="trail-info">
    <div className="trail-img">
      <img
          style={{ width: "100px", height: "100px", borderRadius:'10px',objectFit:"cover" }}
          src={trail_img}
          alt="img"
      />
    </div>
      <div className="trail-name">
        <p className="trail-title">{trail_title}</p>
        <div className="trail-info">
        <p className ="trail-distance">{trail_distance}</p>
        <p className="trail-time">{trail_time}</p>
      </div>
      </div>
      
</div>
  )
}

export default AdventureTabsCard