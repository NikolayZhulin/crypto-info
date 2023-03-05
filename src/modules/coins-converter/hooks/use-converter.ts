import { useEffect, useState } from 'react'

import { useCoinsShortData } from '@/hooks'
import { CoinShortDataType } from '@/types'
import { formatPrice } from '@/utils'

export const useConverter = () => {
  const [coinCounter, setCoinCounter] = useState(1)
  const [fromCoinId, setFromCoinId] = useState<number>()
  const [toCoinId, setToCoinId] = useState<number>()
  const [coinList, setCoinList] = useState<CoinShortDataType[]>()

  const { coinsShortData, isLoading, coinShortDataError } = useCoinsShortData(0, 100)

  useEffect(() => {
    if (!fromCoinId && !toCoinId) {
      if (coinsShortData) {
        setToCoinId(coinsShortData.data[0].id)
        setFromCoinId(coinsShortData.data[1].id)
      }
    }
    setCoinList(coinsShortData?.data)
  }, [coinsShortData])

  const changeHandler = () => {
    setFromCoinId(toCoinId)
    setToCoinId(fromCoinId)
  }

  const toCoin = coinList?.find((coin: CoinShortDataType) => coin.id === toCoinId)
  const fromCoin = coinList?.find((coin: CoinShortDataType) => coin.id === fromCoinId)

  const currentToCoinName = toCoin && toCoin.name
  const currentFromCoinName = fromCoin && fromCoin.name
  const currentToCoinPrice = toCoin ? toCoin.values.USD.price : 0
  const currentFromCoinPrice = fromCoin ? fromCoin.values.USD.price : 0

  const convertValue = formatPrice((currentToCoinPrice / currentFromCoinPrice) * coinCounter)

  return {
    setCoinCounter,
    toCoinId,
    fromCoinId,
    setToCoinId,
    isLoading,
    convertValue,
    currentToCoinName,
    currentFromCoinName,
    changeHandler,
    coinCounter,
    setFromCoinId,
    coinList,
    coinShortDataError,
  }
}
