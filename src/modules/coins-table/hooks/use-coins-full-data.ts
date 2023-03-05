import { useEffect, useState } from 'react'

import useSWR from 'swr'

import { useCoinsShortData } from '@/hooks'
import { CoinsATHsType, CoinsWithATHType, CoinFullDataType, ResponseType } from '@/types'
import { fetcher } from '@/utils'

export const useCoinsFullData = (offset: number, limit: number) => {
  const [coinKeys, setCoinKeys] = useState<string[]>([])
  const [fullCoinsData, setFullCoinsData] = useState<CoinFullDataType[]>([])
  const [coinsCount, setCoinsCount] = useState<number>()

  const { coinsShortData, isLoading } = useCoinsShortData(offset, limit)
  const { data: coinsDataWithATH, error: coinsDataWithATHError } = useSWR<
    ResponseType<CoinsWithATHType[]>
  >(
    coinKeys?.length
      ? `${process.env.NEXT_PUBLIC_BASE_URL_TEST}/v0/coins/?keys=${coinKeys.join()}`
      : undefined,
    fetcher
  )

  useEffect(() => {
    if (coinsShortData) {
      setCoinKeys(coinsShortData?.data?.map(coin => coin.slug))
      setCoinsCount(coinsShortData?.meta?.count)
    }
  }, [coinsShortData])

  useEffect(() => {
    const coinsATHPrices = coinsDataWithATH?.data.reduce((acc, coin) => {
      acc[coin.key] = coin.athPrice.USD

      return acc
    }, {} as CoinsATHsType)

    if (coinsShortData && coinsATHPrices) {
      const fullData = coinsShortData.data.map(coin => ({
        ...coin,
        ath: coinsATHPrices[coin.slug],
      }))

      setFullCoinsData(fullData)
    }
  }, [coinsShortData, coinsDataWithATH])

  return { fullCoinsData, isLoading, coinsCount, coinsDataWithATHError }
}
