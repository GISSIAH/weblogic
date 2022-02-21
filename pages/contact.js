import Head from "next/head"
import styles from "../styles/contact.module.css"
import { Box } from '@mui/system'
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material'
import { motion } from "framer-motion"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa"
import ContactForm from "../components/contactFrom"
export default function contact() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Web Logic</title>
        <meta name="description" content="Contact Web Logic to kickstart your digital existence and gain more customers from the online world. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          className={styles.mainBox}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: 'white'
          }}>
          <Typography variant="h1" sx={{ fontWeight: '500' }} className={styles.hero}>Get in touch</Typography>
        </Box>

        <Grid container spacing={6} sx={{
          justifyContent: 'center',
          py: 2
        }}>
          <Grid item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={3}
          >
            <Card
            >
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <AiOutlineMail size={30} />
                <Typography varinat="caption">info@weblogic.tech</Typography>

              </CardContent>

            </Card>

          </Grid>
          <Grid item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={3}
          >
            <Card>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <AiOutlinePhone size={30} />
                <Typography varinat="caption">info@weblogic.tech</Typography>

              </CardContent>

            </Card>

          </Grid>


        </Grid>
        <Box sx={{display:'flex',justifyContent:'center'}}>
          <Typography variant="h2">Message us!</Typography>
        </Box>

        <Grid container spacing={4} sx={{
          justifyContent: 'center',
          marginTop:1,
          marginBottom: '20vh'
        }}>

          <ContactForm />

        </Grid>

      </main>

    </div>
  )
}


