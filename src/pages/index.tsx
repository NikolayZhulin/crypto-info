import { FlexContainer, Meta } from '@/components'
import { CoinsTable } from '@/modules'

const Home = () => {
  return (
    <>
      <Meta title="Coins list" description="crypto currency list" />
      <FlexContainer justifyContent="center" flexDirection="column" width="80%">
        <CoinsTable />
      </FlexContainer>
    </>
  )
}

export default Home
