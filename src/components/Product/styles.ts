import styled from 'styled-components'
import { breackpointers, colors } from '../../styles'

export const Card = styled.li`
  max-width: 350px;
  border: 1px solid ${colors.gray};
  transition: all ease 0.3s;
  img {
    width: 100%;
  }

  &:hover {
    scale: 1.03;
  }
`
export const Details = styled.div`
  padding: 12px 16px 16px;

  h3 {
    margin-bottom: 14px;
    font-size: 16px;
  }

  .description {
    margin-bottom: 16px;
    font-size: 13px;
    line-height: 20px;
  }

  .price {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`
export const CardModal = styled.div`
  max-width: 700px;
  width: 100%;
  background-color: ${colors.white};
  object-fit: cover;
  animation: zoomInAndOut 0.3s ease-in-out;

  @keyframes zoomInAndOut {
    0% {
      transform: scale(0); /* Zoom inicial */
    }
    100% {
      transform: scale(1); /* Zoom final */
    }
  }

  @media (max-width: ${breackpointers.tablet}) {
    display: flex;
    flex-direction: column-reverse;
    width: auto;
    margin: 10px;
  }
`

export const InfosModal = styled.div`
  display: flex;
  align-items: top;
  gap: 16px;
  padding: 16px 16px 32px;

  @media (max-width: ${breackpointers.tablet}) {
    flex-direction: column;
  }

  div {
    h3 {
      padding-bottom: 24px;
      font-size: 16px;
      font-weight: bold;
    }

    .description {
      padding-bottom: 24px;
      border-bottom: 1px solid ${colors.black};
      font-size: 13px;
      line-height: 20px;
    }

    .price {
      padding: 24px 0;
      font-size: 20px;
      font-weight: 500;
    }

    .sale {
      padding-bottom: 16px;
      font-size: 13px;
      color: ${colors.gray};
    }

    form {
      .section {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px 0;
        border-top: 1px solid ${colors.gray};

        p {
          font-size: 13px;
          font-weight: bold;
        }

        .options {
          display: flex;
          gap: 16px;

          div {
            display: flex;
            flex-direction: column-reverse;
            gap: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
`

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
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
