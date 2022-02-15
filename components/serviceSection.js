import { Typography, Divider } from "@mui/material"
import styles from "../styles/service.module.css"
import { motion } from "framer-motion"
export default function ServiceSection(props) {
  return (
    <motion.div
        initial={{y:250}}
        animate={{y:0}}
        transition={{delay:0,type:'tween',duration:1.5}}
        className={styles.sectionContainer}
    >
        <Typography varinat="h2" sx={{fontWeight:'500'}} className={styles.serviceTitle}>{props.title}</Typography>
        <Typography variant="body1" sx={{fontWeight:'300'}} className={styles.servicePara}>{props.desc}</Typography>
        <Divider orientation="horizontal"/>
    </motion.div>
  )
}
