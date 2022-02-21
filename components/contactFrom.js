import {  Grid, TextField, Button } from '@mui/material'
export default function contactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true" >
            <Grid item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}

            >
              <TextField
                variant="outlined"
                type="text"
                name="name"
                label="Full Name"
                value="name"
              />
            </Grid>
            <Grid item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <TextField
                variant="outlined"
                type="text"
                name="email"
                label="Your Email"
                value="email"
              />
            </Grid>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  name="message"
                  value="message"
                  label="Message"
                />
              </Grid>
              <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}>
                <Button variant="contained" type="submit" color="success">Send</Button>
              </Grid>



          </form>
  )
}
