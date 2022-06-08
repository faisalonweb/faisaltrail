import React from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import 'src/components/common/Presentational/UserCompleteTabs/UserCompleteTabs.scss';

const UserCompleteTabs = () => {
  return (
    <Box className='user-complete-section'>
      <Box className='activity-section'>
        <Box className='activity-des'>
          <Typography variant='h6' fontWeight='bold'>
            Join the list
          </Typography>
          <Typography>
            Use Navigator in the AllTrails app and join the 7940 other outdoor explorers who have
            completed this trail..
          </Typography>
        </Box>
        <Box className='upload-btn'>
          <Button variant='contained' color='success'>
            Add to completed
          </Button>
        </Box>
      </Box>
      <Divider sx={{ mt: '30px' }} />
      <Box className='user-detail'>
        <Box className='user-review-img'></Box>
        <Box className='user-name-section'>
          <Typography fontWeight='bold'>Nilson Mandila</Typography>
          <Box className='user-date'>
            <Typography variant='body2'>Sturgeon Country, Alberta</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserCompleteTabs;
