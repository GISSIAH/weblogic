import { createTheme} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  /*
  const thme = createMuiTheme({
    breakpoints,
    typography: {
      h5: {
        fontSize: "1.5625rem",
        [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
          fontSize: "0.6785rem"
        }
      }
    }
  })
  */
  let theme = createTheme({
    shape: {
      borderRadius: 10
    },
    palette: {
      primary: {
        main: "#05445E",
        light: "#189AB4"
      },
      secondary: {
        main: "#189AB4"
      },


    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: {
        fontSize:'36pt',[`@media screen and (max-width: 1200px)`]: {
          fontSize: "3rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "2rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "2.25rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1.5rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1.25rem"
        },
        fontWeight: 600
      },
      h2: {
        fontWeight: 600,
        [`@media screen and (max-width: 1200px)`]: {
          fontSize: "2.5rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "1.75rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "1.5rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1.35rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1.05rem"
        },
      },
      h3: {
        fontWeight: 500
      },
      h4: {
        fontWeight: 500
      },
      h5: {
        fontWeight: 400
      },
      h6: {
        fontWeight: 400
      },
      body1:{
        fontSize:'1.5rem',
        [`@media screen and (max-width: 1200px)`]: {
          fontSize: "1.5rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "1.25rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "1.25rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1rem"
        },

      }
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )
}

export default MyApp
