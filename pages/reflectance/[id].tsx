import { Box, Code } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ReflectancePage() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/reflectance/?id=${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>
  if (data.length === 0) return <div>No data to show</div>

  const columns = Object.keys(data[0])
  return (
    <Box>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              {columns.map((c, i) => (
                <Th key={`header${i}`} isNumeric={!isNaN(data[0][c])}>
                  {c}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.slice(0, 20).map((d: any, i: number) => (
              <Tr key={`d-${i}`}>
                {columns.map((c) => (
                  <Td key={`d-col-${c}`} isNumeric={!isNaN(d[c])}>
                    {d[c]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
