import styled from 'styled-components'
import { breackpointers, colors } from '../../styles'

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
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

  @media (max-width: ${breackpointers.desktop}) {
    gap: 20px;

    img {
      width: 100px;
    }
  }

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

    @media (max-width: ${breackpointers.desktop}) {
      gap: 20px;
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

    @media (max-width: ${breackpointers.desktop}) {
      width: 145px;
    }
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
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 16px 24px;
  background-color: ${colors.grayMenu};

  header {
    margin-bottom: 12px;
    text-align: right;

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
    opacity: 1;
    visibility: visible;
    animation: openMenu 0.3s ease-in-out;

    @keyframes openMenu {
      0% {
        right: -100px; /* Zoom inicial */
      }
      100% {
        right: 0; /* Zoom final */
      }
  }
`
