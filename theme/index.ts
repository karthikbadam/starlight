import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  semanticTokens: {
    colors: {
      background: {
        default: 'gray.200',
        _dark: 'gray.700',
      },
      subtle: {
        default: 'gray.600',
        _dark: 'gray.400',
      }
    },
  },
})

export default theme
