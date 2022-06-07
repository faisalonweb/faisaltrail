import React from 'react';
import { Box, Paper, Typography, Divider, Grid } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import TrailDetailCard from 'src/components/shared/TrailDetailCard/TrailDetailCard';
import mapimg1 from 'src/assets/images/map1.png';
import { useAppSelector } from 'src/store/hooks';
import 'src/components/common/Smart/Explore/Explore.scss';

const Explore = () => {
  const { trailCards } = useAppSelector((state) => state.appData);
  return (
    <Grid className='explore-cls' container style={{ width: '100%' }}>
      <Grid className='explore-cards-section' item xs={12} md={2}>
        <Box className='cards-section'>
          <Box sx={{ mt: '10px' }}>
            <Paper
              component='form'
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Enter a city, park or trail name'
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
              <IconButton color='primary' sx={{ p: '10px' }} aria-label='directions'>
                <DirectionsIcon />
              </IconButton>
            </Paper>
          </Box>
          <Typography variant='h6' fontWeight='bold'>
            Curated trails
          </Typography>
          <>
            {trailCards.map((trail) => (
              <div key={trail.id}>
                <TrailDetailCard
                  title={trail.title}
                  time={trail.time}
                  rating={trail.rating}
                  img={trail.image}
                  info={trail.info}
                  difficulty={trail.difficulty}
                  reviews={trail.reviews}
                  length={trail.length}
                />
              </div>
            ))}
          </>
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={mapimg1}
          alt='img'
        />
      </Grid>
    </Grid>
  );
};

export default Explore;
