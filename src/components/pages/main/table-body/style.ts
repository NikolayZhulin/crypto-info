import styled from "styled-components";

export const TableRowWrapper = styled.div`
  width: 100%;

  position: relative;

  display: grid;
  grid-template-columns: repeat(7, 1fr);

  border-bottom: 1px solid black;

  cursor: pointer;

  &:hover div {
    color: var(--primary-hover);
  }
`

export const TableItemWrapper = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 16px 16px 16px 0;
`