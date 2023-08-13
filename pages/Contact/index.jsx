import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import styles from "./contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Map from "../../Components/Map/Map";
import Link from "next/link";


export default function index() {
  return (
    <Box>
      <Box className={styles.about}>
        <Container>
          <Box className={styles.header}>
            <i>
              <h1>Contact Us</h1>
            </i>
            <br />
            <br />
          </Box>
        </Container>
      </Box>
      <br />
      <br />
      <br />
      <Box className={styles.info}>
        <center>
          <div className={styles.text}>Contact Information</div>
          <Container>
            <br />
            <Grid container>
              <br />
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <br />
                <div>
                  <LocationOnIcon className={styles.icon} sx={{fontSize:'3rem' }} />{" "}
                </div>
                <br />
                <div className={styles.head}>Location</div>
                <div className={styles.infor}>Makkah, Saudia arabia</div>
              </Grid>
              <br />
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <br />
                <div>
                  <CallIcon className={styles.icon} sx={{fontSize:'3rem' }} />{" "}
                </div>
                <br />
                <div className={styles.head}>Contact Number</div>
               
                
<Link
  href="https://wa.me/+966543446382"
  target="_blank"
  className={styles.icons}
  style={{ textDecoration: 'none' }}
>
  +966 54 344 6382
</Link>
<br />
<br />

                <Link href="tel:+966 5 357 1037" className={styles.icons} style={{textDecoration: 'none'}} >
                +966 5 357 1037             </Link>
              </Grid>
              <br />
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <br />
                <div>
                  <EmailIcon className={styles.icon} sx={{fontSize:'3rem' }} />{" "}
                </div>
                <br />
                <div className={styles.head}>Subhanumrahtaxi786@gmail.com</div>
                <div className={styles.infor}>Makkah, Saudia arabia</div>
              </Grid>
            </Grid>
          </Container>
        </center>
      </Box>
      <Map />
    </Box>
  );
}
