import React, { useEffect, useState } from 'react';
import HeroBanner from 'src/components/common/Presentational/HeroBanner/HeroBanner';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import Link from '@mui/material/Link';
import MultiCarosual from 'src/components/shared/MultiCarousal/MultiCarosual';
import AdventureTabs from 'src/components/common/Smart/AdventureTabs/AdventureTabs';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import { useSearchTrailQuery } from 'src/store/reducers/api';
import 'src/components/common/Smart/Home/Home.scss';
import { ITrailData1, TrailsCount } from 'src/utils/interfaces/Trail';
import Paper from '@mui/material/Paper';
let topTrails = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
  { label: '12 Angry Men' },
  { label: 'Schindler List' },
  { label: 'Pulp Fiction' },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly' },
  { label: 'Fight Club' },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
  },
  { label: 'Forrest Gump' },
  { label: 'Inception' },
  {
    label: 'The Lord of the Rings: The Two Towers',
  },
  { label: 'One Flew Over the Cuckoo Nest' },
  { label: 'Goodfellas' },
  { label: 'The Matrix' },
  { label: 'Seven Samurai' },
  {
    label: 'Star Wars: Episode IV - A New Hope',
  },
];
function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
const Home = () => {
  const constantData: LocalizationInterface = localizedData();
  const { findNext, exploreNear } = constantData.home;
  const [input, setInput] = useState('');
  const debouncedSearchTerm = useDebounce(input, 500);
  const { data: searchTrails = [] } = useSearchTrailQuery(debouncedSearchTerm);
  const datatrails = (searchData: TrailsCount) => {
    if (!searchData || !searchData?.results?.length) {
      return [];
    }
    topTrails = searchData?.results?.map((values: ITrailData1) => {
      return { label: values.title || '' };
    });
  };
  datatrails(searchTrails);
  return (
    <Box sx={{ bgcolor: 'background.default' }} className='home-page'>
      <HeroBanner />
      <div className='text-field'>
        <p className='heading'>{findNext}</p>
        <Paper sx={{ bgcolor: 'background.default' }} className='paper-cls' elevation={6}>
          <Autocomplete
            className='autocomplete-cls'
            disablePortal
            id='combo-box-demo'
            options={topTrails}
            popupIcon={<SearchIcon />}
            renderInput={(params) => (
              <TextField
                style={{ border: 'none' }}
                className='input-field'
                placeholder='Search by name trail'
                {...params}
                onChange={({ target }) => setInput(target.value)}
              />
            )}
          />
        </Paper>
        <Link className='explore' href='/explore' color='inherit'>
          {exploreNear}
        </Link>
      </div>
      <Box sx={{ bgcolor: 'background.default' }} className='multi-carousal-cls'>
        <MultiCarosual/>
      </Box>
      <div className='adventure-panel'>
        <AdventureTabs />
      </div>
    </Box>
  );
};

export default Home;
