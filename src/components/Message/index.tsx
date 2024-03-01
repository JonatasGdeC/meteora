import { useFormik } from 'formik'
import * as Yup from 'yup'

import iconCheck from '../../assets/icons/check.png'
import iconClose from '../../assets/icons/close.png'

import { Button } from '../../styles'
import * as S from './styles'
import { useState } from 'react'

const Message = () => {
  const [openModal, setOpenModal] = useState(false)

  const form = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('É necessário adicionar um e-mail')
    }),
    onSubmit: () => {
      setOpenModal(true)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const alterado = fieldName in form.touched
    const invalido = fieldName in form.errors

    if (alterado && invalido) return message
    return ''
  }

  const checkInputError = (fieldName: string) => {
    const alterado = fieldName in form.touched
    const invalido = fieldName in form.errors

    const error = alterado && invalido

    return error
  }

  return (
    <>
      <div className="container">
        <S.Card>
          <p>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na
            primeira compra? Cadastre-se!
          </p>
          <form onSubmit={form.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Digite seu email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('email') ? 'is--error' : ''}
              />
              <Button type="submit">Enviar</Button>
            </div>
            <small>{getErrorMessage('email', form.errors.email)}</small>
          </form>
        </S.Card>
      </div>
      <S.Modal className={openModal ? 'is--open' : ''}>
        <S.Overlay onClick={() => setOpenModal(false)} />
        <S.CardModal>
          <S.HeaderModal>
            <div>
              <img src={iconCheck} alt="Check" />
              <p>E-mail cadastrado com sucesso!</p>
            </div>
            <button onClick={() => setOpenModal(false)}>
              <img src={iconClose} alt="Close" />
            </button>
          </S.HeaderModal>
          <p>Em breve você receberá novidades exclusivas da Meteora.</p>
        </S.CardModal>
      </S.Modal>
    </>
  )
}

export default Message
