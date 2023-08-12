import React from 'react';
import { Card, CardContent,Button,Container,Grid,CardMedia, Box,} from "@mui/material";
import styles from './trusted.module.css'
import img4 from '../../Images/5.png'
import Link from 'next/link';
import Image from 'next/image';

export default function Trusted() {
  return (
    <Box>
      <Box className={styles.trusted} >
        <Container>
        <Grid container >
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <br />
            <br />
            <br />
<Box className={styles.header} >
The Most <span> Trusted <br /> Taxi</span>  Service in <br /> Saudi Arabia
</Box>
<Box className={styles.header2}>
Usman Taxi offers holy sights seeing Tours including <br /> Makkah /Medina city places and Umrah services as well.
</Box>
<br />
<button  className={styles.btn}>  <Link href='/Locations'>Book Now</Link></button> 

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
              <Image src={img4}  className={styles.img} alt='img' height={200} width={200}/>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </Box>
  )
}
