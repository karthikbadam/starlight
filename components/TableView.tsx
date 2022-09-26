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
import { Reflectance, ReflectanceElement } from '../schema/reflectance'

interface Table {
  data: Reflectance
  columns: Array<keyof ReflectanceElement>
}

const TableView = ({ data, columns }: Table) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            {columns.map((c, i) => (
              <Th key={`header${i}`} isNumeric={!isNaN(data[0][c] as any)}>
                {c}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.slice(0, 20).map((d, i) => (
            <Tr key={`d-${i}`}>
              {columns.map((c) => (
                <Td key={`d-col-${c}`} isNumeric={!isNaN(d[c] as any)}>
                  {d[c]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableView
