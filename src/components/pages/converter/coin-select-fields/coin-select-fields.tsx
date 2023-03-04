import {CoinType} from "@/types/types";
import {SelectFieldsWrapper} from "@/components/pages/converter/coin-select-fields/style";
import PrimaryButton from "@/components/common/ui/buttons/primary-button";
import ConvertSelector from "@/components/common/ui/drop-downs/convert-selector/convert-selector";

type Props = {
    setToCoinId: (value: number) => void
    setFromCoinId: (value: number) => void
    toCoinId?: number
    fromCoinId?: number
    coinList?: CoinType[]
    changeHandler: () => void
    isLoading: boolean
}

const CoinSelectFields = ({
                              setToCoinId,
                              toCoinId,
                              fromCoinId,
                              setFromCoinId,
                              coinList,
                              changeHandler,
                              isLoading
                          }: Props) => {

    if (isLoading){
        return <div>Loading...</div>
    }

        return (
            <SelectFieldsWrapper>
                <ConvertSelector onChange={setToCoinId} value={toCoinId} options={coinList}/>
                <PrimaryButton title={'swap'} onClick={changeHandler}/>
                <ConvertSelector onChange={setFromCoinId} value={fromCoinId} options={coinList}/>
            </SelectFieldsWrapper>
        );
};

export default CoinSelectFields;