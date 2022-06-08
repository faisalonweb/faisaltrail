import React from 'react';
import {
  Box,
  Button,
  Typography,
  InputLabel,
  FormControl,
  NativeSelect,
  Rating,
  Chip,
  Divider,
} from '@mui/material';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import mapimg1 from 'src/assets/images/map1.png';
import 'src/components/common/Presentational/ActivitesTabs/ActivitesTabs.scss';

const ActivitesTabs = () => {
  const constantData: LocalizationInterface = localizedData();
  const { title, subTitle, sortBy, uploadBtn } = constantData.activitesTabs;
  return (
    <Box className='user-activity-section'>
      <Box className='activity-section'>
        <Box className='activity-des'>
          <Typography variant='h6' fontWeight='bold'>
            {title}
          </Typography>
          <Typography>{subTitle}</Typography>
          <Box sx={{ minWidth: 20, marginY: '30px' }}>
            <FormControl>
              <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                {sortBy}
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'sort by',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>Newest First</option>
                <option value={20}>Oldest First</option>
                <option value={30}>Default First</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Box>
        <Box className='upload-btn'>
          <Button variant='contained' color='success'>
            {uploadBtn}
          </Button>
        </Box>
      </Box>
      <Box className='activity-info-cls'>
        <Box className='user-review-section'>
          <Box className='user-review-img'></Box>
          <Box className='user-name-section'>
            <Typography fontWeight='bold'>Nilson Mandila</Typography>
            <Box className='user-date'>
              <Rating value={4} />
              <Typography variant='body2'>May 30, 2022</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Chip
            label='Dogs on leash'
            color='success'
            size='small'
            variant='outlined'
            sx={{ mr: 1, mt: 1 }}
          />
          <Chip
            label='Kid Friendly'
            color='success'
            size='small'
            variant='outlined'
            sx={{ mr: 1, mt: 1 }}
          />
        </Box>
        <Box className='activity-img-cls'>
          <img src={mapimg1} alt='img' />
        </Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default ActivitesTabs;
