import Head from "next/head";
import useConverter from "@/hooks/use-converter";
import CoinSelectFields from "@/components/pages/converter/coin-select-fields/coin-select-fields";
import {FlexContainer, NumberInput} from "@/styles/style";

const Converter = () => {
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
        coinList
    } = useConverter()

    const changeCoinCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const count = +e.currentTarget.value
        if (count > 0) {
            setCoinCounter(count)
        }
    }

    return (
        <FlexContainer flexDirection={'column'} alignItems={'start'} width={'600px'}>
            <Head>
                <title>Crypto Converter</title>
            </Head>
            <NumberInput value={coinCounter} onChange={changeCoinCount}/>
            <CoinSelectFields toCoinId={toCoinId}
                              coinList={coinList}
                              fromCoinId={fromCoinId}
                              setToCoinId={setToCoinId}
                              setFromCoinId={setFromCoinId}
                              isLoading={isLoading}
                              changeHandler={changeHandler}
            />
                <FlexContainer justifyContent={'flex-start'} margin={'20px 0 0 0'}>{coinCounter} {currentToCoinName} = {convertValue} {currentFromCoinName}</FlexContainer>
        </FlexContainer>


    );
};

export default Converter;





