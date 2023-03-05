import { ReactElement } from 'react'

import { FlexContainer, Header } from '@/components'

type Props = {
  children: ReactElement
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <FlexContainer>{children}</FlexContainer>
    </>
  )
}
