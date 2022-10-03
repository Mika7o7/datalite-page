import styled from 'styled-components'
import { Link } from 'react-scroll'

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.blackPallet1};
`
export const FooterMain = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  .container-md {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`

export const FooterLogo = styled.div`
  > a {
    display: flex;
    cursor: pointer;
  }
  > p {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 16px;
    width: 100%;
    max-width: 262px;
    opacity: 0.75;
  }
`

export const FooterNav = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: center;
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

export const FooterScrollTop = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(58.62deg, #605bff 0%, #9f5bff 100%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  width: 240px;
  height: 56px;

  > p {
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const FooterAlt = styled.div`
  background: ${({ theme }) => theme.colors.grayPallet3};
  text-align: center;
  padding: 16px;
  flex: 1;
  > p {
    color: ${({ theme }) => theme.colors.white};
  }
`
