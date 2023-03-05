import { TableRowItem, TableRow } from './style'

import { InfoBlock } from '@/components'
import { CoinFullDataType } from '@/types'
import { getFromATH, getToATH, formatPrice } from '@/utils'

type Props = {
  rows?: CoinFullDataType[]
  isLoading: boolean
  error: string
}

export const TableBody = ({ rows, isLoading, error }: Props) => {
  if (error) {
    return <InfoBlock fontSize="40">Some error occurred</InfoBlock>
  }

  if (isLoading) {
    return <InfoBlock fontSize="40"> LOADING... </InfoBlock>
  }

  return (
    <>
      {rows &&
        rows.map((row: CoinFullDataType) => (
          <TableRow key={row.id}>
            <TableRowItem>{row.name}</TableRowItem>
            <TableRowItem>$ {formatPrice(row.values.USD.price)}</TableRowItem>
            <TableRowItem>
              {row.symbol} {formatPrice(row.circulatingSupply)}
            </TableRowItem>
            <TableRowItem>$ {formatPrice(row.values.USD.marketCap)}</TableRowItem>
            <TableRowItem>{row.category}</TableRowItem>
            <TableRowItem>{getToATH(row.values.USD.price, row.ath)}%</TableRowItem>
            <TableRowItem>-{getFromATH(row.values.USD.price, row.ath)}%</TableRowItem>
          </TableRow>
        ))}
    </>
  )
}
