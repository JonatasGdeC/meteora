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
    display: flex;
    padding: 0 95px;
    input {
      width: 100%;
      padding: 8px 16px;
      border: 1px solid ${colors.black};
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
