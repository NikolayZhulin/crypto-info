import useSWR from "swr";
import {CoinType, ResponseType} from "@/types/types";
import {API_KEY, BASE_COIN_LIST_URL} from "@/constants/constants";
import {fetcher} from "@/utils/fetcher";

const useCoinList = () => {
    const {data, isLoading} = useSWR<ResponseType<CoinType[]>>(
        `${BASE_COIN_LIST_URL}?api_key=${API_KEY}`,
        fetcher)

    return{ data, isLoading}
};

export default useCoinList;

