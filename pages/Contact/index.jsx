import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import styles from "./contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Map from "../../Components/Map/Map";
import Link from "next/link";
import Head from "next/head";

export default function index() {
  return (
    <Box>
       <Head>

<title>Contact | Subhanallah Umrah Taxi</title>
<meta name="description" content="Discover the significant Ziarat locations in Saudi Arabia with Subhanallah Umrah Taxi. Explore the holy sites and book your reliable transportation for a meaningful spiritual journey" />
<meta name="keywords" content="Umrah taxi services,Reliable Umrah transportation,Affordable Umrah taxi,Professional Umrah cab services,Saudi Arabia airport transfers,Umrah pilgrimage transport,Book Umrah taxi,Hassle-free Umrah transportation,
Affordable Umrah cab in Saudi Arabia,taxi cab,taxi near me,uber taxi,taxi service near me,taxi booking,car rental comp,airport car rental,best car rental,budget rental car near me
,cars rental,enterprises car,Top Umrah taxi service makkah,Top Umrah taxi service madina, ziarat,Local Umrah shuttle services
,Jeddah Umrah transportation,riyadh Umrah transportation,Professional cab services,Trusted Umrah cab provider
,Mecca transportation solutions,Ziarat locations,Holy sites in Saudi Arabia,Mecca Ziarat,Religious tourism,Islamic heritage spots
,Professional Ziarat transport," />

</Head>
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
                  <LocationOnIcon
                    className={styles.icon}
                    sx={{ fontSize: "3rem" }}
                  />{" "}
                </div>
                <br />
                <div className={styles.head}>Location</div>
                <div className={styles.infor}>Makkah, Saudia arabia</div>
              </Grid>
              <br />
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <br />
                <div>
                  <CallIcon className={styles.icon} sx={{ fontSize: "3rem" }} />{" "}
                </div>
                <br />
                <div className={styles.head}>Contact Number</div>

                <Link
                  href="https://wa.me/+966543446382"
                  target="_blank"
                  className={styles.infor}
                  style={{ textDecoration: "none" }}
                >
                  +966 54 344 6382
                </Link>
                <br />
                <br />

                <Link
                  href="tel:+966 53 557 1037"
                  className={styles.infor}
                  style={{ textDecoration: "none" }}
                >
                  +966 53 557 1037{" "}
                </Link>
              </Grid>
              <br />
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <br />
                <div>
                  <EmailIcon
                    className={styles.icon}
                    sx={{ fontSize: "3rem" }}
                  />{" "}
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
