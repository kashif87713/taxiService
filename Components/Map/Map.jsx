import React, { useRef, useState } from "react";
import { Box, Typography, Container, Grid, Modal, Alert } from "@mui/material";
import styles from "./map.module.css";
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

export default function Map() {
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
      <Box className={styles.map}>
        <Container>
          <Grid container>
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
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={styles.box2}>
                <Box className={styles.form}>
                  <br />
                  <center>
                    <form ref={form}>
                    {/* <div className={styles.head} >Book your <span>taxi</span> </div> */}
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
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <br />
              <br />
              <br />
              <br />
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.329801790362!2d74.25313237452433!3d31.515100647404385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037618082ee1%3A0x483a02c7d20a4bfe!2sDunitSol!5e0!3m2!1sen!2s!4v1691667708707!5m2!1sen!2s" width="98%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3715.0421642742467!2d39.87936147526665!3d21.38824438035246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDIzJzE3LjciTiAzOcKwNTInNTUuMCJF!5e0!3m2!1sen!2s!4v1692087025593!5m2!1sen!2s"
                width="98%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
          <br />
          <br />
        </Container>
      </Box>
    </Box>
  );
}
