import React from 'react'
import { Box, Typography, Container } from "@mui/material";
import styles from './location.module.css';
import BasicTabs from '../../Components/Ziarat/Ziarat'
import Head from 'next/head';


export default function index() {
  return (
    <Box>
      <Head>

<title>Ziarat Locations in Saudi Arabia | Subhanallah Umrah Taxi</title>
<meta name="description" content="Discover the significant Ziarat locations in Saudi Arabia with Subhanallah Umrah Taxi. Explore the holy sites and book your reliable transportation for a meaningful spiritual journey" />

<meta name="keywords" content="Umrah taxi services,Reliable Umrah transportation,Affordable Umrah taxi,Professional Umrah cab services,Saudi Arabia airport transfers,Umrah pilgrimage transport,Book Umrah taxi,Hassle-free Umrah transportation,
Affordable Umrah cab in Saudi Arabia,taxi cab,taxi near me,uber taxi,taxi service near me,taxi booking,car rental comp,airport car rental,best car rental,budget rental car near me
,cars rental,enterprises car,Top Umrah taxi service makkah,Top Umrah taxi service madina, ziarat,Local Umrah shuttle services
,Jeddah Umrah transportation,riyadh Umrah transportation,Professional cab services,Trusted Umrah cab provider
,Mecca transportation solutions,Ziarat locations,Holy sites in Saudi Arabia,Mecca Ziarat,Religious tourism,Islamic heritage spots
,Professional Ziarat transport,


" />

</Head>
       <Box className={styles.location} >
        <Container>
      <Box className={styles.header} >
  <i><h1>Hajj and <span>Umrah Locations </span></h1></i>
<br />
<br />
</Box>
</Container>
      </Box>
      <Box  >
      <Box className={styles.header2} >
        <center>
          <br />
          <br />
  <h1>Hajj and <span>Umrah  </span>Locations</h1>
  <div className={styles.text} >The Beauty of Makkah & Madina goes to next level when visitor from all around the world come for ziaraat <br />
Harmain Taxi extends it with his riding services in cheap price.</div>
  </center>
<br />
<br />
</Box>
      </Box>
      <BasicTabs/>
    </Box>
     )
    }
