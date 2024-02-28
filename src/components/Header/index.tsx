import logo from '../../assets/logo.png'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Links>
        <img src={logo} alt="Meteora" />
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
      </S.Links>
      <S.Search>
        <input type="text" placeholder="Digite o produto" />
        <button type="submit">Buscar</button>
      </S.Search>
    </S.Header>
  )
}

export default Header
