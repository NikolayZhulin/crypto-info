import styled from 'styled-components'

export const CustomButton = styled.button<{ width?: string; disabled?: boolean }>`
  width: ${props => props.width + 'px' || '100%'};
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: var(--background);

  &:disabled {
    opacity: 0.5;
  }
`
