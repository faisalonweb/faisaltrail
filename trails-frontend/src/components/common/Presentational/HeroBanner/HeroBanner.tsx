import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import oneLogo from 'src/assets/images/one.jpg';
import 'src/components/common/Presentational/HeroBanner/HeroBanner.scss';

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: true,
  showIndicators: false,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: false,
  swipeable: true,
  emulateTouch: true,
  autoFocus: false,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 5000,
  transitionTime: 1000,
  swipeScrollTolerance: 5,
  ariaLabel: 'arialabel',
});

const images = [oneLogo, oneLogo, oneLogo, oneLogo];

const HeroBanner = () => {
  return (
    <div className='carosual-cls'>
      <Carousel centerMode centerSlidePercentage={100} {...getConfigurableProps()}>
        {images.map((img) => (
          <div className='img-cls' key={img}>
            <img className='img' src={img} alt='img' />
            {/* <p  className="legend">Good Morning User</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
