import React from "react";
import styles from "./footer.module.css";
import { Container, Typography, Box, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import EmailIcon from "@mui/icons-material/Email";
import { createStyles, makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (e, categ) => {
    e.preventDefault();
    // router.push("/category");
    router.push(`products/?category=${encodeURIComponent(categ)}`);
  };
  return (
    <div className={styles.footer}>
      <div className={styles.foter}>
               <br />
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <div className={styles.footerhead}>
                <b>About Company</b>
              </div>
              {/* <br/> */}
              <Typography className={styles.about} pt={2}>
                {" "}
                Subhan ALLAH Umrah taxi service  has a wide range of premium quality
                services to provide the best value for money to global
                customers
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className={classes.footerdetail}
            >
              <div className={styles.footerhead}>
                <b>Information</b>
              </div>

              <br />
              <Link href="/" className={styles.helpdetails} style={{textDecoration: 'none'}}  >
              
                  <b>Home</b>{" "}
                
              </Link>

              <br />
              <br />
              <Link href="/Vehicles" className={styles.helpdetails} style={{textDecoration: 'none'}} >
              
                  <b>Our Vehicles </b>{" "}
                
              </Link>
              <br />
              <br />
              <Link href="/Locations" className={styles.helpdetails} style={{textDecoration: 'none'}} >
              
                  <b>Locations</b>{" "}
                
              </Link>
              <br />
              <br />
              <Link href="/About" className={styles.helpdetails} style={{textDecoration: 'none'}} >
              
                  <b>About</b>{" "}
                
              </Link>
              <br />
              <br />
              <Link href="/Contact" className={styles.helpdetails} style={{textDecoration: 'none'}} >
              
                  <b>Contact</b>{" "}
                
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className={classes.footerdetail}
            >
              <div className={styles.footerhead}>
                <b>Main Menu</b>
              </div>
              <br />
              <Link href="/Contact" className={styles.menudetails} style={{textDecoration: 'none'}} >
              
               Book a Cab {" "}
            
          </Link>
              
             <br />
             <br />
               <Link href="/Booking" className={styles.menudetails} style={{textDecoration: 'none'}} >
              
               Let&apos;s talk Now {" "}
            
          </Link>
<br />
              <br />
               <Link href="/Locations" className={styles.menudetails} style={{textDecoration: 'none'}} >
              
               Hajj & Umrah Loactions {" "}
            
          </Link>
              <br />
              <br />
               <Link href="/Contact" className={styles.menudetails} style={{textDecoration: 'none'}} >
              
               Get a quote{" "}
            
          </Link>
              
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className={classes.footerdetail}
            >
              <div className={styles.footerhead}>
                <b>Contact Us</b>
              </div>
              <br />
              <Box className={styles.boxIcon}>
                <div className={styles.ico}>
                  <PhoneSharpIcon fontSize="medium" />
                </div>
                <Link href="tel:+966 53 557 1037" className={styles.icons} style={{textDecoration: 'none'}} >
                +966 53 557 1037                </Link>
              </Box>
              <br />
              <Box className={styles.boxIcon}>
                <div className={styles.ico}>
                  <WhatsAppIcon fontSize="medium" />
                </div>
               
<Link
  href="https://wa.me/+966543446382"
  target="_blank"
  className={styles.icons}
  style={{ textDecoration: 'none' }}
>
  +966 54 344 6382
</Link>
              </Box>
              <br />
              <Box className={styles.boxIcon}>
                <div className={styles.ico}>
                  <EmailIcon fontSize="medium" />
                </div>
                <Link
                  href="mailto:Subhanumrahtaxi786@gmail.com "
                  className={styles.icons}
                  style={{textDecoration: 'none'}}
                >
                  Subhanumrahtaxi786@gmail.com{" "}
                </Link>
              </Box>
              
            </Grid>
          </Grid>
          <br />
          <br />
          <Box className={styles.hr}></Box>
          <br />
          <br />
          <Grid>
            <Typography className={styles.footerrights}>
              Copyright ©  2023 Subhan Umrah taxi services  (Pvt) Ltd. All
              Rights Reserved.
            </Typography>
          <br />
          </Grid>
        </Container>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    footerheader: {
      "&:hover": {
        cursor: "pointer",
        color: "white",
      },
      fontWeight: "700",
      fontSize: "2rem",
      color: "white",
      textAlign: "left",
    },
    about: {
      "&:hover": {
        cursor: "pointer",
        color: "7a7d80",
      },
      lineHeight: "25px",
      textAlign: "left",
      fontSize: "0.9rem",
      fontWeight: "100",
      color: "white",
      width: "250px",
    },
    helpdetails: {
      "&:hover": {
        cursor: "pointer",
        marginRight: "2px",
        color: "white",
      },
      fontSize: "0.9rem",
      fontWeight: "100",
      padding: "0.7rem 0 0 0rem",
      color: "white",
      marginTop: "15px",
    },
    footerdetail: {
      textAlign: "left",
      fontWeight: "100",
      fontSize: "10px",
    },
    menudetails: {
      "&:hover": {
        color: "white",
        cursor: "pointer",
        marginRight: "2px",
      },
      fontSize: "0.9rem",
      fontWeight: "100",
      padding: "0.7rem 0 0 0rem",
      color: "white",
      marginTop: "1px",
    },
    boxIcon: {
      display: "flex",
      flexDirection: "row",
      marginTop: "0.7rem",
      padding: "0rem 0 0 1.3rem",
      color: "rgb(168, 178, 184)",
    },
    footerrights: {
      "&:hover": {
        cursor: "pointer",
        color: "white",
      },
      margin: "auto",
      textAlign: "center",
      padding: "2.3rem 0rem 1rem 0",
      fontSize: "1rem",
      color: "rgb(168, 178, 184)",
    },
    icons: {
      "&:hover": {
        color: "white",
        cursor: "pointer",
      },
      fontSize: "1.1rem",
      // margin: '0 5px',
      lineHeight: "25px",
    },
  })
);
