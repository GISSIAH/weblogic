import { createTheme, responsiveFontSizes } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
        fontSize:'36pt',
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

  const responsivetheme =responsiveFontSizes(theme)
  return (
    <ThemeProvider theme={responsivetheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )
}

export default MyApp
