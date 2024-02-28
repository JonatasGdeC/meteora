import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  gray: '#ccc',
  yellow: '#daff01',
  purple: '#9353ff',
  pink: '#ee5471',
  orange: '#f87f46'
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
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
