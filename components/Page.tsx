import { Box, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

type NavItemProps = {
  text: string
  href: string
  active?: boolean
}

interface Props {
  navOptions: Array<NavItemProps>
  children?: React.ReactNode
}

const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link href={href}>
      <Box
        cursor="pointer"
        _hover={{
          color: 'subtle',
        }}
      >
        {text}
      </Box>
    </Link>
  )
}

const Page: React.FC<Props> = ({ navOptions, children }) => {
  return (
    <Box w="100%">
      <Box w="100%" h="80px" pb={4} position="sticky" top={0}>
        <Stack direction="row" p={6} spacing="50px" alignItems="end">
          <Box mr="100px">
            <Link href={'/'}>
              <Heading size="md" fontWeight={800} cursor="pointer">
                Starlight
              </Heading>
            </Link>
          </Box>
          {navOptions.map((option) => (
            <NavItem key={`nav-${option.text}`} {...option} />
          ))}
        </Stack>
      </Box>
      <Box maxW="1080px" h="calc(100% - 80px)" mx="auto" overflowY="scroll">
        {children}
      </Box>
    </Box>
  )
}

export default Page
