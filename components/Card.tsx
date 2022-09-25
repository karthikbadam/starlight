
import { Flex, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type NavItemProps = {
  text: string
  description?: string
  active?: boolean
  options: Array<{
    href: string
    text: string
  }>
  Icon?: React.ReactNode
}

const Card = ({ text, description, active, options, Icon }: NavItemProps) => {
  const color = useColorModeValue('gray.700', 'gray.200')
  const bg = useColorModeValue('gray.200', 'gray.700')

  return (
    <Stack
      direction="column"
      spacing={4}
      bg={bg}
      rounded="md"
      maxW={500}
      p={6}
      boxShadow="md"
    >
      <Stack direction="row">
        <Heading size="md">{text}</Heading>
        {Icon}
      </Stack>
      <Text>{description}</Text>
      <Flex
        columnGap={4}
        w="100%"
        wrap="wrap"
        fontSize="16px"
        fontFamily="monospace"
        color={color}
      >
        {options.map(({ href, text }) => (
          <Link key={`o-${text}`} href={href}>
            <Text>{text}</Text>
          </Link>
        ))}
      </Flex>
    </Stack>
  )
}

export default Card
