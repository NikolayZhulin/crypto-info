import React, {ChangeEvent} from 'react';
import {CoinType} from "@/types/types";
import {CustomSelect} from "@/components/common/ui/drop-downs/convert-selector/style";

type Props = {
    value?: number
    onChange: (value: number) => void
    options?: CoinType[]
}

const ConvertSelector = ({onChange, options, value}: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(+e.currentTarget.value)
    }

    const mappedCoinOptions = options?.map((coin: CoinType) => {
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

export default ConvertSelector