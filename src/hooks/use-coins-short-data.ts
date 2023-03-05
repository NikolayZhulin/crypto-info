import useSWR from 'swr'

import { ResponseType, CoinShortDataType } from '@/types'
import { fetcher } from '@/utils'

export const useCoinsShortData = (offset: number, limit: number) => {
  const {
    data: coinsShortData,
    isLoading,
    error: coinShortDataError,
  } = useSWR<ResponseType<CoinShortDataType[]>>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/currencies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&offset=${offset}&limit=${limit}`,
    fetcher,
    { refreshInterval: 20000 }
  )

  return { coinsShortData, isLoading, coinShortDataError }
}
