import { ChangeEvent } from 'react'

import { CustomSelect } from './style'

import { CoinShortDataType } from '@/types'

type Props = {
  value?: number
  onChange: (value: number) => void
  options?: CoinShortDataType[]
}

export const CoinsSelector = ({ onChange, options, value }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(+e.currentTarget.value)
  }

  return (
    <CustomSelect onChange={onChangeHandler} value={value}>
      {options?.map((coin: CoinShortDataType) => (
        <option key={coin.id} value={coin.id}>
          {coin.name}
        </option>
      ))}
    </CustomSelect>
  )
}
