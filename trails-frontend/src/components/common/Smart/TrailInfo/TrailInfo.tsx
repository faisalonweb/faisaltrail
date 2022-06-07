import React, { useState } from 'react';
import { Container, Box, Stack, Typography, Chip, Divider, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import TrailDetailCard from 'src/components/shared/TrailDetailCard/TrailDetailCard';
import 'src/components/common/Smart/TrailInfo/TrailInfo.scss';
import { TrailProps } from 'src/utils/interfaces/trailsInterface';
import DesTabs from 'src/components/common/Presentational/DesTabs/DesTabs';
import WeatherTabs from 'src/components/common/Presentational/WeatherTabs/WeatherTabs';
import ReviewsTabs from 'src/components/common/Presentational/ReviewsTabs/ReviewsTabs';
import { useAppSelector } from 'src/store/hooks';
import { useLocation } from 'react-router-dom';

const TrailInfo = () => {
  const { trailCards } = useAppSelector((state) => state.appData);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const trail = location.state as TrailProps;
  const dataForDisplay = expanded ? trail.description : trail.description.slice(0, 240);
  return (
    <Container className='container-cls'>
      <Box sx={{ mt: '10px' }} display='flex' justifyContent='flex-end'>
        <Paper
          component='form'
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
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
      <Box sx={{ mt: '10px' }}>
        <img
          src={trail.image}
          style={{ height: 350, width: '100%', objectFit: 'cover' }}
          alt='img'
        ></img>
      </Box>
      <Box className='grid-cls'>
        <Grid className='grid-cls-container' container>
          <Grid className='left-grid' item xs={8} md={8} lg={8}>
            <Box className='left-clm'>
              <Box className='des-box'>
                <Typography component={'span'} variant='body1'>
                  {dataForDisplay}
                </Typography>
                <Button onClick={() => setExpanded(!expanded)}>
                  {expanded ? 'Show Less' : 'Show More'}
                </Button>
              </Box>

              <Divider sx={{ marginY: '20px' }} />
              <Stack className='stack-cls' direction='row' spacing={{ xs: 10, md: 15, lg: 15 }}>
                <Box>
                  <Typography fontWeight='bold'>Length</Typography>
                  <Typography variant='subtitle2'>7.4</Typography>
                </Box>

                <Box>
                  <Typography fontWeight='bold'>Elevation gain</Typography>
                  <Typography variant='subtitle2'>1034km</Typography>
                </Box>

                <Box>
                  <Typography fontWeight='bold'>Route type</Typography>
                  <Typography variant='subtitle2'>Out & back</Typography>
                </Box>
              </Stack>
              <Box className='chip-cls' mt={3}>
                <Chip
                  label='Dogs on leash'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Kid Friendly'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Hiking'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Horseback riding'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Snowshoing'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Bird watching'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Running'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Forest'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Lake'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Partially paved'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='River'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Views'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Waterfall'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Wildflowers'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Wildlife'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Rocky'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Hsitoric site'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
                <Chip
                  label='Fee'
                  color='success'
                  size='medium'
                  variant='outlined'
                  sx={{ mr: 1, mt: 1 }}
                />
              </Box>
              <Box sx={{ mt: '30px' }}>
                <DesTabs />
              </Box>
              <Box sx={{ mt: '30px' }}>
                <WeatherTabs />
              </Box>
              <Box sx={{ mt: '30px' }}>
                <ReviewsTabs />
              </Box>
            </Box>
          </Grid>
          <Grid className='right-grid' item xs={4} md={4} lg={4}>
            <Box>
              <Typography variant='h6' fontWeight='bold'>
                Nearby trails
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
        </Grid>
      </Box>
    </Container>
  );
};

export default TrailInfo;
