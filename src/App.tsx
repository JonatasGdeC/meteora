import Header from './components/Header'
import Banner from './components/Banner'
import Category from './components/Category'
import ProductsList from './components/ProductsList'
import Infos from './components/Infos'

import { products } from './mocks/Products'
import { GlobalStyle } from './styles'
import Message from './components/Message'
import Footer from './components/Footer'

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
      <Infos />
      <Message />
      <Footer />
    </>
  )
}

export default App
