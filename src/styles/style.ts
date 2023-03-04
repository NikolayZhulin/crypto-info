import styled from 'styled-components'

export const TableWrapper = styled.div<{ width:string }>`
  width: ${props => (props.width ? props.width + 'px' : '100%')}
`

export const FlexContainer = styled.div<{
    alignItems?: string
    justifyContent?: string
    flexDirection?: string
    margin?: string
    width?:string
}>`
  width:${props=> props.width || '100%'} ;
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin: ${props => props.margin || '0px'};
`

export const NumberInput = styled.input.attrs({
    type: 'number'
})`
  width: 250px;
  height: 30px;
`

export const CustomSelect = styled.select`
  width: 250px;
  height: 30px;
`