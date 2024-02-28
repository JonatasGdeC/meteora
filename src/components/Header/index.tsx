import logo from '../../assets/logo.png'
import hamburguer from '../../assets/menuHamburguer.png'
import iconClose from '../../assets/iconeClose.png'
import * as S from './styles'
import { useState } from 'react'

const MenuLink = () => {
  return (
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Nossas lojas</a>
      </li>
      <li>
        <a href="#">Novidades</a>
      </li>
      <li>
        <a href="#">Promoções</a>
      </li>
    </ul>
  )
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <S.Header>
      <S.Links>
        <img src={logo} alt="Meteora" />
        <MenuLink />
      </S.Links>
      <S.Search>
        <input type="text" placeholder="Digite o produto" />
        <button type="submit">Buscar</button>
      </S.Search>
      <S.Hamburguer onClick={() => setMenuOpen(true)}>
        <img src={hamburguer} alt="Menu" />
      </S.Hamburguer>
      <S.MenuMobile className={menuOpen ? 'is--open' : ''}>
        <header>
          <button onClick={() => setMenuOpen(false)}>
            <img src={iconClose} alt="Fechar" />
          </button>
        </header>
        <MenuLink />
      </S.MenuMobile>
    </S.Header>
  )
}

export default Header
