import {CustomButton} from './style'

type Props = {
    title: string
    onClick: () => void
}

const PrimaryButton = ({title, onClick}: Props) => {
    return (
        <CustomButton onClick={onClick}>
            {title}
        </CustomButton>
    );
};

export default PrimaryButton;