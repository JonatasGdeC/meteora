import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.li`
  max-width: 350px;
  border: 1px solid ${colors.gray};
  img {
    width: 100%;
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
