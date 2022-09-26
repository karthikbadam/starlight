import { Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type Link = {
  href: string
  text: string
}
interface NavItemProps {
  text: string
  description?: string
  active?: boolean
  options: Array<Link>
  Icon?: React.ReactNode
}

const Card = ({ text, description, active, options, Icon }: NavItemProps) => {
  return (
    <Stack
      direction="column"
      spacing={4}
      bg="background"
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
        wrap="wrap"
        fontSize="16px"
        fontFamily="monospace"
        color="subtle"
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
