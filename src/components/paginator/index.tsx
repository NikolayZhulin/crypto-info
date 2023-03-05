import { FlexContainer, Button } from '@/components'

type Props = {
  itemsCount: number
  page: number
  itemsPerPage: number
  setPage: (page: number) => void
}

export const Paginator = ({ itemsPerPage, page, itemsCount, setPage }: Props) => {
  const nextPage = () => {
    if (itemsCount && page < Math.ceil(itemsCount / itemsPerPage)) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if (itemsCount && page > 0) {
      setPage(page - 1)
    }
  }

  return (
    <FlexContainer>
      <Button onClick={previousPage} title="< Previous page" width="140" disabled={page === 0} />
      <Button
        onClick={nextPage}
        title="Next page >"
        width="140"
        disabled={page === Math.ceil(itemsCount! / itemsPerPage)}
      />
    </FlexContainer>
  )
}
