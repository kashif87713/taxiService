import React from 'react'
import styles from './vehicle.module.css'
import { Box, Typography, Container, Grid } from "@mui/material";
import BasicTabs from '../Type/Type';

export default function Vehicle() {
  return (
    <>
    <Box className={styles.vehicle} >
      <Container>
        <center>
<Box className={styles.header} >
  <br />
  <br />
Subhan Umrah <span>Taxi Vehicle</span>  Collection
</Box>
<br />
<div className={styles.text} >We provide taxi service All over Saudi Arabia</div>
</center>
    <BasicTabs/>
</Container>
    </Box>
    <br />
    </>
  )
}
