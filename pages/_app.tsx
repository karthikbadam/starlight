import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Page from '../components/Page'

const NAV_OPTIONS = [
  {
    text: 'Reflectance',
    href: '/reflectance',
    active: false,
  },
  {
    text: 'Shift',
    href: '/shift',
    active: false,
  },
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Page navOptions={NAV_OPTIONS}>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  )
}

export default MyApp
