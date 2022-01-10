import '../styles/globals.css'
import 'react-tippy/dist/tippy.css'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import { Footer, Header } from '~/components/layout'
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp