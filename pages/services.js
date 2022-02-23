import Head from "next/head"
import styles from "../styles/services.module.css"

import { Typography, Paper, Box, Grid } from '@mui/material'
import ServiceSection from "../components/serviceSection"
import { motion } from "framer-motion"


export default function services() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Digital Services Provided by Web Logic</title>
                <meta name="description" content="Get your business a digital " />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <Box
                    className={styles.mainBox}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            color: 'white'
                        }}

                    >
                        <Typography variant="h1" sx={{ fontWeight: '500' }} className={styles.hero}>Our Services</Typography>

                    </div>

                </Box>
                <div className={styles.gridWrapper}>
                    <Grid container spacing={6} maxWidth>
                        <Grid item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}>
                            <Paper elevation={8}>
                                <ServiceSection url="https://res.cloudinary.com/attic-gis/image/upload/v1644162455/NicePng_technology-icon-png_1192437_fads0n.png" title="Web Design" desc="Our Team of dynamic Web Designers provide stunning designs. We design exactly what you think of in mind to better represent your brand. Your satisfaction is our joy." />
                                <ServiceSection url="https://res.cloudinary.com/attic-gis/image/upload/v1645004269/code-1076536_1920_n0yh46.jpg" title="Web Development" desc="We are specialised in creating a responsive web design and development to enhance good looking appearance of websites on all user devices irrespective of the user's device screen size." />
                            </Paper>

                        </Grid>
                        <Grid item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}>
                            <Paper  elevation={8}>
                                <ServiceSection url="https://res.cloudinary.com/attic-gis/image/upload/v1645004264/cloud-3406627_1920_yhuijn.jpg" title="Web Hosting" desc="We provide affordable and reliable Web Hosting services. Worry less about hosting your website with  our technical support on all our web Hosting packages." />
                                <ServiceSection url="https://res.cloudinary.com/attic-gis/image/upload/v1645004266/digitization-5231610_1920_pyad0t.jpg" title="Digital Transformation" desc="We help you integrate digital technology into all areas of your business, fundamentally changing how you operate and deliver value to your customers. The world around is changing, why not change too." />
                            </Paper>
                        </Grid>
                    </Grid>

                </div>


            </main>

        </div>
    )
}


