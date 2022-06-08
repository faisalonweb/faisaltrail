import React from 'react';
import 'src/components/common/Presentational/AdventureTabsCard/AdventureTabsCard.scss';

interface Props {
  trailImg?: string;
  trailTitle?: string;
  trailDistance?: string;
  trailTime?: string;
}
const AdventureTabsCard = ({ trailImg, trailTitle, trailDistance, trailTime }: Props) => {
  return (
    <div className='trail-info'>
      <div className='trail-img'>
        <img
          style={{ width: '100px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
          src={trailImg}
          alt='img'
        />
      </div>
      <div className='trail-name'>
        <p className='trail-title'>{trailTitle}</p>
        <div className='trail-info'>
          <p className='trail-distance'>{trailDistance}</p>
          <p className='trail-time'>{trailTime}</p>
        </div>
      </div>
    </div>
  );
};

export default AdventureTabsCard;
