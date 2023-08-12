import React from 'react'
import { Box, Typography, Container } from "@mui/material";
import styles from './location.module.css';
import BasicTabs from '../../Components/Ziarat/Ziarat'

export default function index() {
  return (
    <Box>
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
