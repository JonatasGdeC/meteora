import iconDiamond from '../../assets/icons/x-diamond.png'
import iconArrowRepeat from '../../assets/icons/arrow-repeat.png'
import iconFlower from '../../assets/icons/flower.png'

import { TitleSection } from '../../styles'
import * as S from './styles'

const Infos = () => {
  return (
    <S.Card>
      <TitleSection color="white" marginBottom={40}>
        Conheça todas as nossas facilidades
      </TitleSection>
      <S.List className="container">
        <li>
          <img src={iconDiamond} alt="Pague pelo pix" />
          <div>
            <p className="title">Pague pelo pix</p>
            <p className="text">Ganhe 5% OFF em pagamentos via PIX.</p>
          </div>
        </li>
        <li>
          <img src={iconArrowRepeat} alt="Troca grátis" />
          <div>
            <p className="title">Troca grátis</p>
            <p className="text">Fique livre para troca em até 30 dias.</p>
          </div>
        </li>
        <li>
          <img src={iconFlower} alt="Sustentabilidade" />
          <div>
            <p className="title">Sustentabilidade</p>
            <p className="text">
              Moda responsável, que respeita o meio ambiente.
            </p>
          </div>
        </li>
      </S.List>
    </S.Card>
  )
}

export default Infos
