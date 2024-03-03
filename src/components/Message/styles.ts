import styled from 'styled-components'
import { breackpointers, colors } from '../../styles'

export const Card = styled.div`
  padding: 40px 16px;
  margin: 0 190px 66px;
  border: 2px solid ${colors.black};
  text-align: center;

  p {
    margin-bottom: 24px;
    font-size: 20px;
  }

  form {
    div {
      display: flex;
      padding: 0 95px;

      @media (max-width: ${breackpointers.desktop}) {
        padding: 0;
      }

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
    margin: 0 40px 36px;
    padding: 40px 60px;
  }

  @media (max-width: ${breackpointers.tablet}) {
    margin: 0 20px 28px;
    padding: 24px 16px;
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
  animation: zoomInAndOut 0.3s ease-in-out;

  @keyframes zoomInAndOut {
    0% {
      transform: scale(0); /* Zoom inicial */
    }
    100% {
      transform: scale(1); /* Zoom final */
    }
  }

  > p {
    font-size: 16px;
    padding: 16px 16px 32px;
  }
`

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  border-radius: 8px 8px 0 0;
  background-color: ${colors.black};

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
