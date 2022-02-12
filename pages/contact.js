import Head from "next/head"
import styles from "../styles/contact.module.css"
import { Box } from '@mui/system'
import { Card, CardContent, Typography } from '@mui/material'
import { motion } from "framer-motion"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa"
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

        <Box className={styles.heroRow}>
          <Card>
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <AiOutlinePhone size={30} />
              <Typography variant="h6" sx={{ fontWeight: '400' }}>
                phone number
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <AiOutlineMail size={30} />
              <Typography variant="h6" sx={{ fontWeight: '400' }}>
                email
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={styles.midSection}>
          <Typography variant="h3" sx={{ fontWeight: '600' }}>
            Or
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: '600' }}>
            follow us on
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: '2vw',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5vh'
        }}>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, -180, 0,0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          ><FaFacebook size={45} /></motion.div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, -180, 0,0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          ><FaInstagram size={45} /></motion.div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, -180, 0,0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          ><FaTwitter size={45} /></motion.div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, -180, 0,0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          ><FaTiktok size={45} /></motion.div>
        </Box>



      </main>

    </div>
  )
}


