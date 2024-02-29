import Banner from './components/Banner'
import Category from './components/Category'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import { GlobalStyle } from './styles'

import { products } from './mocks/Products'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <div className="container">
        <Category />
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default App
