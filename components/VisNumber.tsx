import { Box, Skeleton, SkeletonText, Text } from '@chakra-ui/react'

type NumberProps = {
  number: number
  description: string
  loading?: boolean
}

const VisNumber = ({ number, description, loading = false }: NumberProps) => {
  return (
    <Box minW="200" px={4} py={2} bg="background" borderRadius="md">
      <Skeleton isLoaded={!loading}>
        <Text fontSize="5xl">{number}</Text>
      </Skeleton>
      <SkeletonText isLoaded={!loading}>
        <Text fontSize="md" color="subtle">
          {description}
        </Text>
      </SkeletonText>
    </Box>
  )
}

export default VisNumber
