import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";


const useCoinInfo = (coinKey: string) => {

    const {data, error, isLoading} = useSWR(
        `https://tstapi.cryptorank.io/v0/coins/${coinKey}`,
        fetcher)


    return {data, error, isLoading}

};

export default useCoinInfo

