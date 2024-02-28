import imageShirt from '../../assets/category/shirt.png'
import imageHandbag from '../../assets/category/handbag.png'
import imageShoes from '../../assets/category/shoes.png'
import imagePants from '../../assets/category/pants.png'
import imageCoat from '../../assets/category/coat.png'
import imageGlasses from '../../assets/category/glasses.png'

import { TitleSection } from '../../styles'
import * as S from './styles'

const Category = () => {
  return (
    <S.Category>
      <TitleSection>Busque por categoria</TitleSection>
      <ul>
        <li>
          <a href="#">
            <img src={imageShirt} alt="Camisa" />
            <p>Camisa</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imageHandbag} alt="Bolsa" />
            <p>Bolsa</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imageShoes} alt="Calçados" />
            <p>Calçados</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imagePants} alt="Calças" />
            <p>Calças</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imageCoat} alt="Casacos" />
            <p>Casacos</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imageGlasses} alt="Óculos" />
            <p>Óculos</p>
          </a>
        </li>
      </ul>
    </S.Category>
  )
}

export default Category
