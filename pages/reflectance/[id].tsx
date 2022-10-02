import { Box, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import VisTable from '../../components/VisTable'
import VisNumber from '../../components/VisNumber'
import { Reflectance, ReflectanceElement } from '../../schema/reflectance'
import { frequencyCounter } from '../../utils/frequency'
import VisBars from '../../components/VisBars'

type ReflectanceColumns = Array<keyof ReflectanceElement>

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ReflectancePage() {
  const router = useRouter()
  const { data, error } = useSwr<Reflectance, string>(
    router.query.id ? `/api/reflectance/?id=${router.query.id}` : null,
    fetcher
  )
  if (error)
    return (
      <Box>
        <Text>Failed to load user</Text>
      </Box>
    )

  const columns =
    data && data[0] ? (Object.keys(data[0]) as ReflectanceColumns) : []

  const sourceCounts = frequencyCounter(data, 'source_id')
  const denominationCounts = frequencyCounter(data, 'denomination')
  return (
    <Box>
      <Stack direction="column" gap={4}>
        <Stack direction="row" gap={4}>
          <VisNumber
            number={Object.keys(sourceCounts).length}
            description="Sources"
            loading={!data}
          ></VisNumber>
          <VisNumber
            number={Object.keys(denominationCounts).length}
            description="Denominations"
            loading={!data}
          ></VisNumber>
          <VisNumber
            number={data?.reduce((a, d) => a + d.nb_samples, 0) || 0}
            description="Total Samples"
            loading={!data}
          ></VisNumber>
        </Stack>
        <Stack direction="row" gap={4}>
          {data && (
            <VisBars data={denominationCounts} loading={!data}></VisBars>
          )}
          {data && <VisTable data={data} columns={columns}></VisTable>}
        </Stack>
      </Stack>
    </Box>
  )
}
