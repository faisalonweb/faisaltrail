import React from 'react'
import Typography from '@mui/material/Typography';
import 'src/components/common/Presentational/UserComment/UserComment.scss'
import Box from '@mui/material/Box';
import Rating from "@mui/material/Rating";
import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

const UserComment = () => {
  return (
    <Box className='review-section-cls'>
    <Grid className='rating-cls' container>
    <Grid  className='rating' item xs={6}>
      <Box className='rating-section'>
        <Box className='stars-count'>
          <Typography>5</Typography>
          <Typography>4</Typography>
          <Typography>3</Typography>
          <Typography>2</Typography>
          <Typography>1</Typography>
        </Box>
        <Box className='stars-cls'>
          <Rating value={2}/>
          <Rating value={1}/>
          <Rating value={1}/>
          <Rating value={1}/>
          <Rating value={1}/>
        </Box>
        <Box></Box>
      </Box>
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
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
    
    </Grid>
    <Grid item xs={6}>
      <Box className='total-stars'>
        <Box>
          <Typography variant='h4'>4.5</Typography>
          <Rating value={4}/>
          <Box>
            <span>4,345</span>
            <span style={{marginLeft:'5px'}}>Reviews</span>
          </Box>
        </Box>
        <Box className='review-btn'>
        <Button variant="contained"  size='large' color="success">
            Review
        </Button>
        </Box>
      </Box>
    </Grid>
    
  </Grid>
  <Divider sx={{ marginY:'30px'}} />  
    <Box className="user-review">
    <Box className='user-review-section'>
      <Box className='user-review-img'>
          <image />
      </Box>
      <Box className='user-name-section'>
        <Typography fontWeight='bold'>Nilson Mandila</Typography>
        <Box className='user-date'>
        <Rating value={4}/>
        <Typography variant='body2'>May 30, 2022</Typography>
        </Box>
      
      </Box>
    </Box>
    <Box>
        <Chip label="Dogs on leash" color="success" size="small" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="small" variant="outlined" sx={{ mr: 1, mt: 1 }} />
    </Box>
    <Box className="user-review-desc">
          <Typography variant='body2'>
          The Lake Agnes Trail is an accessible and relatively short route
          up to the Lake Agnes Tea House which was built by the Canadian
          Pacific Railway in 1901 as a refuge for hikers travelling to
          higher locations. The trail has an elevation gain of 400 metres
          and offers fantastic views of the Nokhu Crags and Lake Louise.
          up to the Lake Agnes Tea House which was built by the Canadian
          Pacific Railway in 1901 as a refuge for hikers travelling to
          higher locations. The trail has an elevation gain of 400 metres
          and offers fantastic views of the Nokhu Crags and Lake Louise
          
          </Typography>
        </Box>
    <Box>

    </Box>
    <Box>

    </Box>
  </Box>
  </Box>  
  )
}

export default UserComment