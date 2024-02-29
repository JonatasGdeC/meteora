import { TitleSection } from '../../styles'
import Product from '../Product'
import Products from '../../models/Product'

import { List } from './styles'

type Props = {
  products: Products[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <>
      <TitleSection>Produtos que estão bombando!</TitleSection>
      <List>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </List>
    </>
  )
}

export default ProductsList
