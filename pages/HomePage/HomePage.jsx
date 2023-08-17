import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import styles from './home.module.css';
import Link from 'next/link';
import Booking from '../../Components/Booking/Booking';
import Vehicle from '../../Components/Vehicle/Vehicle';
import Trusted from '../../Components/Trusted/Trusted';
import Why from '../../Components/Why/Why';
import Find from '../../Components/Find/Find'
import Head from 'next/head';

export default function HomePage() {
  return (
    <Box>
      <Head>
                <title>Reliable Umrah Taxi Services in Saudi Arabia | Subhanallah Umrah Taxi</title>
                <meta name="description" content=""Experience hassle-free Umrah taxi services in Saudi Arabia with Subhanallah umrah Taxi Affordable and professional transportation solutions for your umra pilgrimage Book  reliable cab now />
               
                <meta name="keywords" content="Umrah taxi services,Reliable Umrah transportation,Affordable Umrah taxi,Professional Umrah cab services,Saudi Arabia airport transfers,Umrah pilgrimage transport,Book Umrah taxi,Hassle-free Umrah transportation,
                Affordable Umrah cab in Saudi Arabia,taxi cab,taxi near me,uber taxi,taxi service near me,taxi booking,car rental comp,airport car rental,best car rental,budget rental car near me
,cars rental,enterprises car,luxury rental car,car booking,car rental,rentalcars,economy car rent,luxury car rental,cheap car renta,budget car rental near me,airport car rental,travel agent,travel agency near me,online travel agent,airport lounge
,24/7 Umrah taxi services in makkah,Top Umrah taxi service makkah,Top Umrah taxi service madina, ziarat,Local Umrah shuttle services
,Jeddah Umrah transportation,riyadh Umrah transportation  " />

            </Head>
      <Box className={styles.home} >
<Box className={styles.header} >
  <i><h1>Welcome to <span className='styles.head1' >Subhan ALLAH Umrah </span>Taxi Service</h1></i>
 <i> <div className={styles.head2} >Ridding and tours services in All Over
Saudi Arabia.</div></i>
<br />
<br />
</Box>
<button  className={styles.btn}>  <Link href='/Locations' style={{ color:'white' , textDecoration: 'none'}} >Locations</Link></button> 
      </Box>
      <br />
      <Booking/>
      <br />
      <br />
      <br />
      <Vehicle/>
      <Trusted/>
      <Why/>
      <Find/>
    </Box>
  )
}
