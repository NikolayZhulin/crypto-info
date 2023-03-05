import React, { useState } from 'react'

import { TableBody, TableHead } from './components'
import { PAGE_ITEMS_COUNT } from './constants'
import { useCoinsFullData } from './hooks'

import { Paginator } from '@/components'

export const CoinsTable = () => {
  const [page, setPage] = useState<number>(0)
  const { fullCoinsData, isLoading, coinsCount, coinsDataWithATHError } = useCoinsFullData(
    page * PAGE_ITEMS_COUNT,
    PAGE_ITEMS_COUNT
  )

  return (
    <>
      <Paginator
        page={page}
        setPage={setPage}
        itemsPerPage={PAGE_ITEMS_COUNT}
        itemsCount={coinsCount!}
      />
      <TableHead />
      <TableBody rows={fullCoinsData} isLoading={isLoading} error={coinsDataWithATHError} />
    </>
  )
}
