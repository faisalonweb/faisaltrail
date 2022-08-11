import React from 'react';
import 'src/components/shared/MultiCarousal/MultiCarousal.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useGetAllCategoriesQuery } from 'src/store/reducers/api';
import { ICategoryData } from 'src/utils/interfaces/Trail';
import { Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress'

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1000 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};

const MultiCarosual = () => {
  const { data: categories = { results: []},isLoading } = useGetAllCategoriesQuery({});
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
         { !isLoading ? (
          categories?.results?.map((category: ICategoryData) => {
            return (
              <div className='head-container' key={category?.id}>
                <img src={category?.image} alt='img' />
                <Typography>{category?.title}</Typography>
              </div>
            );
          })
         ):(
           <Box className='progress-cls'>
            <CircularProgress />
           </Box>
         )}
        {}
      </Carousel>
    </div>
  );
};

export default MultiCarosual;
