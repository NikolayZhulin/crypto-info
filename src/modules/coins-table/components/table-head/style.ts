import styled from 'styled-components'

export const TableHeadRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  border-bottom: 1px solid black;
`

export const TableHeadItem = styled.div`
  padding: 16px 16px 16px 0;
  font-weight: 700;
  font-size: 20px;
`
