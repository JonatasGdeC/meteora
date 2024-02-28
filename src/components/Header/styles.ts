import styled from 'styled-components'
import { breackpointers, colors } from '../../styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${colors.black};
`
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ul {
    display: flex;
    gap: 40px;

    li {
      a {
        color: ${colors.white};
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }

    @media (max-width: ${breackpointers.tablet}) {
      display: none;
    }
  }
`

export const Search = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;

  input {
    border: none;
    padding: 8px 16px;
  }

  button {
    padding: 8px 12px;
    background-color: transparent;
    border: 1px solid ${colors.white};
    color: ${colors.white};
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: ${breackpointers.tablet}) {
    display: none;
  }
`

export const Hamburguer = styled.button`
  background-color: transparent;
  border: none;

  @media (min-width: ${breackpointers.tablet}) {
    display: none;
  }
`

export const MenuMobile = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 16px 24px;
  background-color: ${colors.grayMenu};

  header {
    text-align: right;
    margin-bottom: 12px;

    button {
      background-color: transparent;
      border: none;
    }
  }

  ul {
    li {
      padding: 8px 0;
      border-top: 1px solid ${colors.white};
      a {
        color: ${colors.white};
      }
    }
  }

  &.is--open {
    display: block;
  }
`
