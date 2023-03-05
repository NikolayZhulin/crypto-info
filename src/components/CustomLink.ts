import Link from 'next/link'
import styled from 'styled-components'

export const CustomLink = styled(Link)<{ active: string }>`
  color: ${props => (props.active ? 'aqua' : 'white')};
`
