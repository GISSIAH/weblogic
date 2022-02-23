import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import ServiceCard from '../components/serviceCard'
import { motion } from "framer-motion"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web logic</title>
        <meta name="description" content="Bringing new age revolutions to malawian businesses. From web design to development ,transforming businesses digitally, web logic is here to serve all businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Box
          className={styles.mainBox}
        >
          <motion.div
            initial={{ y: 250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 120 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
              alignItems: 'center',
              height: '100%',
              color: 'white'
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: '500' }} className={styles.hero}>Establishing your digital existance</Typography>
            <Typography variant="body1" sx={{ fontWeight: '300' }} className={styles.heroPara}>Get your website made the way it should be: clean, functional, secure, and 100% custom. We’re the Malawi web design experts who know how to bring customers to your digital door.</Typography>

          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1.5 }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Typography variant="h2" sx={{ fontWeight: '600', marginTop:2,marginBottom:2 }} >Our Services</Typography>
            <div >
              <Grid
                className={styles.servicesContainer}
                container
                spacing={6}>
                <Grid item
                  xs={10}
                  sm={5}
                  md={6}
                  lg={3}
                  xl={3}
                >
                  <ServiceCard title="Web Design" url="https://res.cloudinary.com/attic-gis/image/upload/v1644162455/NicePng_technology-icon-png_1192437_fads0n.png" />
                </Grid>
                <Grid item
                  xs={10}
                  sm={5}
                  md={6}
                  lg={3}
                  xl={3}>
                  <ServiceCard title="Web Development" url="https://res.cloudinary.com/attic-gis/image/upload/v1645004269/code-1076536_1920_n0yh46.jpg" />
                </Grid>
                <Grid item
                  xs={10}
                  sm={5}
                  md={6}
                  lg={3}
                  xl={3}>
                  <ServiceCard title="Web Hosting" url="https://res.cloudinary.com/attic-gis/image/upload/v1645004264/cloud-3406627_1920_yhuijn.jpg" />
                </Grid>
                <Grid item
                  xs={10}
                  sm={5}
                  md={6}
                  lg={3}
                  xl={3}>
                  <ServiceCard title="Digital Transformation" url="https://res.cloudinary.com/attic-gis/image/upload/v1645004266/digitization-5231610_1920_pyad0t.jpg" />
                </Grid>
              </Grid>
            </div>

          </Box>

        </motion.div>

      </main>

    </div >
  )
}
