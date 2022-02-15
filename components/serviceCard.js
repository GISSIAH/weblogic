import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import styles from "../styles/service.module.css"
import { motion } from "framer-motion"
export default function ServiceCard(props) {
    return (
        <motion.div
            whileHover={{
                scale:1.05,
            }}  
        >
            <Card className={styles.serviceCard}>
                <CardMedia
                    alt="service"
                    className={styles.serviceImage}
                    image="https://res.cloudinary.com/attic-gis/image/upload/v1644162455/NicePng_technology-icon-png_1192437_fads0n.png"
                />
                <CardContent>
                    <Typography varinat="h6" sx={{ fontWeight: '500' }}>{props.title}</Typography>
                </CardContent>
            </Card>

        </motion.div>



    )
}
