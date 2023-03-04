import {useEffect, useState} from "react";
import {CoinType} from "@/types/types";
import useCoinList from "@/hooks/use-coin-list";
import {roundCoinValues} from "@/utils/round-coin-values";

const useConverter = () => {
    const [coinCounter, setCoinCounter] = useState(1)
    const [fromCoinId, setFromCoinId] = useState<number>()
    const [toCoinId, setToCoinId] = useState<number>()
    const [coinList, setCoinList] = useState<CoinType[]>()

    const {data, isLoading} = useCoinList()

    useEffect(() => {
        if (!fromCoinId && !toCoinId) {
            if(data){
                setToCoinId(data.data[0].id)
                setFromCoinId(data.data[1].id)
            }
        }
        setCoinList(data?.data)
    }, [data])

    const changeHandler = () => {
        setFromCoinId(toCoinId)
        setToCoinId(fromCoinId)
    }

    const toCoin = coinList?.find((coin: CoinType) => coin.id === toCoinId)
    const fromCoin = coinList?.find((coin: CoinType) => coin.id === fromCoinId)

    const currentToCoinName = toCoin && toCoin.name
    const currentFromCoinName = fromCoin && fromCoin.name
    const currentToCoinPrice: number = toCoin ? toCoin.values.USD.price : 0
    const currentFromCoinPrice = fromCoin ? fromCoin.values.USD.price : 0

    const convertValue = roundCoinValues(currentToCoinPrice / currentFromCoinPrice * coinCounter)

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
        coinList
    }
};

export default useConverter;