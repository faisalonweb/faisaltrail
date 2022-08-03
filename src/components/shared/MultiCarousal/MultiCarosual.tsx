import React from 'react';
import 'src/components/shared/MultiCarousal/MultiCarousal.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useGetAllCategoriesQuery } from 'src/store/reducers/api';
import { ICategoryData } from 'src/utils/interfaces/Trail';

const responsive = {
  desktop: {
    breakpoint: { max: 1500, min: 1200 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};

const MultiCarosual = () => {
  const { data: categories = { results: [] } } = useGetAllCategoriesQuery({});
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
        {categories?.results?.map((category: ICategoryData) => {
          return (
            <div className='head-container' key={category?.id}>
              <img src={category?.image} alt='img' />
              <h3>{category?.title}</h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MultiCarosual;
