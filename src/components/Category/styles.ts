import styled from 'styled-components'
import { breackpointers, colors } from '../../styles'

export const Category = styled.div`
  margin: 72px 0 48px;
  text-align: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;

    li {
      background-color: ${colors.black};
      transition: all ease 0.3s;

      a {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        p {
          padding: 8px;
          color: ${colors.white};
        }
      }

      &:hover {
        scale: 1.03;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
      }
    }

    @media (max-width: ${breackpointers.desktop}) {
      flex-wrap: wrap;
    }
  }
`
