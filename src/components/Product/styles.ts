import styled from 'styled-components'
import { colors } from '../../styles'

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
    font-size: 16px;
    margin-bottom: 14px;
  }

  .description {
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 16px;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`
export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`
export const CardModal = styled.div`
  background-color: ${colors.white};
`

export const InfosModal = styled.div`
  padding: 16px 16px 32px;
  display: flex;
  gap: 16px;
  align-items: top;

  div {
    h3 {
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 24px;
    }

    .description {
      font-size: 13px;
      line-height: 20px;
      padding-bottom: 24px;
      border-bottom: 1px solid ${colors.black};
    }

    .price {
      font-size: 20px;
      font-weight: 500;
      padding: 24px 0;
    }

    .sale {
      font-size: 13px;
      color: ${colors.gray};
      padding-bottom: 16px;
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
  justify-content: space-between;
  align-items: center;
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
