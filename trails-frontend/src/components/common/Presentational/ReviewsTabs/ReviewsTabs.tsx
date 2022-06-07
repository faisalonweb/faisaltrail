import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TrailPhotos from 'src/components/common/Presentational/TrailPhotos/TrailPhotos';
import UserComment from 'src/components/common/Presentational/UserComment/UserComment';
import 'src/components/common/Presentational/ReviewsTabs/ReviewsTabs.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index: number) => {
  //   setValue(index);
  // };

  return (
    <Box className='review-cls' sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position='static' elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='inherit'
          style={{ background: '#f2f2f2' }}
          aria-label='full width tabs example'
        >
          <Tab
            style={{ color: '#004225', fontWeight: 'bold' }}
            label='Reviews(4,437)'
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: '#004225', fontWeight: 'bold' }}
            label='Photo(5,333)'
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: '#004225', fontWeight: 'bold' }}
            label='Activities(3,999)'
            {...a11yProps(2)}
          />
          <Tab
            style={{ color: '#004225', fontWeight: 'bold' }}
            label='Completed(3,999)'
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <UserComment />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <TrailPhotos />
      </TabPanel>
    </Box>
  );
}
