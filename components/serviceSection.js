import { Typography, CardMedia } from "@mui/material"
import styles from "../styles/service.module.css"
import { motion } from "framer-motion"
export default function ServiceSection(props) {
  return (
    <div
      className={styles.sectionContainer}
    >
      <CardMedia
        alt="service"
        className={styles.serviceImage}
        image={props.url}
      />
      <Typography varinat="h2" sx={{ fontWeight: '500' }} className={styles.serviceTitle}>{props.title}</Typography>
      <Typography variant="body1" sx={{ fontWeight: '300',px:4 }} className={styles.servicePara}>{props.desc}</Typography>

    </div>
  )
}
