import { Button } from '../../styles'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  price: number
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

const Product = ({ image, title, description, price }: Props) => {
  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Details>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="price">{parseToBrl(price)}</p>
        <Button>Ver mais</Button>
      </S.Details>
    </S.Card>
  )
}

export default Product
