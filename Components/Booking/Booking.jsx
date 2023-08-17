import React, { useRef, useState } from "react";
import { Box, Typography, Container, Grid, Modal, Alert } from "@mui/material";
import styles from "./booking.module.css";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FDEDED",
  boxShadow: 24,
  borderRadius: "5px",
};

export default function Booking() {
  const form = useRef();
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vbnvza2', 'template_vx8gtah', form.current, '7tdE5TiBWcJ75wHCu')
      .then((result) => {
        setOpen(true);
        setLoad(false);
        console.log('Your message sent successfully', result.text);
      }, (error) => {
        setLoad(false)
        console.log('Error sending email', error.text);
      });
    }
  return (
    <Box>
      <Container>
        <br />
        <br />
        <Box className={styles.booking}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={styles.box1}>
                <h1>Lets Book <span>Your Taxi</span>  Instantly</h1>
                <div className={styles.text}>
                  Subhan ALLAH Transport: Saudi Arabia’s #1 Umrah Taxi Service
                  Provider. Book online now for convenient and reliable
                  transportation. Wide range of vehicles available. Exceptional
                  customer service. Secure and hassle-free bookings.
                </div>
                <br />
                <div className={styles.text}>
                  <b>Reservations are available 24/7</b>
                </div>
                <br />
                {/* <div className={styles.number}>+966 54 344 6382</div> */}
                <Link href="tel:+966 54 344 6382" className={styles.number} style={{textDecoration: 'none'}} >
                +966 54 344 6382                </Link>
                <br />
                <br />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={styles.box2}>
              {open ? (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Alert severity="success">
                        Your Message is delivered.
                      </Alert>
                    </Box>
                  </Modal>
                ) : (
                  ""
                )}
                <Box className={styles.form}>
                  <br />
                  <center>
                   <form ref={form}>
                    <div className={styles.head}>
                      Book your <span>taxi</span>{" "}
                    </div>
                    <br />
                    <br />
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "15px" }}
                    >
                      <center>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder=" Name"
                          className={styles.name}
                        />
                      </center>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "15px" }}
                    >
                      <center>
                        <input
                          type="email"
                          name="email"
                          id="name"
                          placeholder=" Email"
                          className={styles.name}
                        />
                      </center>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "15px" }}
                    >
                      <center>
                        <input
                          type="number"
                          name="phoneNumber"
                          id="name"
                          placeholder=" Phone Number"
                          className={styles.name}
                        />
                      </center>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "15px" }}
                    >
                      <center>
                        <input
                          type="name"
                          name="pickupAddress"
                          id="name"
                          placeholder=" Pickup Adress"
                          className={styles.name}
                        />
                      </center>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "15px" }}
                    >
                      <center>
                        <input
                          type="name"
                          name="destinationAddress"
                          id="name"
                          placeholder=" Destination Adress"
                          className={styles.name}
                        />
                      </center>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "15px" }}
                    >
                      <center>
                        <select
                          name="cars"
                          id="cars"
                          form="carform"
                          className={styles.name2}
                          placeholder="Select Vehicle:"
                        >
                          {/* <option value="volvo">Select a Car:</option> */}
                          <option value="volvo">Camry</option>
                          <option value="saab">Staria</option>
                          <option value="opel">Hiroof</option>
                          <option value="audi">GMC</option>
                        </select>
                      </center>
                    </Grid>
                    <br />
                    <button onClick={sendEmail} className={styles.btn}>Request for taxi</button>
                    </form>
                  </center>
                    <br />
                </Box>
              </Box>
            </Grid>
            <br />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
