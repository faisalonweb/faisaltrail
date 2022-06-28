import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Chip, Container, Rating, Stack } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useNavigate } from 'react-router-dom';
import { useGetAllTrailsQuery } from 'src/store/reducers/api';
import 'src/components/common/Presentational/TrailList/TrailList.scss';

const TrailList = () => {
  const navigate = useNavigate();
  const { data: trails = [] } = useGetAllTrailsQuery({});
  return (
    <div>
      {trails.map((trail) => {
        return (
          <Container
            key={trail.id}
            onClick={() => navigate(`/trails/trail-info/${trail.id}`, { state: trail })}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={5}
              my={5}
              p={2}
              sx={{
                alignItems: 'center',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: 4,
              }}
            >
              <Box>
                <img
                  src={trail.image}
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
                  {trail.info}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Chip label={trail.difficulty} color='primary' size='small' />
                  <Rating value={trail.rating} />
                  <Typography>({trail.reviews})</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 5 }}>
                  <Typography>{trail.length} km</Typography>
                  <Typography>{trail.time}</Typography>
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
