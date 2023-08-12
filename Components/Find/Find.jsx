import React from "react";
import {
  Card,
  CardContent,
  Button,
  Container,
  Grid,
  CardMedia,
  Box,
} from "@mui/material";
import styles from "./find.module.css";
import Link from "next/link";

export default function Find() {
  return (
    <Box>
      <Box className={styles.find}>
        <br />
        <br />
        <center>
          <Box className={styles.header}>
            Find <span>Hajj & Umrah</span> Taxi
          </Box>
          <br />
          <br />
          <Box className={styles.text}>
            <br />
            Our service facility is independently owned and operated providing{" "}
            <br /> full-service repair and maintenance services.
          </Box>
          <br />
          <button className={styles.btn}>
            {" "}
            <Link href="/Contact" style={{color: 'white' ,textDecoration: 'none'}}  >Book Now</Link>
          </button>
        </center>
      </Box>
    </Box>
  );
}
