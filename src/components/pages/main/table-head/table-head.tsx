import React from 'react';
import {TableTitleWrapper,TableHeadWrapper} from "./style";

export const TableHead = () => {
    return (
        <TableHeadWrapper>
            <TableTitleWrapper>NAME</TableTitleWrapper>
            <TableTitleWrapper>Price USD</TableTitleWrapper>
            <TableTitleWrapper>Circ. Supply</TableTitleWrapper>
            <TableTitleWrapper>Market Cap</TableTitleWrapper>
            <TableTitleWrapper>Category</TableTitleWrapper>
            <TableTitleWrapper>To ATH</TableTitleWrapper>
            <TableTitleWrapper>From ATH</TableTitleWrapper>
        </TableHeadWrapper>
    );
};

