import { CustomButton } from '@/components/button/style'

type Props = {
  title: string
  onClick: () => void
  width?: string
  disabled?: boolean
}

export const Button = ({ title, onClick, width, disabled }: Props) => {
  return (
    <CustomButton onClick={onClick} width={width} disabled={disabled}>
      {title}
    </CustomButton>
  )
}
