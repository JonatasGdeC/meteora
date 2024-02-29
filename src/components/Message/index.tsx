import { Button } from '../../styles'
import { Card } from './styles'

const Message = () => {
  return (
    <div className="container">
      <Card>
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </p>
        <form>
          <input type="text" placeholder="Digite seu email" />
          <Button>Enviar</Button>
        </form>
      </Card>
    </div>
  )
}

export default Message
