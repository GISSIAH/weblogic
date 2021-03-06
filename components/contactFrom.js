import {  Grid, TextField, Button } from '@mui/material'
export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true" >
    <input type="hidden" name="form-name" value="contact"/>
            <Grid item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            sx={{marginBottom:2}}
            >
              <TextField
                variant="outlined"
                type="text"
                name="name"
                label="Full Name"

              />
            </Grid>
            <Grid item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{marginBottom:2}}
            >
              <TextField
                variant="outlined"
                type="text"
                name="email"
                label="Your Email"

              />
            </Grid>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{marginBottom:2}}
                >
                <TextField
                  variant="outlined"
                  type="text"
                  name="message"

                  label="Message"
                />
              </Grid>
              <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{display:'flex',justifyContent:'center'}}
                >
                <Button variant="contained" type="submit" color="success">Send</Button>
              </Grid>



          </form>
  )
}
