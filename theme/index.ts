import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  semanticTokens: {
    colors: {
      pageBackground: {
        default: 'gray.100',
        _dark: 'body',
      },
      background: {
        default: 'white',
        _dark: 'gray.700',
      },
      subtle: {
        default: 'gray.600',
        _dark: 'gray.400',
      },
      primary: {
        default: 'gray.800',
        _dark: 'whiteAlpha.900'
      }
    },
  },
})

export default theme
