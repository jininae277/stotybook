import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';

// TabPanel 컴포넌트 정의
function TabCustomMui(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Item Two" id="tab-1" aria-controls="tabpanel-1" />
          <Tab label="Item Three" id="tab-2" aria-controls="tabpanel-2" />
        </Tabs>
      </Box>
      <TabCustomMui value={value} index={0}>
        Item One
      </TabCustomMui>
      <TabCustomMui value={value} index={1}>
        Item Two
      </TabCustomMui>
      <TabCustomMui value={value} index={2}>
        Item Three
      </TabCustomMui>
    </Box>
  );
}


