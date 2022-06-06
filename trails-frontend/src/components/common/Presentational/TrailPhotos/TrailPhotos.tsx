import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useAppSelector } from "src/store/hooks";
import AdventureTabsCard from 'src/components/common/Presentational/AdventureTabsCard/AdventureTabsCard';
import 'src/components/common/Presentational/TrailPhotos/TrailPhotos.scss'

const TrailPhotos = () => {
    const { trails } = useAppSelector(
        (state) => state.appData
        );  
  return (
    <Box className='user-photo-section'>
         <Box className='photos-section'>
      <Box className='photos-des'> 
          <Typography variant='h6' fontWeight='bold'>Add photos of this trail</Typography>
          <Typography>Photos help others preview the trail. Upload photos about this trail to inspire others.</Typography>
          <Box sx={{ minWidth: 20, marginY:'30px' }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort by
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
      <Button variant="contained"  color="success">
            Upload Phtoto
        </Button>
      </Box>
    </Box>
  <Box className="trail-info-cls">
  <>
    {
    trails.map((trail)=>(
      <AdventureTabsCard 
        trail_img={trail.trail_image} 
        />
    ))
    }
    </>
  </Box>
    </Box>
  )
}

export default TrailPhotos