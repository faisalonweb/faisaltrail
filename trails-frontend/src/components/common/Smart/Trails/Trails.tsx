import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Chip, Container, Rating, Stack, Divider } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useNavigate } from 'react-router-dom';
import MultiCarosual from 'src/components/shared/MultiCarousal/MultiCarosual';
import { useAppSelector } from 'src/store/hooks';
import mapimg1 from 'src/assets/images/map1.png';
import 'src/components/common/Smart/Trails/Trails.scss'


const Trails = () => {
const navigate = useNavigate();
const { trailList } = useAppSelector((state) => state.appData);
return (
<Container className='container-cls'>
  <Box className='caro-cls' sx={{mt:'50px'}}>
    <MultiCarosual />
  </Box> 
  <Box className='content-cls'>
    <Typography  fontWeight='bold' variant='h5'>Best Trails in Pakistan</Typography>
    <Box className='rating-box'>
    <Rating value={5} />
        <Typography className='review-nbm' variant='body2' color='text.secondary'>
          5,5556 Reviews
        </Typography>
    </Box>
    <Typography>Ready to check out the best trails in Canada for hiking, 
      mountain biking, climbing or other outdoor 
      activities? AllTrails has 21,956 hiking trails, 
      mountain biking routes, backpacking trips 
      and more. Discover hand-curated trail maps, along with reviews and photos from nature lovers
      mountain biking routes, backpacking trips 
      and more. Discover hand-curated trail maps, along with reviews and photos from nature lovers
      </Typography>
  </Box>
  
  <Box className='img-cls'>
    <img
        src={mapimg1}
        alt='img'
      />
    </Box>
    <Divider sx={{marginY:'50px'}}/>
  {trailList.map((trail) => {
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
</Container>
);
};

export default Trails;
