import styled from 'styled-components'

export const FlexContainer = styled.div<{
  alignItems?: string
  justifyContent?: string
  flexDirection?: string
  margin?: string
  width?: string
}>`
  width: ${props => props.width || '100%'};
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || 'table-row'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin: ${props => props.margin || '0px'};
`
