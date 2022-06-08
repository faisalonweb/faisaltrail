import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position='static' elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='inherit'
          style={{ background: '#f2f2f2' }}
          aria-label='full width tabs example'
        >
          <Tab style={{ color: '#004225', fontWeight: 'bold' }} label='Weather' {...a11yProps(0)} />
          <Tab
            style={{ color: '#004225', fontWeight: 'bold' }}
            label='UV Index'
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: '#004225', fontWeight: 'bold' }}
            label='Daylight'
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Typography>
          The Lake Agnes Trail is an accessible and relatively short route up to the Lake Agnes Tea
          House which was built by the Canadian Pacific Railway in 1901 as a refuge for hikers
          travelling to higher locations. The trail has an elevation gain of 400 metres and offers
          fantastic views of the Nokhu Crags and Lake Louise. up to the Lake Agnes Tea House which
          was built by the Canadian Pacific Railway in 1901 as a refuge for hikers travelling to
          higher locations. The trail has an elevation gain of 400 metres and offers fantastic views
          of the Nokhu Crags and Lake Louise.
        </Typography>
      </TabPanel>
    </Box>
  );
}
