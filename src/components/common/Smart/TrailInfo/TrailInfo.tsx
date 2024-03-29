import React, { useState } from 'react';
import { Container, Box, Stack, Typography, Chip, Divider, Grid, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import TrailDetailCard from 'src/components/shared/TrailDetailCard/TrailDetailCard';
import 'src/components/common/Smart/TrailInfo/TrailInfo.scss';
import { ITrailData1 } from 'src/utils/interfaces/Trail';
import DesTabs from 'src/components/common/Presentational/DesTabs/DesTabs';
import WeatherTabs from 'src/components/common/Presentational/WeatherTabs/WeatherTabs';
import ReviewsTabs from 'src/components/common/Smart/ReviewsTabs/ReviewsTabs';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetTrailByIdQuery, useGetAllTrailsQuery } from 'src/store/reducers/api';
import { chipList } from 'src/utils/constants/constants';
import { useParams } from 'react-router-dom';

const TrailInfo = () => {
  const { id } = useParams();
  const { data: getTrail, isLoading } = useGetTrailByIdQuery(id);
  const { data: trails = [], isLoading: isLoader } = useGetAllTrailsQuery({});
  const constantData: LocalizationInterface = localizedData();
  const { length, elevation, route } = constantData.trailInfo;
  const [expanded, setExpanded] = useState(false);
  const trail = getTrail as ITrailData1;
  const dataForDisplay = expanded ? trail?.title : trail?.title.slice(0, 240);
  return (
    <Container className='container-cls'>
      {!isLoading ? (
        <>
          <Box sx={{ mt: '10px' }} display='flex' justifyContent='flex-end'>
            <Paper
              component='form'
              sx={{
                bgcolor: 'background.default',
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
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
          <Box sx={{ mt: '10px' }}>
            <img
              src={trail?.properties[0]?.images[0]?.image}
              style={{ height: 350, width: '100%', objectFit: 'cover' }}
              alt='img'
            ></img>
          </Box>
          <Box className='grid-cls'>
            <Grid className='grid-cls-container' container>
              <Grid className='left-grid' item xs={12} md={8} lg={8}>
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
                  <Stack className='stack-cls' direction='row' spacing={{ xs: 8, md: 15, lg: 15 }}>
                    <Box>
                      <Typography fontWeight='bold'>{length}</Typography>
                      <Typography variant='subtitle2'>{trail?.properties[0]?.distance}</Typography>
                    </Box>

                    <Box>
                      <Typography fontWeight='bold'>{elevation}</Typography>
                      <Typography variant='subtitle2'>
                        {trail?.properties[0]?.evaluation_plan}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography fontWeight='bold'>{route}</Typography>
                      <Typography variant='subtitle2'>
                        {trail?.properties[0]?.trail_type}
                      </Typography>
                    </Box>
                  </Stack>
                  <Box className='chip-cls'>
                    {chipList?.map((label) => (
                      <Box key={label}>
                        <Chip
                          label={label}
                          color='success'
                          size='medium'
                          variant='outlined'
                          sx={{ mr: 1, mt: 1 }}
                        />
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ mt: '30px' }}>
                    <DesTabs trailDes={trail?.description} />
                  </Box>
                  <Box sx={{ mt: '30px' }}>
                    <WeatherTabs />
                  </Box>
                  <Box sx={{ mt: '30px' }}>
                    <ReviewsTabs />
                  </Box>
                </Box>
              </Grid>
              <Grid className='right-grid' item xs={12} md={4} lg={4}>
                <Box>
                  <Typography variant='h6' fontWeight='bold'>
                    Nearby trails
                  </Typography>
                  {!isLoader ? (
                    <>
                      {trails?.results?.map((trail: ITrailData1) => (
                        <div key={trail.id}>
                          <TrailDetailCard
                            title={trail?.title}
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
                  ) : (
                    <Box className='progress-cls'>
                      <CircularProgress />
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <Box className='progress-cls'>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default TrailInfo;
