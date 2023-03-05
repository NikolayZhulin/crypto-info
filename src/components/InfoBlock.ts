import styled from 'styled-components'

export const InfoBlock = styled.div<{ fontSize?: string }>`
  margin: 30px;
  font-weight: 700;
  font-size: ${props => props.fontSize + 'px' || '24px'};
`
