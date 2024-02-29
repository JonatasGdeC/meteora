import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  gray: '#ccc',
  yellow: '#daff01',
  purple: '#9353ff',
  pink: '#ee5471',
  orange: '#f87f46',
  grayMenu: '#343A40'
}

export const breackpointers = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  list-style: none;
}

.container{
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
}
`

export const TitleSection = styled.h2`
  margin-bottom: 32px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
`

export const Button = styled.button`
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  color: ${colors.white};
  background-color: ${colors.purple};
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.03;
  }
`
