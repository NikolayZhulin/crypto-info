import styled from "styled-components";
import Link from "next/link";

export const CustomLink = styled(Link)<{ active: string }>`
  color: ${props => props.active ? 'aqua' : 'white'};
`

export const CustomNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`