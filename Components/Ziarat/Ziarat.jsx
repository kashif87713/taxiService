import * as React from "react";
import styles from "./ziarat.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/router";
import img from "../../Images/ziarat/1.webp";
import img1 from "../../Images/ziarat/2.webp";
import img2 from "../../Images/ziarat/3.webp";
import img3 from "../../Images/ziarat/4.webp";
import img4 from "../../Images/ziarat/5.webp";
import img5 from "../../Images/ziarat/6.webp";
import img6 from "../../Images/ziarat/7.webp";
import img7 from "../../Images/ziarat/8.webp";
import img8 from '../../Images/ziarat/10.jpg';
import img9 from '../../Images/ziarat/11.jpg';
import img10 from '../../Images/ziarat/12.jpg';
import img11 from '../../Images/ziarat/13.jpg';
import img12 from '../../Images/ziarat/14.jpg';
import img13 from '../../Images/ziarat/15.jpg';



import {
  Card,
  CardContent,
  Button,
  Container,
  Grid,
  CardMedia,
} from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDetail = (e) => {
    e.preventDefault();
    router.push("/products");
  };
  return (
    <Box className={styles.products}>
      <Container>
        <br />
        <Box sx={{ width: "100%" }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box sx={{ borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                  className={styles.tab}
                >
                  <Tab
                    label="HARRAM "
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label="Jabl e Nor"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label="Taif"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(2)}
                  />
                  <Tab
                    label="Gare Hirea"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(3)}
                  />
                  <Tab
                    label="Jable Sor"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(4)}
                  />
                  <Tab
                    label=" Arfat"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(5)}
                  />
                  <Tab
                    label="Khyber"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(6)}
                  />
                  <Tab
                    label="Wadi e jin"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(7)}
                  />
                   <Tab
                    label="Masjid e Nabvi"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(8)}
                  />
                   <Tab
                    label="Masjid Qubah"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(9)}
                  />
                   <Tab
                    label="Masjid qiblatain"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(10)}
                  />
                   <Tab
                    label="Shuhada e uhad"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(11)}
                  />
                   <Tab
                    label="Ghazwa khandaq"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(12)}
                  />
                   <Tab
                    label="Jannat tul baqi"
                    className={styles.tabhead}
                    sx={{backgroundColor:'whitesmoke' }}
                    {...a11yProps(12)}
                  />
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          <TabPanel value={value} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Makkah Ziarah</Box>
                <br />
                <Box className={styles.text}>
                  We are here to be your dependable Makkah Taxi Service. We make
                  sure you get where you need to go safely and smoothly. Whether
                  you&apos;re going from Makkah to Madinah or just around
                  Makkah, even to Masjid Ayesha Miqat, we&apos;re here for you.
                  Our cars are well taken care of and come in different types to
                  fit what you need. Our skilled drivers know the way between
                  Makkah and Madinah and make sure you reach your stop on time
                  and comfortably. Our prices to go from Makkah to Madinah are
                  fair and clear. Safety is really important to us: our cars
                  have GPS trackers and our drivers are checked out before they
                  start driving. You can easily book our Taxi Service on
                  our website, by phone. Thanks for picking
                  Subhan ALLAH umrah Taxi to get around Makkah!
                </Box>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img1}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Jab e nor</Box>
                <br />
                <Box className={styles.text}>
                  Our Taxi Service is a trustworthy and skilled
                  transportation company located in Makkah. We have a bunch of
                  well-kept cars and provide many different services to help you
                  with your transportation. Whether you need a fast ride from
                  the airport or a relaxed tour of the city, our trained drivers
                  will make sure you get where you&apos;re going without any
                  problems. We&apos;re happy that we&apos;re always on time,
                  have friendly customer service, and offer good prices.
                </Box>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img2}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Taif</Box>
                <br />
                <Box className={styles.text}>
                  Welcome to Subhan ALLAH Umrah taxi, the reliable choice for taxi services
                  in Taif. We&apos;re here to offer you secure, trustworthy, and
                  effective transportation. Our services cover a wide range of
                  needs, from airport rides and business travel to tours of
                  Taif&apos;s important places. Our collection of vehicles is
                  well-maintained and has different options to match what
                  you&apos;re looking for. Our team of skilled drivers knows
                  Taif well and ensures you reach your destination on schedule
                  and feeling comfortable. Whether your trip is for work or
                  enjoyment, we&apos;re dedicated to giving you the best service
                  possible. You can easily reserve your Taif Taxi Service
                  through our website, phone call. Thank you for
                  opting for Subhan ALLAH umrah Taxi to meet your transportation needs in
                  Taif.
                </Box>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img3}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Gare Hirea</Box>
                <br />
                <Box className={styles.text}>
                  Welcome to Subhan ALLAH Umrah taxi, your go-to provider for Gar e Hira taxi
                  services. Our company is dedicated to providing safe, reliable
                  and efficient transportation to all of our customers. We offer
                  a wide range of services including airport transfers,
                  corporate transportation, and sightseeing tours. Our fleet of
                  vehicles is well-maintained and features a variety of options
                  to suit your needs, including sedans, SUVs, and minivans. Our
                  team of experienced drivers are familiar with the Gar e Hira
                  area and will ensure that you arrive at your destination on
                  time and in comfort. Safety is our top priority, all vehicles
                  are equipped with GPS tracking and our drivers go through
                  thorough background checks. Book a taxi with us easily through
                  our website, by call. Thanks for choosing
                  Subhan ALLAH umrah Taxi for your transportation needs in Gar e Hira.
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img4}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Gare sor</Box>
                <br />
                <Box className={styles.text}>
                  Welcome to Subhan ALLAH Umrah taxi, the top choice for Gar e Sor taxi
                  services. Our main goal is to provide you with secure,
                  dependable, and effective transportation. Our services cover a
                  wide spectrum, including airport transfers, corporate travel,
                  and sightseeing tours. Our fleet of vehicles is meticulously
                  maintained and offers various options like sedans, SUVs, and
                  minivans to suit your preferences. Our skilled drivers are
                  familiar with the Gar e Sor area and will make sure you reach
                  your destination on time and in comfort. Safety is our utmost
                  priority. All our vehicles are equipped with GPS tracking, and
                  our drivers undergo comprehensive background checks. Booking a
                  taxi with us is simple – you can do it through our website, by
                  phone. We appreciate you choosing
                  Subhan ALLAH umrah Taxi for your transportation needs in Gar e Sor.
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img5}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Maidan Arfat</Box>
                <br />
                <Box className={styles.text}>
                  Our taxi service is a special transportation service
                  for Hajj and Umrah pilgrims. It helps people get to and from
                  the Maidan Arfat area during the Hajj season. The cost of this
                  service can change based on how far you&apos;re going and what
                  type of vehicle you&apos;re using. It&apos;s a good idea to
                  plan ahead and check prices from different companies to make
                  sure you&apos;re paying a fair amount. For Hajj taxi prices,
                  the cost can change based on how far you&apos;re going, how
                  big the vehicle is, and how comfortable it is. It&apos;s smart
                  to look into different companies and compare prices before you
                  decide. Similarly, Umrah taxi prices also change based on how
                  far you&apos;re traveling, the size of the vehicle, and how
                  comfortable it is. It&apos;s a good practice to research and
                  compare prices from different companies before making a
                  choice.
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img6}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Khyber</Box>
                <br />
                <Box className={styles.text}>
                  Subhan ALLAH Umrah taxi service specializes in transporting Hajj and Umrah
                  pilgrims to and from the Khyber area during the Hajj and Umrah
                  seasons. The cost of this service can vary based on how far
                  the journey is and the type of vehicle used. To make sure
                  you&apos;re paying a fair price, it&apos;s a good idea to book
                  early and compare prices from different companies.
                  <br />
                  Hajj taxi services offer a convenient and comfortable way for
                  Hajj pilgrims to travel between the holy cities of Mecca and
                  Medina. You can find these services at airports, hotels, and
                  specific taxi stops. You can either book them in advance or
                  when you need them, depending on availability.
                  <br />
                  Hajj taxi prices can differ based on factors like the distance
                  traveled, the size of the vehicle, and the comfort level it
                  provides. It&apos;s essential to research and compare prices
                  from various companies before making your decision.
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img7}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Wadi e jin</Box>
                <br />
                <Box className={styles.text}>
                  We&apos;re your reliable choice for taxi services in the Wadi
                  e Jin area. We provide airport transfers, corporate
                  transportation, and sightseeing tours using our well-kept
                  vehicles. Our skilled drivers know the region well, ensuring
                  you get to your destination on time and in comfort. Safety is
                  a big deal for us – all our vehicles have GPS tracking, and
                  our drivers are carefully screened. You can easily book a taxi
                  through our website, phone call. Thank you for selecting
                  Subhan ALLAH umrah Taxi for your transportation needs in Wadi e Jin.
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img8}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Masjid e Nabvi</Box>
                <br />
                <Box className={styles.text}>
                Masjid-e-Nabawi in Medina, Saudi Arabia, stands as a cherished Masjid built during Prophet MUHAMMAD's time, holding immense significance in Islam. Also known as the Prophet's Mosque, it's a vital pilgrimage site. The spacious courtyard features "Riyadh al-Jannah," a holy garden, and "Rawdah," where Prophet MUHAMMAD's tomb lies. Adorned with domes and minarets, the Masjid's serene aura and historical importance attract countless visitors. We offer a unique taxi service to Masjid-e-Nabawi , welcoming travelers from all over Saudi Arabia to experience its spiritual and cultural treasure, symbolizing Prophet MUHAMMAD's teachings. It's a peaceful haven for reflection and devotion, an iconic global landmark connecting souls.Book a taxi with us easily through
                  our website, by call. Thanks for choosing
                  Subhan ALLAH umrah Taxi for your transportation needs
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img9}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Masjid Qubah</Box>
                <br />
                <Box className={styles.text}>
                Discover the historical significance of Masjid-e-Quba, the first Masjid in Islam located in Medina, Saudi Arabia. A site of profound importance, it was established during Prophet MUHAMMAD's time. Now, experience the convenience of our taxi service, connecting you to Masjid-e-Quba and other destinations across Saudi Arabia. As a reliable taxi provider, we welcome travelers from all over the country to explore religious and cultural landmarks, ensuring a comfortable and hassle-free journey. Let us be your partner in discovering the heritage of Islam and the beauty of Saudi Arabia through our exceptional taxi service.Book a taxi with us easily through
                  our website, by call. Thanks for choosing
                  Subhan ALLAH umrah Taxi for your transportation needs
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={10}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img10}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Masjid e Qiblatain</Box>
                <br />
                <Box className={styles.text}>
                Embrace the historical essence of Masjid Qiblatain in Medina, Saudi Arabia – the Masjid where the direction of Muslim prayer (qibla) was changed by Prophet MUHAMMAD (peace be upon him). Its significance resonates through time. We offer a reliable taxi service catering to travelers from all corners of Saudi Arabia, ensuring seamless journeys to destinations like Masjid Qiblatain. With our dedicated service, your exploration of Saudi Arabia's cultural and religious treasures becomes comfortable and convenient. Let us accompany you on a journey that unites heritage and convenience, as you delve into the rich tapestry of Islamic history and Saudi Arabian charm.Book a taxi with us easily through
                  our website, by call. Thanks for choosing
                  Subhan ALLAH umrah Taxi for your transportation needs
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={11}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img11}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Shuhda e uhad</Box>
                <br />
                <Box className={styles.text}>
                Embark on a meaningful journey to the historic site of Shuhada-e-Uhad in Medina, Saudi Arabia, where the martyrs of the Battle of Uhud rest. Pay your respects to their sacrifice and valor in this hallowed ground. Our taxi service offers a reliable and comfortable means of transportation for travelers across Saudi Arabia, ensuring your visit to Shuhada-e-Uhad is hassle-free and memorable. As you explore this significant landmark, let us be your travel partner, connecting you to the rich heritage of Islam and Saudi Arabia. Experience the convenience of our taxi service on a journey of remembrance and reflection.Book a taxi with us easily through
                  our website, by call. Thanks for choosing
                  Subhan ALLAH umrah Taxi for your transportation needs
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img12}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Ghazwa e Khandaq</Box>
                <br />
                <Box className={styles.text}>
                Embark on a historical journey to the site of Gazwa-e-Khandaq (the Battle of the Trench) in Medina, Saudi Arabia, where a pivotal event in Islamic history took place. Honor the valor of Prophet MUHAMMAD (peace be upon him) and his companions. Our taxi service ensures a smooth travel experience for individuals across Saudi Arabia, making your visit to Gazwa-e-Khandaq convenient and memorable. Let us be your trusted travel companion, connecting you to the heritage of Islam and Saudi Arabia. Explore with ease as you delve into this significant landmark, guided by the comfort and reliability of our taxi service.Book a taxi with us easily through
                  our website, by call. Thanks for choosing
                  Subhan ALLAH umrah Taxi for your transportation needs
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={13}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <br />
                <br />
                <br />
                <Image
                  src={img13}
                  className={styles.img}
                  alt="img"
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Box className={styles.header}>Jannat Ul baqi</Box>
                <br />
                <Box className={styles.text}>
                Embark on a sacred journey to Jannat ul-Baqi in Medina, Saudi Arabia – a revered burial ground where many companions of Prophet MUHAMMAD (peace be upon him) rest. Pay your respects to these luminous souls in this cherished location. Our taxi service ensures seamless travel for individuals across Saudi Arabia, facilitating your visit to Jannat ul-Baqi with convenience. As you explore this significant landmark, let us be your reliable travel partner, connecting you to the essence of Islamic heritage and Saudi Arabia. Experience the ease of our taxi service as you engage in a journey of reverence and reflection.Book a taxi with us easily through
                  our website, by call. Thanks for choosing
                  Subhan ALLAH umrah Taxi for your transportation needs
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}

