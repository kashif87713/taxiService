import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import styles from "./company.module.css";
import img from "../../Images/9.webp";
import Link from "next/link";
import Image from "next/Image";

export default function Company() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <br />
            <br />
            <Box className={styles.header}>
              The Most Trusted Taxi Company in Saudi Arabia
            </Box>
            <Box className={styles.text}>
              <br />
              Umrah taxi service provide very cheap taxi service in all over
              Kingdom Saudi Arabia especially we provide taxi service to Hajj
              and Umrah pilgrims.
            </Box>
            <br />
            <button className={styles.btn}>
              {" "}
              <Link href="/Locations">Book Now</Link>
            </button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <br />
            <Image src={img} className={styles.img} alt="img" />
          </Grid>
        </Grid>
        <br />
        <br />
        <center>
          <Box className={styles.text}>
            Usman Taxi Transport is a reliable transportation company based in
            Makkah Al Aziziyah, Saudi Arabia. Our primary goal is to provide
            safe and comfortable transportation for our customers during their
            spiritual journey to holy destinations like Makkah, Madina, and
            Jeddah. We cater to both individual and group travelers and have a
            fleet of vehicles that can accommodate different group sizes and
            preferences.
            <br />
            <br />
            Usman Taxi Transport, we understand the importance of reliable and
            hassle-free transportation during religious trips. We take pride in
            our experienced and professional drivers who are committed to
            ensuring our customers’ safety and comfort throughout their journey.
            <br />
            <br />
            Our services include transportation to and from major airports,
            train stations, hotels, and holy sites in the region. We also
            provide customized tour packages for customers who want to explore
            different destinations in Saudi Arabia. Our vehicles are equipped
            with modern amenities like air conditioning, comfortable seating,
            and entertainment systems to make the journey as comfortable as
            possible.
            <br />
            <br />
            We value our customers’ satisfaction and strive to provide them with
            the best service possible. Our customer support team is available
            24/7 to address any questions or concerns that customers may have.
          </Box>
        </center>
        <br />
        <br />
      </Container>
    </div>
  );
}
