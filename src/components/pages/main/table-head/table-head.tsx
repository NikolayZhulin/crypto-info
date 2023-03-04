import React from 'react';
import {TableTitleWrapper,TableHead} from "@/styles/style";

export const TableHeader = () => {
    return (
        <TableHead>
            <TableTitleWrapper>NAME</TableTitleWrapper>
            <TableTitleWrapper>Price USD</TableTitleWrapper>
            <TableTitleWrapper>Circ. Supply</TableTitleWrapper>
            <TableTitleWrapper>Market Cap</TableTitleWrapper>
            <TableTitleWrapper>Category</TableTitleWrapper>
            <TableTitleWrapper>To ATH</TableTitleWrapper>
            <TableTitleWrapper>From ATH</TableTitleWrapper>
        </TableHead>
    );
};

