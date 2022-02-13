import Head from "next/head"
import styles from "../styles/services.module.css"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
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

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ServiceSection title="Web Design" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                    <ServiceSection title="Web Development" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                    <ServiceSection title="Web Hosting" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                    <ServiceSection title="Digital Transformation" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                </Box>

            </main>

        </div>
    )
}


