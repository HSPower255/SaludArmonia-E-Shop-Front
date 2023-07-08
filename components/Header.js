import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import { Lines, Menu, MenuLink, Logo, Nav, Search, Wrapper, SearchLink } from "@/styles/HeaderStyles"
import { GiPeaceDove } from 'react-icons/gi'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const { cartProducts } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <Logo href={'/'}>
        <GiPeaceDove /> Salud<span>Armonía</span>
      </Logo>
      <Wrapper>
        <Search href={'/search'}>
          <AiOutlineSearch size={25} />
        </Search>
        <Lines onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu size={25} />
        </Lines>
      </Wrapper>
      <Menu isopen={isOpen ? 'true' : undefined}>
        <MenuLink href={'/'}>Inicio</MenuLink>
        <MenuLink href={'/products'}>Productos</MenuLink>
        <MenuLink href={'/categories'}>Categorías</MenuLink>
        <MenuLink href={'/cart'}>
          Carro
          {cartProducts.length > 0 && (
            <span> ({cartProducts.length})</span>
          )}
        </MenuLink>
      </Menu>
      <SearchLink href={'/search'}>
        <AiOutlineSearch size={25} />
      </SearchLink>
    </Nav>
  )
}

export default Header