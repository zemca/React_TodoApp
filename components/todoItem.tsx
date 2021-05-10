import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
import { spacings } from './theme'

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: black;
  color: white;
  padding: ${spacings.s};
  display: flex;
  flex-wrap: nowrap;
`
const MenuButton = styled.div`
  margin-right: 30px
`

export const todoItem: FC = () => {
  return <Wrapper>
    <MenuButton>
        Menu
    </MenuButton>
    <MenuButton>
        <Link href="ukolnicek_ukoly">
            <a>Úkoly</a>
        </Link>
    </MenuButton>
    <MenuButton>
        <Link href="ukolnicek_kalendar">
            <a>Kalendář</a>
        </Link>
    </MenuButton>
    

  </Wrapper>
}
