import styled from 'styled-components'
import { breackpointers, colors } from '../../styles'

export const Card = styled.div`
  text-align: center;
  padding: 40px 16px;
  margin: 0 190px 66px;
  border: 2px solid ${colors.black};

  p {
    font-size: 20px;
    margin-bottom: 24px;
  }

  form {
    div {
      display: flex;
      padding: 0 95px;

      input {
        width: 100%;
        padding: 8px 16px;
        border: 1px solid ${colors.black};

        &.is--error {
          border-color: ${colors.red};
        }
      }
    }

    small {
      color: ${colors.red};
    }
  }

  @media (max-width: ${breackpointers.desktop}) {
    margin: 0 0 36px;
    padding: 40px 60px;

    form {
      padding: 0 64px;
    }
  }

  @media (max-width: ${breackpointers.tablet}) {
    margin: 0 28px;
    padding: 24px 16px;

    form {
      padding: 0;
    }
  }
`

export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.is--open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const CardModal = styled.div`
  max-width: 700px;
  width: 100%;
  background-color: ${colors.white};
  border-radius: 8px;

  > p {
    font-size: 16px;
    padding: 16px 16px 32px;
  }
`

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  background-color: ${colors.black};
  border-radius: 8px 8px 0 0;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-size: 20px;
      color: ${colors.white};
    }
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
