import React, { ChangeEvent } from 'react'

import { useConverter } from '../hooks'

import { SelectFieldsWrapper } from './style'

import { FlexContainer, NumberInput, CoinsSelector, Button, InfoBlock } from '@/components'

export const CryptoCurrencyConverter = () => {
  const {
    convertValue,
    setToCoinId,
    toCoinId,
    fromCoinId,
    currentToCoinName,
    currentFromCoinName,
    setCoinCounter,
    coinCounter,
    isLoading,
    changeHandler,
    setFromCoinId,
    coinList,
    coinShortDataError,
  } = useConverter()

  const setConvertedCoinsCounter = (e: ChangeEvent<HTMLInputElement>) => {
    const convertedCoinsCounter = +e.currentTarget.value

    if (convertedCoinsCounter >= 1) {
      setCoinCounter(convertedCoinsCounter)
    }
  }

  const convertedInfo = `${coinCounter} ${currentToCoinName} = ${convertValue} ${currentFromCoinName}`

  if (coinShortDataError) {
    return <InfoBlock fontSize="40">Some error occurred</InfoBlock>
  }

  if (isLoading) {
    return <InfoBlock fontSize="40">Loading...</InfoBlock>
  }

  return (
    <FlexContainer flexDirection="column" alignItems="start" width="600px">
      <NumberInput value={coinCounter} onChange={setConvertedCoinsCounter} />
      <SelectFieldsWrapper>
        <CoinsSelector onChange={setToCoinId} value={toCoinId} options={coinList} />
        <Button title="swap" onClick={changeHandler} />
        <CoinsSelector onChange={setFromCoinId} value={fromCoinId} options={coinList} />
      </SelectFieldsWrapper>
      <FlexContainer justifyContent="flex-start" margin="20px 0 0 0">
        {convertedInfo}
      </FlexContainer>
    </FlexContainer>
  )
}
