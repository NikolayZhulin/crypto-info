export const round=(value: number, decimals: number)=> {
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}

export const getFromATH = (currentPrice: string, ath: string) => {

    const result = ((+ath - +currentPrice) / +ath) * 100
   return  round(result,1)
}

export const getToATH = (currentPrice: string, ath: string) => {
    const result =  +ath / +currentPrice * 100 - 100
    return round(result,1)
}
