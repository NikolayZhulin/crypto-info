import { round } from './round'

export const getToATH = (currentPrice: number, ath: number) => {
  if (currentPrice < 0 || ath < 0 || !currentPrice || !ath) {
    return 0
  }
  const result = (ath / currentPrice) * 100 - 100

  return round(result, 1)
}
