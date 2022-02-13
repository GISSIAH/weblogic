import { Typography, Divider } from "@mui/material"
import styles from "../styles/service.module.css"
export default function ServiceSection(props) {
  return (
    <div

        className={styles.sectionContainer}
    >
        <Typography varinat="h2" sx={{fontWeight:'500'}} className={styles.serviceTitle}>{props.title}</Typography>
        <Typography variant="body1" sx={{fontWeight:'300'}} className={styles.servicePara}>{props.desc}</Typography>
        <Divider orientation="horizontal"/>
    </div>
  )
}
