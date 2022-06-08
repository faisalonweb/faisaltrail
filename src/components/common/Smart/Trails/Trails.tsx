import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, Rating, Divider } from '@mui/material';
import MultiCarosual from 'src/components/shared/MultiCarousal/MultiCarosual';
import TrailList from 'src/components/common/Presentational/TrailList/TrailList';
import mapimg1 from 'src/assets/images/map1.png';
import 'src/components/common/Smart/Trails/Trails.scss';

const Trails = () => {
  return (
    <Container className='container-cls'>
      <Box className='caro-cls' sx={{ mt: '50px' }}>
        <MultiCarosual />
      </Box>
      <Box className='content-cls'>
        <Typography fontWeight='bold' variant='h5'>
          Best Trails in Pakistan
        </Typography>
        <Box className='rating-box'>
          <Rating value={5} />
          <Typography className='review-nbm' variant='body2' color='text.secondary'>
            5,5556 Reviews
          </Typography>
        </Box>
        <Typography>
          Ready to check out the best trails in Canada for hiking, mountain biking, climbing or
          other outdoor activities? AllTrails has 21,956 hiking trails, mountain biking routes,
          backpacking trips and more. Discover hand-curated trail maps, along with reviews and
          photos from nature lovers mountain biking routes, backpacking trips and more. Discover
          hand-curated trail maps, along with reviews and photos from nature lovers
        </Typography>
      </Box>
      <Box className='img-cls'>
        <img src={mapimg1} alt='img' />
      </Box>
      <Divider sx={{ marginY: '50px' }} />
      <TrailList />
    </Container>
  );
};

export default Trails;
