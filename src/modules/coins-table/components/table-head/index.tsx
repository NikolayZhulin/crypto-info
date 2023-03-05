import { TableHeadRow, TableHeadItem } from '@/modules/coins-table/components/table-head/style'

export const TableHead = () => {
  return (
    <TableHeadRow>
      <TableHeadItem>NAME</TableHeadItem>
      <TableHeadItem>Price USD</TableHeadItem>
      <TableHeadItem>Circ. Supply</TableHeadItem>
      <TableHeadItem>Market Cap</TableHeadItem>
      <TableHeadItem>Category</TableHeadItem>
      <TableHeadItem>To ATH</TableHeadItem>
      <TableHeadItem>From ATH</TableHeadItem>
    </TableHeadRow>
  )
}
