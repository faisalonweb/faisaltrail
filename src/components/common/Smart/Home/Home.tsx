import React from 'react';
import HeroBanner from 'src/components/common/Presentational/HeroBanner/HeroBanner';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { withStyles, Link } from '@material-ui/core';
import MultiCarosual from 'src/components/shared/MultiCarousal/MultiCarosual';
import AdventureTabs from 'src/components/common/Smart/AdventureTabs/AdventureTabs';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import 'src/components/common/Smart/Home/Home.scss';
import Paper from '@mui/material/Paper';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: 'Schindler List', year: 1993 },
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
  { label: 'One Flew Over the Cuckoo Nest', year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
];

const Home = () => {
  const constantData: LocalizationInterface = localizedData();

  const { findNext, exploreNear } = constantData.home;
  const CustomTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: '50px',
          border: 'none',
        },
      },
    },
  })(TextField);

  return (
    <div className='home-page'>
      <HeroBanner />
      <div className='text-field'>
        <p className='heading'>{findNext}</p>
        <Paper className='paper-cls' elevation={6}>
          <Autocomplete
            className='autocomplete-cls'
            disablePortal
            id='combo-box-demo'
            options={top100Films}
            popupIcon={<SearchIcon />}
            renderInput={(params) => (
              <CustomTextField
                className='input-field'
                placeholder='Search by name trail'
                {...params}
              />
            )}
          />
        </Paper>
        <Link className='explore' href='/' color='inherit'>
          {exploreNear}
        </Link>
      </div>
      <div className='multi-carousal-cls'>
        <MultiCarosual carostring='Trail' />
      </div>
      <div className='adventure-panel'>
        <AdventureTabs />
      </div>
    </div>
  );
};

export default Home;
