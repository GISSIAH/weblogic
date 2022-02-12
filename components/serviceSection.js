import { Typography, Divider } from "@mui/material"
import styles from "../styles/service.module.css"
import { motion } from "framer-motion"
export default function ServiceSection(props) {
  return (
    <motion.div
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{type:'spring', delay:0.5, duration:2}}

        className={styles.sectionContainer}
    >
        <Typography varinat="h2" sx={{fontWeight:'500'}} className={styles.serviceTitle}>{props.title}</Typography>
        <Typography variant="body1" sx={{fontWeight:'300'}} className={styles.servicePara}>{props.desc}</Typography>
        <Divider orientation="horizontal"/>
    </motion.div>
  )
}
