import styled from 'styled-components'
import { breackpointers, colors } from '../../styles'

export const Card = styled.div`
  margin: 84px 0 66px;
  padding: 40px 0;
  background-color: ${colors.black};
`

export const List = styled.ul`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  padding: 0 67px;

  li {
    display: flex;
    align-items: center;
    gap: 24px;

    div {
      .title {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: bold;
        color: ${colors.yellow};
        text-transform: uppercase;
      }

      .text {
        font-size: 13px;
        line-height: 20px;
        color: ${colors.white};
      }
    }
  }

  @media (max-width: ${breackpointers.desktop}) {
    flex-direction: column;
    justify-content: left;
    align-items: center;
  }
`
