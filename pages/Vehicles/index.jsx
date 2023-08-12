import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import styles from './vehicle.module.css'
import Vehicle from '../../Components/Vehicle/Vehicle';
import Find from '../../Components/Find/Find'




export default function index() {
  return (
    <Box>
      <Box className={styles.vehicles} >
      <Box className={styles.header} >
  <i><h1>Our Vehicles <span>and Pricing </span>services</h1></i>
<br />
<br />
</Box>
      </Box>
      <Vehicle/>
      <br />
      <Find/>
    </Box>
  )
}
