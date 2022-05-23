import React from 'react'
import HeroBanner from 'src/components/common/Presentational/HeroBanner/HeroBanner'
import TextField from '@mui/material/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from '@mui/material/Autocomplete'
import { withStyles, createStyles, Link } from '@material-ui/core';
import  MultiCarosual  from 'src/components/shared/MultiCarousal/MultiCarosual'
import 'src/components/common/Smart/Home/Home.scss'
import Paper from '@mui/material/Paper';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    
  ];
  

const Home = () => {
    const CustomTextField = withStyles({
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: `50px`,
              border:'none',
            },
          },
        },
      })(TextField);
    return (
        
        <div className="home-page">
         <HeroBanner />
         <div className="text-field">
             <p className="heading">Find Your Next Trail.</p>
         <Paper className="paper-cls" elevation={6}>             
         <Autocomplete
            className="autocomplete-cls"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 650 }}
            popupIcon={<SearchIcon />}
            renderInput={(params) => 
            <CustomTextField 
            className="input-field" 
            placeholder='Search by name trail'
             {...params} />}
        />
        </Paper>
        <Link className="explore" href="/" color="inherit">
              Explore nearby trails
        </Link>
         </div>
         <div className="multi-carousal-cls">
           <MultiCarosual />
         </div>
         

         
            
        </div>
    )
}

export default Home
