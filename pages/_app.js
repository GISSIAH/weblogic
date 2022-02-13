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
        fontSize:'36pt',[`@media screen and (max-width: 600px)`]: {
          fontSize: "1rem"
        },
        fontWeight: 600
      },
      h2: {
        fontWeight: 600
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
