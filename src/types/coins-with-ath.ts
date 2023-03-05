export type CoinsWithATHType = {
  rank: number
  key: string
  name: string
  hasFundingRounds: boolean
  symbol: string
  type: string
  athMarketCap: AthMarketCap
  lifeCycle: string
  maxSupply: number
  unlimitedSupply: boolean
  totalSupply: number
  image: string
  tokens: any[]
  category: string
  categoryId: number
  tagIds: number[]
  isTraded: boolean
  marketDataNotAvailable: boolean
  fullyDilutedMarketCap: number
  availableSupply: number
  marketCap: number
  volume24h: number
  noData: boolean
  volatility: Price
  price: Price
  histPrices: Price
  athPrice: AthPrice
  atlPrice: AtlPrice
  icoFullyDilutedMarketCap?: number
  icoStatus: string
}

type AthMarketCap = {
  USD: number
  dateUSD: string
}

type Price = {
  USD: number
  BTC: number
  ETH: number
}

type AthPrice = {
  BTC: number
  ETH: number
  USD: number
  date: string
  dateBTC: string
  dateETH: string
}

type AtlPrice = {
  BTC: number
  ETH: number
  USD: number
  dateBTC: string
  dateETH: string
  dateUSD: string
}
