import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import styles from './home.module.css';
import Link from 'next/link';
import Booking from '../../Components/Booking/Booking';
import Vehicle from '../../Components/Vehicle/Vehicle';
import Trusted from '../../Components/Trusted/Trusted';
import Why from '../../Components/Why/Why';
import Find from '../../Components/Find/Find'

export default function HomePage() {
  return (
    <Box>
      <Box className={styles.home} >
<Box className={styles.header} >
  <i><h1>Welcome to <span className='styles.head1' >Usman Taxi Service</span></h1></i>
 <i> <div className={styles.head2} >Ridding and tours services in
Saudi Arabia.</div></i>
<br />
<br />
</Box>
<button  className={styles.btn}>  <Link href='/Locations'> <a className={styles.link}>Collection</a></Link></button> 
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
