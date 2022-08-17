import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useAppSelector } from 'src/store/hooks';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import 'src/components/common/Presentational/TrailPhotos/TrailPhotos.scss';

const TrailPhotos = () => {
  const { trails } = useAppSelector((state) => state.appData);
  const constantData: LocalizationInterface = localizedData();
  const { title, subTitle, sortBy, uploadBtn } = constantData.trailPhotos;
  return (
    <Box className='user-photo-section'>
      <Box className='photos-section'>
        <Box className='photos-des'>
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
      <Box className='trail-info-cls'>
        <>
          {trails.map((trail) => (
            <div key={trail.id}>
              <div className='trail-img'>
                <img src={trail.trailImage} alt='img' />
              </div>
            </div>
          ))}
        </>
      </Box>
    </Box>
  );
};

export default TrailPhotos;
