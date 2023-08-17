import React from "react";
import { Box, Typography, Container } from "@mui/material";
import styles from "./about.module.css";
import Company from "../../Components/Company/Company";
import Head from 'next/head';


export default function index() {
  return (
    <div>
      <Head>

                <title>About Subhanallah Umrah Taxi - Reliable Umrah Transportation Services</title>
                <meta name="description" content="Learn about Subhanallah Umrah Taxi, your trusted partner for reliable and affordable Umrah transportation services in Saudi Arabia. Discover our commitment to quality, safety, and convenience for your Umrah pilgrimage journey" />
                
                <meta name="keywords" content="Umrah taxi services,Reliable Umrah transportation,Affordable Umrah taxi,Professional Umrah cab services,Saudi Arabia airport transfers,Umrah pilgrimage transport,Book Umrah taxi,Hassle-free Umrah transportation,
                Affordable Umrah cab in Saudi Arabia,taxi cab,taxi near me,uber taxi,taxi service near me,taxi booking,car rental comp,airport car rental,best car rental,budget rental car near me
,cars rental,enterprises car,luxury rental car,car booking,car rental,rentalcars,economy car rent,luxury car rental,cheap car renta,budget car rental near me,airport car rental,travel agent,travel agency near me,online travel agent,airport lounge
,24/7 Umrah taxi services in makkah,Top Umrah taxi service makkah,Top Umrah taxi service madina, ziarat,Local Umrah shuttle services
,Jeddah Umrah transportation,riyadh Umrah transportation,Professional cab services,Trusted Umrah cab provider
,Mecca transportation solutions" />

            </Head>
      <Box className={styles.about}>
        <Container>
          <Box className={styles.header}>
            <i>
              <h1>About Us</h1>
            </i>
            <br />
            <br />
          </Box>
        </Container>
      </Box>
      <br />
      <br />
      <Company />
    </div>
  );
}
