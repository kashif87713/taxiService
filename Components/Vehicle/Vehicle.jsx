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
Usman <span>Taxi Vehicle</span>  Collection
</Box>
</center>
    <BasicTabs/>
</Container>
    </Box>
    <br />
    </>
  )
}
