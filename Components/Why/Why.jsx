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
import styles from "./why.module.css";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function Why() {
  return (
    <>
      <Box className={styles.why}>
        <Container>
          <Box className={styles.header}>
            <br />
            <center>
              Why <span>Choose</span> Us
            </center>
          </Box>
          <br />
          <br />
          <br />
          <Grid container>
            <br />
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={styles.box}>
                <Box className={styles.icon}>
                  {" "}
                  <AirplanemodeActiveIcon />{" "}
                </Box>
                <br />
                <Box className={styles.head}>AIRPORT TRANSPORT </Box>
              <br />
              <br />
              <Box className={styles.icon1}>
                  {" "}
                  <CheckCircleOutlineIcon />{" "}
                </Box>
                <br />
                <Box className={styles.head}>LONG & SHORT DISTANCE</Box>
              </Box>
            </Grid>
            <br />
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={styles.box}>
                <Box className={styles.icon}>
                  {" "}
                  <BookmarkBorderIcon />{" "}
                </Box>
                <br />
                <Box className={styles.head}>EASY ONLINE BOOKING  </Box>
              <br />
              <br />
              <Box className={styles.icon1}>
                  {" "}
                  <CalendarTodayIcon />{" "}
                </Box>
                <br />
                <Box className={styles.head}>DAY TOURS </Box>
              </Box>
            </Grid>
            <br />
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={styles.box}>
                <Box className={styles.icon1}>
                  {" "}
                  <DirectionsCarIcon />{" "}
                </Box>
                <br />
                <Box className={styles.head}>PROFESSIONAL DRIVERS  </Box>
              <br />
              <br />
              <Box className={styles.icon1}>
                  {" "}
                  <SentimentSatisfiedAltIcon />{" "}
                </Box>
                <br />
                <Box className={styles.head}>PREMIUM QUALITY</Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
