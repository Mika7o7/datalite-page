import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-x: hidden;
  }
  body {
    background-color: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.typography.openSans};
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width:0;
      display: none;
    }
    scrollbar-width: none;
    white-space: pre-line;
  }
  button {
    border: none;
    background-color: transparent;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  input {
    outline: none;
  }
  img{
    user-select: none;
    pointer-events: none;
  }
`
