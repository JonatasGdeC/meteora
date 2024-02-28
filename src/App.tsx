import Banner from './components/Banner'
import Category from './components/Category'
import Header from './components/Header'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <div className="container">
        <Category />
      </div>
    </>
  )
}

export default App
