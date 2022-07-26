import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Chip, Container,  Stack } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useNavigate } from 'react-router-dom';
import { useGetAllTrailsQuery } from 'src/store/reducers/api';
import 'src/components/common/Presentational/TrailList/TrailList.scss';
import two from 'src/assets/images/two.jpg';
import { ITrailData1 } from 'src/utils/interfaces/Trail';

const TrailList = () => {
  const navigate = useNavigate();
  const { data: trails = [] } = useGetAllTrailsQuery({});
  return (
    <div className='trail-list'>
      {
      trails?.results?.map((trail:ITrailData1) => {
        return (
          <Container
            className='container-cls'
            key={trail.id}
            onClick={() => navigate(`/trails/trail-info/${trail.id}`, { state: trail })}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={5}
              className='stack-cls'
              my={5}
              p={2}
              sx={{
                alignItems: 'center',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: 4,
              }}
            >
              <Box className='image-cls'>
                <img
                  src={two}
                  style={{ height: 240, borderRadius: 10, objectFit: 'cover' }}
                  alt='img'
                ></img>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography fontSize={18}>
                    #{trail.id} - {trail.title}
                  </Typography>
                  <BookmarkBorderOutlinedIcon />
                </Box>

                <Typography sx={{ opacity: 0.5 }} fontSize={14}>
                  {trail.locations[0].area_name}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Chip label={trail.properties[0].technical_difficulty} color='primary' size='small' />
                </Box>

                <Box sx={{ display: 'flex', gap: 5 }}>
                  <Typography>{trail.properties[0].distance} km</Typography>
                </Box>

                <Box>
                  <Typography fontSize={15}>{trail.description}</Typography>
                </Box>
              </Box>
            </Stack>
          </Container>
        );
      })}
    </div>
  );
};

export default TrailList;
