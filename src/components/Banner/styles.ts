import styled from 'styled-components'
import { breackpointers } from '../../styles'

export const Img = styled.div`
  img {
    display: none;
    width: 100%;

    @media (min-width: ${breackpointers.desktop}) {
      &.is--desktop {
        display: block;
      }
    }

    @media (min-width: ${breackpointers.tablet}) and (max-width: ${breackpointers.desktop}) {
      &.is--tablet {
        display: block;
      }
    }

    @media (max-width: ${breackpointers.tablet}) {
      &.is--mobile {
        display: block;
      }
    }
  }
`
