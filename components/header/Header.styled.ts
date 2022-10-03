import { Link } from 'react-scroll'
import styled, { css } from 'styled-components'
import { HeaderProps } from './Header'

export const HeaderWrapper = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.header.height};
  background-color: ${({ theme }) => theme.header.background};
  transition: all 200ms ease-out;

  ${({ whiteHeader, theme }) => {
    return whiteHeader
      ? css`
          background-color: ${theme.colors.white};
          box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
          .header-nav > a > p {
            color: ${({ theme }) => theme.colors.blackPallet1};
          }
          .header-estimation {
            > a {
              background: linear-gradient(58.62deg, #605bff 0%, #9f5bff 100%);
              > p {
                color: ${({ theme }) => theme.colors.white};
                -webkit-text-fill-color: unset;
              }
            }
          }
        `
      : null
  }}

  .container-md {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .theme-mode {
    cursor: pointer;
    width: 88px;
    height: ${({ theme }) => theme.header.height};
    background-color: ${({ theme }) => theme.header.background};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const HeaderLogo = styled(Link)`
  display: flex;
  cursor: pointer;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 24px;
  > a {
    cursor: pointer;
    &:not(:first-child) {
      margin-left: 72px;
    }
    > p {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const HeaderEstimation = styled.div`
  > a {
    cursor: pointer;
    width: 174px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
    > p {
      background: linear-gradient(58.62deg, #605bff 0%, #9f5bff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`
