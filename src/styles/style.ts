import styled from 'styled-components'

export const TableTitleWrapper = styled.div`
  color: white;
  font-family: 'BebasNeue-Regular', sans-serif;
  font-weight: 700;
  font-size: 24px;
  padding: 16px 16px 16px 0;
`

export const TableItemWrapper = styled.div`
  color: white;
  font-family: 'Avenir Next Cyr', sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 16px 16px 16px 0;
`

export const WalletAddressWrapper = styled(TableItemWrapper)`
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const UsersTableContainer = styled.div`
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ScrollContainer = styled.div`
  width: 100%;
  max-height: 550px;
  overflow: auto;
  position: relative;
  &::-webkit-scrollbar-track {
    background: #e10000;
  }

  &::-webkit-scrollbar {
    border-radius: 50%;
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #e75626;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #f84949;
  }
`
export const TableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  border-bottom: 1px solid white;
`

export const TableRowWrapper = styled.div`
  width: 100%;

  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-bottom: 1px solid white;

  cursor: pointer;

  &:hover div {
    color: #e75626;
  }
`

export const CloseIcon = styled.div<{ vision: boolean }>`
  width: 20px;
  height: 20px;

  position: absolute;

  right: 30px;
  top: 11px;

  display: ${props => (props.vision ? 'block' : 'none')};

  color: #fff;

  cursor: pointer;
`
