import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdventureTabsCard from 'src/components/common/Presentational/AdventureTabsCard/AdventureTabsCard';
import oneLogo from "src/assets/images/one.jpg";
import twoLogo from "src/assets/images/two.jpg";
import threeLogo from "src/assets/images/three.jpg";
import fourLogo from "src/assets/images/four.jpg";
import 'src/components/common/Smart/AdventureTabs/AdventureTabs.scss'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
 const trails = [
  {
  id: "1",
  trail_image:oneLogo,
  title: "Huaqiggng Pool",
  distance: '1.4km',
  time: '22m'
  },
  {
    id: "2",
    trail_image:twoLogo,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
  },
  {
    id: "3",
    trail_image:threeLogo,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
  },
  {
    id: "4",
    trail_image:fourLogo,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
  },
  {
    id: "5",
    trail_image:oneLogo,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
    },
    {
      id: "6",
      trail_image:twoLogo,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
    },
    {
      id: "7",
      trail_image:fourLogo,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
    },
    {
      id: "8",
      trail_image:threeLogo,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
    },
    {
      id: "9",
      trail_image:oneLogo,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
      },
      {
        id: "10",
        trail_image:threeLogo,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
      },
      {
        id: "11",
        trail_image:twoLogo,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
      },
      {
        id: "12",
        trail_image:fourLogo,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
      },
      {
        id: "13",
        trail_image:threeLogo,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
        },
        {
          id: "14",
          trail_image:fourLogo,
          title: "Huaqing Pool",
          distance: '1.4km',
          time: '22m'
        },
        {
          id: "15",
          trail_image:twoLogo,
          title: "Huaqing Pool",
          distance: '1.4km',
          time: '22m'
        },
        {
          id: "16",
          trail_image:oneLogo,
          title: "Huaqing Pool",
          distance: '1.4km',
          time: '22m'
        }
]

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AdventureTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="adventure-cls" sx={{ width: '100%' }}>
      <Box className="adventure-tabs-cls" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className="adventure-tabs" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="adventure-tab" label="Trending trails" {...a11yProps(0)} />
          <Tab className="adventure-tab" label="parks worth a look" {...a11yProps(1)} />
          <Tab className="adventure-tab" label="Cities to explore" {...a11yProps(2)} />
          <Tab className="adventure-tab" label="Countries to consider" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="trail-info-cls">
        <>
          {
          trails.map((trail)=>(
            <AdventureTabsCard 
              trail_img={trail.trail_image} 
              trail_distance={trail.distance} 
              trail_time={trail.time} 
              trail_title={trail.title}/>
            
          ))
          }
         </>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        parks worth a look
      </TabPanel>
      <TabPanel value={value} index={2}>
        Cities to explore
      </TabPanel>
      <TabPanel value={value} index={3}>
        Countries to consider
      </TabPanel>
    </Box>
  );
}
