import { CoinShortDataType } from '@/types/coin-short-data'

export type CoinFullDataType = CoinShortDataType & { ath: number }
