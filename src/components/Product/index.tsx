import { Button } from '../../styles'
import iconCheck from '../../assets/icons/check.png'
import iconClose from '../../assets/icons/close.png'
import * as S from './styles'
import { useState } from 'react'

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
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <S.Card>
        <img src={image} alt={title} />
        <S.Details>
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <p className="price">{parseToBrl(price)}</p>
          <Button onClick={() => setOpenModal(true)}>Ver mais</Button>
        </S.Details>
      </S.Card>
      <S.Modal className={openModal ? 'is--open' : ''}>
        <S.Overlay onClick={() => setOpenModal(false)} />
        <S.CardModal>
          <S.InfosModal>
            <img src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <p className="description">{description}</p>
              <p className="price">{parseToBrl(price)}</p>
              <p className="sale">Vendido e entregue por Riachuelo</p>
              <form>
                <div className="section">
                  <p>Cores:</p>
                  <div className="options">
                    <div>
                      <label htmlFor="azul">Azul claro</label>
                      <input name="color" type="radio" id="azul" />
                    </div>
                    <div>
                      <label htmlFor="branco">Offwhite</label>
                      <input name="color" type="radio" id="branco" />
                    </div>
                    <div>
                      <label htmlFor="preto">Preto</label>
                      <input name="color" type="radio" id="preto" />
                    </div>
                  </div>
                </div>
                <div className="section">
                  <p>Tamanho:</p>
                  <div className="options">
                    <div>
                      <label htmlFor="p">P</label>
                      <input name="size" type="radio" id="p" />
                    </div>
                    <div>
                      <label htmlFor="pp">PP</label>
                      <input name="size" type="radio" id="pp" />
                    </div>
                    <div>
                      <label htmlFor="mm">M</label>
                      <input name="size" type="radio" id="m" />
                    </div>
                    <div>
                      <label htmlFor="g">G</label>
                      <input name="size" type="radio" id="g" />
                    </div>
                    <div>
                      <label htmlFor="gg">GG</label>
                      <input name="size" type="radio" id="gg" />
                    </div>
                  </div>
                </div>
              </form>
              <Button>Adicionar à sacola</Button>
            </div>
          </S.InfosModal>
          <S.FooterModal>
            <div>
              <img src={iconCheck} alt="Check" />
              <p>Confira detalhes sobre o produto</p>
            </div>
            <button onClick={() => setOpenModal(false)}>
              <img src={iconClose} alt="Close" />
            </button>
          </S.FooterModal>
        </S.CardModal>
      </S.Modal>
    </>
  )
}

export default Product
