import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import s from '../AboutCompanyHome.module.scss';
import styled from '@emotion/styled';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={s.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'start' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '30px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Автосалон" {...a11yProps(0)} />
          <Tab label="Трейд-ин" {...a11yProps(1)} />
          <Tab label="Покупка" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {arrBox.map((el, i) => (
        <TabPanel key={i} value={value} index={i}>
          <strong>{el.title}</strong>
          <span>{el.subtitle}</span>
        </TabPanel>
      ))}
    </Box>
  );
}

const arrBox = [
  {
    title: ' Об автосалоне ABC',
    subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor
  tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin
  dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo.
  Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet
  vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet
  vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit
  amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus.
  Phasellus id enim libero.`,
  },
  {
    title: '  Об трейд-ин',
    subtitle: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor
  tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin
  dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo.
  Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet
  vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet
  vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit
  amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus.
  Phasellus id enim libero.`,
  },
  {
    title: ' О Покупке',
    subtitle: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor
  tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin
  dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo.
  Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet
  vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet
  vel, rhoncus nec sem. Pha`,
  },
];
