import React from 'react';
import { Box, Paper, Typography, Divider, Grid } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import TrailDetailCard from 'src/components/shared/TrailDetailCard/TrailDetailCard';
import { useGetAllTrailsQuery } from 'src/store/reducers/api';
import mapimg1 from 'src/assets/images/map1.png';
import { ITrailData1 } from 'src/utils/interfaces/Trail';
import CircularProgress from '@mui/material/CircularProgress';
import 'src/components/common/Smart/Explore/Explore.scss';

const Explore = () => {
  const { data: trails = [], isLoading:isLoader} = useGetAllTrailsQuery({});
  return (
    <Grid className='explore-cls' container>
      <Grid className='explore-cards-section' item xs={12} md={2} lg={2}>
        <Box className='cards-section'>
          <Box sx={{ mt: '10px' }}>
            <Paper
              component='form'
              sx={{
                bgcolor: 'background.default',
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 300,
              }}
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
          {
            !isLoader ? (
              <>
              {trails?.results?.map((trail:ITrailData1) => (
                          <div key={trail.id}>
                            <TrailDetailCard
                              title={trail.title}
                              time={trail?.properties[0]?.distance}
                              rating={trail?.properties[0]?.distance}
                              img={trail?.properties[0]?.images[0]?.image}
                              info={trail?.properties[0]?.trail_type}
                              difficulty={trail?.properties[0]?.technical_difficulty}
                              reviews={trail?.properties[0]?.distance}
                              length={trail?.properties[0]?.distance}
                            />
                          </div>
                        ))}
              </>
            ):
            (
              <Box className='progress-cls'>
              <CircularProgress />
              </Box>
            )

          }
         
        </Box>
      </Grid>
      <Grid item xs={12} md={10} lg={10} className='img-grid'>
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
