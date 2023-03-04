import React, {ChangeEvent} from 'react';
import {CustomSelect} from "@/pages/converter";
import {coinResponseType} from "@/pages";

type Props = {
    value?: number
    onChange: (value: number) => void
    options?: coinResponseType[]
}

export const ConvertField = ({onChange, options, value}: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(+e.currentTarget.value)
    }

    const mappedCoinOptions = options?.map((coin: coinResponseType) => {
        return (
            <option
                key={coin.id}
                value={coin.id}
            >
                {coin.name}
            </option>
        )
    })

    return (
        <CustomSelect onChange={onChangeHandler} value={value}>
            {mappedCoinOptions}
        </CustomSelect>
    );
};
