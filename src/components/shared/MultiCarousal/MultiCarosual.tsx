import React from 'react';
import 'src/components/shared/MultiCarousal/MultiCarousal.scss';
import Carousel from 'react-multi-carousel';
import { images } from 'src/data/data';
import 'react-multi-carousel/lib/styles.css';

interface Props {
  carostring?: string;
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};

const MultiCarosual = ({ carostring }: Props) => {
  return (
    <div className='multi-carosual'>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass='image-item'
        shouldResetAutoplay={false}
      >
        {images.map((image) => {
          return (
            <div className='head-text' key={image}>
              <div className='head-image'>
                <img
                  style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                  src={image}
                  alt='img'
                />
              </div>
              <div className='text-on-image'>
                <h3>{carostring}</h3>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MultiCarosual;
