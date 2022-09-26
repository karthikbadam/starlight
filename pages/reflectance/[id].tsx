import { Box, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import TableView from '../../components/TableView'
import { Reflectance, ReflectanceElement } from '../../schema/reflectance'
import { frequencyCounter } from '../../utils/frequency'

type ReflectanceColumns = Array<keyof ReflectanceElement>

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ReflectancePage() {
  const router = useRouter()
  const { data, error } = useSwr<Reflectance, string>(
    router.query.id ? `/api/reflectance/?id=${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>
  if (data.length === 0) return <div>No data to show</div>

  const columns = Object.keys(data[0]) as ReflectanceColumns
  const sourceCounts = frequencyCounter(data, 'source_id')
  return (
    <Box>
      <Stack direction="column" gap={4}>
        <Box maxW="200" px={4} py={2} bg="background" borderRadius="md">
          <Text fontSize="4xl">{Object.keys(sourceCounts).length}</Text>
          <Text fontSize="sm" color="subtle">
            Sources
          </Text>
        </Box>
        <TableView data={data} columns={columns}></TableView>
      </Stack>
    </Box>
  )
}
