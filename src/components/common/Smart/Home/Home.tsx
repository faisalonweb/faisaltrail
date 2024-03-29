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
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

let topTrails = [
  { id: 1, label: 'Task grow choice student return wish. Specific affect international.' },
  { id: 2, label: 'Tax character car long similar reach next' },
  { id: 3, label: 'Situation watch hot score any meeting environmental.' },
];
interface ChangeValues {
  id: number;
  label: string;
}

const Home = () => {
  const constantData: LocalizationInterface = localizedData();
  const navigate = useNavigate();
  const { findNext, exploreNear } = constantData.home;
  const [input, setInput] = useState('');
  const debouncedSearchTerm = useDebounce(input, 500);
  const { data: searchTrails = [] } = useSearchTrailQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm.length < 3,
  });

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
  const datatrails = (searchData: TrailsCount) => {
    if (!searchData || !searchData?.results?.length) {
      return [];
    }
    topTrails = searchData?.results?.map((values: ITrailData1) => {
      return { id: values.id, label: values.title || '' };
    });
  };
  datatrails(searchTrails);

  const handleChange = (e: React.SyntheticEvent<Element, Event>, v: ChangeValues | null) => {
    navigate(`/trails/trail-info/${v?.id}`);
  };
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
            onChange={handleChange}
            isOptionEqualToValue={(option, value) => option.id === value.id}
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
        <MultiCarosual />
      </Box>
      <div className='adventure-panel'>
        <AdventureTabs />
      </div>
    </Box>
  );
};

export default Home;
