import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdventureTabsCard from 'src/components/common/Presentational/AdventureTabsCard/AdventureTabsCard';
import { useGetAllCategoriesQuery, useGetTrailsByCategoryIdQuery } from 'src/store/reducers/api';
import { ITrailData1, ICategoryData } from 'src/utils/interfaces/Trail';
import 'src/components/common/Smart/AdventureTabs/AdventureTabs.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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

export default function AdventureTabs() {
  const { data: categories = { results: [] } } = useGetAllCategoriesQuery({});
  const [value, setValue] = React.useState(3);
  const { data: getTrails = [] } = useGetTrailsByCategoryIdQuery(value);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className='adventure-cls' sx={{ width: '100%' }}>
      <Box className='adventure-tabs-cls' sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          className='adventure-tabs'
          value={value}
          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {categories.results.map((category: ICategoryData) => {
            return (
              <Tab
                value={category?.id}
                className='adventure-tab'
                key={category?.id}
                label={category?.title}
              />
            );
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={value}>
        <div className='trail-info-cls'>
          {getTrails?.results?.map((trail: ITrailData1) => {
            return (
              <AdventureTabsCard
                key={trail?.id}
                trailImg={trail.properties[0]?.images[0]?.image}
                trailDistance={trail.properties[0]?.distance}
                trailTime={trail.properties[0]?.distance}
                trailTitle={trail.title}
              />
            );
          })}
        </div>
      </TabPanel>
    </Box>
  );
}
