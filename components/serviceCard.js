import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import styles from "../styles/service.module.css"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ServiceCard(props) {
    return (
        <Link href="/services">
            <a>
                <motion.div
                    whileHover={{
                        scale: 1.05,
                    }}
                >
                    <Card className={styles.serviceCard}>
                        <CardMedia
                            alt="service"
                            className={styles.serviceImage}
                            image={props.url}
                        />
                        <CardContent>
                            <Typography varinat="h6" sx={{ fontWeight: '500' }}>{props.title}</Typography>
                        </CardContent>
                    </Card>

                </motion.div>

            </a>
        </Link>




    )
}
