import React from 'react';
import { Box, Typography, Container, Grid } from "@mui/material";
import styles from './booking.module.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


export default function Booking() {
  return (
    <Box>
      <Container>
        <br />
        <br />
      <Box className={styles.booking} >
<Grid container >
<Grid item  xs={12} sm={12} md={6} lg={6} >
<Box className={styles.box1} >
<h1>Lets Book Your Taxi Instantly</h1>
<div className={styles.text} >Usman Transport: Saudi Arabia’s #1 Umrah Taxi Service Provider. Book online now for convenient and reliable transportation. Wide range of vehicles available. Exceptional customer service. Secure and hassle-free bookings.</div>
<br />
<div className={styles.text}><b>Reservations are available 24/7</b></div>
<br />
<div className={styles.number}>+966 54 344 6382</div>
<br />
</Box>
</Grid>
<Grid item  xs={12} sm={12} md={6} lg={6} >
<Box className={styles.box2} >
<Box  className={styles.form} >
<br />
<center>
<div className={styles.head} >Book your <span>taxi</span> </div>
<br />
<br />
<Grid  item  xs={12}  sm={12}  md={12}  lg={12}  sx={{ marginTop: "15px" }}     >
               
                <center>

                  <  input  type="text"  name="name"  id="name"  placeholder=" Name"  className={styles.name}  />
                </center>
              </Grid>
              <Grid  item  xs={12}  sm={12}  md={12}  lg={12}  sx={{ marginTop: "15px" }}     >
               
                <center>

                  <  input  type="email"  name="name"  id="name"  placeholder=" Email"  className={styles.name}  />
                </center>
              </Grid>
              <Grid  item  xs={12}  sm={12}  md={12}  lg={12}  sx={{ marginTop: "15px" }}     >
               
                <center>

                  <  input  type="number"  name="name"  id="name"  placeholder=" Phone Number"  className={styles.name}  />
                </center>
              </Grid>
              <Grid  item  xs={12}  sm={12}  md={12}  lg={12}  sx={{ marginTop: "15px" }}     >
               
                <center>

                  <  input  type="name"  name="name"  id="name"  placeholder=" Pickup Adress"  className={styles.name}  />
                </center>
              </Grid>
              <Grid  item  xs={12}  sm={12}  md={12}  lg={12}  sx={{ marginTop: "15px" }}     >
               
                <center>

                  <  input  type="name"  name="name"  id="name"  placeholder=" Destination Adress"  className={styles.name}  />
                </center>
              </Grid>
              <Grid  item  xs={12}  sm={12}  md={12}  lg={12}  sx={{ marginTop: "15px" }}     >
               
                <center>
                <select name="cars" id="cars" form="carform" className={styles.name2} placeholder='Select Vehicle:' >
                {/* <option value="volvo">Select a Car:</option> */}
  <option value="volvo">Camry</option>
  <option value="saab">Staria</option>
  <option value="opel">Hiroof</option>
  <option value="audi">Gmc</option>
</select>
                </center>
              </Grid>
              <br />
              <button  className={styles.btn}>Request for taxi</button> 

</center>
</Box>
</Box>
</Grid>
<br />
</Grid>
      </Box>
</Container>
    </Box>
  )
}
