import { Box, Grid, Typography } from "@mui/material"
import Link from "next/link"
import styles from "../styles/footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.foot}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}

      >
        <div className={styles.footerGrid}>
          <Grid
            container
            spacing={6}

          >
            <Grid item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
              }}
              xs={5}
              sm={6}
              md={6}
              lg={3}
              xl={3}
            >
              <Typography variant="h4">Company</Typography>
              <Link href="/about"><a><Typography variant="body1">About</Typography></a></Link>
              <Link href="/contact"><a><Typography variant="body1">Contact</Typography></a></Link>
            </Grid>


            <Grid item
              sx={{
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                gap: '10px'
              }}
              xs={7}
              sm={6}
              md={6}
              lg={6}
              xl={6}
            >
              <Typography variant="h4">Services</Typography>
              <Link href="/services"><a><Typography variant="body1">Web Design</Typography></a></Link>
              <Link href="/services"><a><Typography variant="body1">Web Development</Typography></a></Link>
              <Link href="/services"><a><Typography variant="body1">Web Hosting</Typography></a></Link>
              <Link href="/services"><a><Typography variant="body1">Digital Transformation</Typography></a></Link>
            </Grid>
            <Grid item
              sx={{
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                gap: '10px'
              }}
              xs={6}
              sm={6}
              md={6}
              lg={3}
              xl={3}
            >
              <Typography variant="h4">Social</Typography>
              <Typography variant="body1">Twitter</Typography>
              <Typography variant="body1">Facebook</Typography>
              <Typography variant="body1">Instagram</Typography>
              <Typography variant="body1">LinkedIn</Typography>
            </Grid>

          </Grid>
        </div>

      </Box>
      <Typography sx={{marginTop:2}} variant="subtitle1">WEB LOGIC 2022 ??</Typography>
    </footer>

  )
}
