import { useRouter } from 'next/router'

import { CustomNav } from './style'

import { CustomLink } from '@/components'

const navigation = [
  { id: 1, title: 'Coin List', path: '/' },
  { id: 2, title: 'Converter', path: '/converter' },
]

export const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <CustomNav>
      {navigation.map(({ id, title, path }) => (
        <CustomLink key={id} href={path} active={pathname === path ? 'active' : ''}>
          {title}
        </CustomLink>
      ))}
    </CustomNav>
  )
}
