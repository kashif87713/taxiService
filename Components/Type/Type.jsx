import * as React from 'react';
import styles from './type.module.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from "next/image";
import {useRouter} from 'next/router';
import img from '../../Images/1.png'
import img3 from '../../Images/2.png'
import img4 from '../../Images/4.png'
import img5 from '../../Images/6.png'


import { Card, CardContent,Button,Container,Grid,CardMedia,} from "@mui/material";

function TabPanel(props) {
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
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDetail = (e) => {
    e.preventDefault();
    router.push('/products')
  }
  return (
        <Box className={styles.type} >
      {/* <Container  > */}
         
          <br/>
    <Box  sx={{ width: '100%' }}>
      <Box sx={{  borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons
         allowScrollButtonsMobile aria-label="scrollable force tabs example" className={styles.tab}  >
          <Tab label= "Staria h1 " className={styles.tabhead} sx={{backgroundColor:'white',margin:'1px' }} {...a11yProps(0)} />
          <Tab label="Camry" className={styles.tabhead} sx={{backgroundColor:'white',margin:'1px' }} {...a11yProps(1)} />
          <Tab label="Hiroof" className={styles.tabhead} sx={{backgroundColor:'white',margin:'1px' }} {...a11yProps(2)} />
          <Tab label="GMC" className={styles.tabhead} sx={{backgroundColor:'white',margin:'1px' }} {...a11yProps(3)} />

        </Tabs>
      </Box>
      {/* <Container> */}
      <TabPanel value={value} index={0}>
      <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className={styles.box} >
              <Image src={img}  className={styles.img} alt='img' />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
<Box className={styles.header} >
  STARIA H1 7 Seater
</Box>
<ul className={styles.ul} >
  <li>Madina Airport to hotel <span>150 SAR</span> </li>
  <li>Madina hotel to Airport <span>150 SAR</span> </li>
  <li>Madina ziarah <span>250 SAR</span> </li>
  <li>Makkah to Madina <span>600 SAR</span> </li>
  <li>Makkah ziarah <span>300 SAR</span></li>
  <li>Makkah to Jeddah <span>300 SAR</span> </li>
  <li>Jeddah to Makkah <span>350 SAR</span> </li>
  <li>Madina to Badr ziarah <span>600 SAR</span> </li>

</ul>
          </Grid>

        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Grid container >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <Image src={img5}  className={styles.img} alt='img' />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
<Box className={styles.header} >
CAMRY
</Box>
<ul className={styles.ul} >
  <li>Madina Airport to hotel <span>150 SAR</span> </li>
  <li>Madina hotel to Airport <span>120 SAR</span> </li>
  <li>Madina ziarah <span>200 SAR</span> </li>
  <li>Makkah to Madina <span>450 SAR</span> </li>
  <li>Makkah ziarah <span>200 SAR</span></li>
  <li>Makkah to Jeddah <span>200 SAR</span> </li>
  <li>Jeddah to Makkah <span>200 SAR</span> </li>
  <li>Madina to Badr ziarah <span>450 SAR</span> </li>

</ul>
          </Grid>
          
        </Grid>
      </TabPanel>

     <TabPanel value={value} index={2}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <Image src={img3}  className={styles.img} alt='img' />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
<Box className={styles.header} >
HIROOF
</Box>
<ul className={styles.ul} >
  <li>Madina Airport to hotel <span>250 SAR</span> </li>
  <li>Madina hotel to Airport <span>250 SAR</span> </li>
  <li>Madina ziarah <span>300 SAR</span> </li>
  <li>Makkah to Madina <span>750 SAR</span> </li>
  <li>Makkah ziarah <span>400 SAR</span></li>
  <li>Makkah to Jeddah <span>400 SAR</span> </li>
  <li>Jeddah to Makkah <span>400 SAR</span> </li>
  <li>Madina to Badr ziarah <span>700 SAR</span> </li>

</ul>
          </Grid>
        </Grid>
      </TabPanel> 

      <TabPanel value={value} index={3}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <Image src={img4}  className={styles.img} alt='img' />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
<div className={styles.header} >
GMC 7 Seater
</div>
<ul className={styles.ul} >
  <li>Madina Airport to hotel <span>300 SAR</span> </li>
  <li>Madina hotel to Airport <span>300 SAR</span> </li>
  <li>Madina ziarah <span>300 SAR</span> </li>
  <li>Makkah to Madina <span>850 SAR</span> </li>
  <li>Makkah ziarah <span>400 SAR</span></li>
  <li>Makkah to Jeddah <span>400 SAR</span> </li>
  <li>Jeddah to Makkah <span>400 SAR</span> </li>
  <li>Madina to Badr ziarah <span>800 SAR</span> </li>

</ul>
          </Grid>
         
        </Grid>
      </TabPanel> 
      {/* </Container> */}
    </Box>
    {/* </Container> */}
    </Box>
  );
}

