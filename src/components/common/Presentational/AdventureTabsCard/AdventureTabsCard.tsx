import React from 'react';
import 'src/components/common/Presentational/AdventureTabsCard/AdventureTabsCard.scss';

interface Props {
  key?: number;
  trailImg?: string;
  trailTitle?: string;
  trailDistance?: number | string;
  trailTime?: number | string;
}
const AdventureTabsCard = ({ trailImg, trailTitle, trailDistance, trailTime }: Props) => {
  return (
    <div className='trail-info'>
      <div className='trail-img'>
        <img src={trailImg} alt='img' />
      </div>
      <div className='trail-name'>
        <p className='trail-title'>{trailTitle}</p>
        <div className='trail-info'>
          <p className='trail-distance'>{trailDistance} km</p>
          <p className='trail-time'>{trailTime} m</p>
        </div>
      </div>
    </div>
  );
};

export default AdventureTabsCard;
