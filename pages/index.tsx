import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Card from '../components/Card'
import { SunIcon } from '@chakra-ui/icons'

const CARD_OPTIONS = [
  {
    text: 'Reflectance Spectrum',
    description:
      'Each dataset contains BP/RP reflectance spectra of asteroids computed as the ratio between the asteroid flux and an averaged solar analogue flux. In each entry, the reflectance spectrum of a given asteroid is given at a given wavelength.',
    active: false,
    options: Array.from(Array(20).keys())
      .map((index) => (index < 10 ? `0${index}` : `${index}`))
      .map((id) => ({
        text: `${id}`,
        href: `/reflectance/${id}`,
      })),
    Icon: <SunIcon w={6} h={6} />
  },
]

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Button onClick={toggleColorMode} my={4}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Flex direction="row" wrap="wrap" gap="4">
        {CARD_OPTIONS.map((d) => (
          <Card key={`card-${d.text}`} {...d}></Card>
        ))}
      </Flex>
    </Box>
  )
}

export default Home
