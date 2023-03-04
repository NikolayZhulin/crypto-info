import React from 'react';
import useSWR from "swr";
import {fetcher} from "@/pages";

type Props = {
    coinKey: string
}

export const UseCoinInfo = ({coinKey}:Props) => {

    const {data, error, isLoading} = useSWR(
        `https://tstapi.cryptorank.io/v0/coins/${coinKey}`,
        fetcher)

    console.log(data)
    if(error){
        return <div>Some error</div>
    }
    if(isLoading){
        return <div>Loading...</div>
    }

    if(data){
        return {data}
    }
};

