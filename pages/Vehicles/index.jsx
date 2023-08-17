import React from "react";
import { Box, Typography, Container } from "@mui/material";
import styles from "./vehicle.module.css";
import Vehicle from "../../Components/Vehicle/Vehicle";
import Find from "../../Components/Find/Find";
import Head from "next/head";

export default function index() {
  return (
    <Box>
       <Head>

<title>Contact Subhanallah Umrah Taxi - Get in Touch for Reliable Umrah Transportation</title>
<meta name="description" content="Reach out to Subhanallah Umrah Taxi for inquiries, bookings, and information about our reliable Umrah transportation services. Our dedicated team is here to assist you in making your Umrah pilgrimage journey comfortable and hassle-free" />
<meta name="keywords" content="Jeddah Umrah transportation details,Reach out to our team,Reliable customer service
,Umrah transportation inquiries,Book reliable cab services,Customer support for Umrah travel, Mecca travel solutions contact
,Medina taxi booking assistance,Umrah taxi cars,Comfortable car fleet,Reliable transportation options,Professional cab services,Mecca pilgrimage vehicles,Medina travel solutions,Jeddah transportation fleet,
 ,Umrah taxi services,Reliable Umrah transportation,Affordable Umrah taxi,Professional Umrah cab services,Saudi Arabia airport transfers,Umrah pilgrimage transport,Book Umrah taxi,Hassle-free Umrah transportation,
Affordable Umrah cab in Saudi Arabia,Contact Subhanallah Umrah Taxi,Holy sites in Saudi Arabia,Mecca Ziarat,Religious tourism,Islamic heritage spots
,Professional Ziarat transport," />

</Head>
      <Box className={styles.vehicles}>
        <Box className={styles.header}>
          <i>
            <h1>
              Our Vehicles <span>and Pricing </span>services
            </h1>
          </i>
          <br />
          <br />
        </Box>
      </Box>
      <Vehicle />
      <br />
      <Find />
    </Box>
  );
}
