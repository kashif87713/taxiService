import React from "react";
import { Box, Typography, Container } from "@mui/material";
import styles from "./about.module.css";
import Company from "../../Components/Company/Company";

export default function index() {
  return (
    <div>
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
