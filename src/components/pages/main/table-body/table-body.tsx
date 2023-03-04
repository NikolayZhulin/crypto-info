import React from 'react';
import {TableItemWrapper, TableRowWrapper} from "@/styles/style";
import {roundCoinValues} from "@/utils/round-coin-values";
import {coinResponseType} from "@/pages";

type Props = {
    rows: coinResponseType[]
    isLoading: boolean
}

export const TableBody = ({rows, isLoading}: Props) => {

    if(isLoading){
        return <div> LOADING... </div>
    }
    return (
        <>
            {rows.map((row: coinResponseType) => {
                    return (
                        <div key={row.id}>
                            <TableRowWrapper>
                                <TableItemWrapper>
                                    {row.name}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {roundCoinValues(row.values.USD.price)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {roundCoinValues(row.circulatingSupply)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {roundCoinValues(row.circulatingSupply)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {roundCoinValues(row.circulatingSupply)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {roundCoinValues(row.circulatingSupply)}
                                </TableItemWrapper>
                                <TableItemWrapper>
                                    {roundCoinValues(row.circulatingSupply)}
                                </TableItemWrapper>
                            </TableRowWrapper>
                        </div>
                    )
                }
            )}
        </>
    );
};
