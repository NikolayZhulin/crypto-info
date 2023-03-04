import {TableItemWrapper, TableRowWrapper} from "./style";
import {roundCoinValues} from "@/utils/round-coin-values";
import {getToATH} from "@/utils/get-to-ath";
import {getFromATH} from "@/utils/get-from-ath";
import {CoinType} from "@/types/types";
import useCoinInfo from "@/hooks/use-coin-info";

type Props = {
    rows?: CoinType[]
    isLoading: boolean
}

export const TableBody = ({rows, isLoading}: Props) => {

    if (isLoading) {
        return <div> LOADING... </div>
    }
    return (
        <>
            {rows && rows.map((row: CoinType) => {
                const {isLoading:isCoinInfoLoading, data} = useCoinInfo(row.slug)
                console.log(data?.data.price.USD, data?.data.athPrice.USD)
                    return (
                        <div key={row.id}>
                            <TableRowWrapper>
                                <TableItemWrapper>
                                    {row.name}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    $ {roundCoinValues(row.values.USD.price)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {row.symbol} {roundCoinValues(row.circulatingSupply)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    $ {roundCoinValues(row.values.USD.marketCap)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {row.category}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {isCoinInfoLoading ? 'Loading...':getToATH( data?.data.price.USD, data?.data.athPrice.USD) + '%'}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {isCoinInfoLoading ? 'Loading...':-getFromATH( data?.data.price.USD, data?.data.athPrice.USD)+ '%'}
                                </TableItemWrapper>
                            </TableRowWrapper>
                        </div>
                    )
                }
            )}
        </>
    );
};
