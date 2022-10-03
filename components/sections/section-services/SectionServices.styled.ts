import styled from 'styled-components'

export const SectionServicesWrapper = styled.section<{ isDark?: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: 112px;
  padding-bottom: 80px;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.violetPallet3 : theme.colors.white};
  transition: 300ms all ease-out;
  .container-lg {
    display: flex;
    justify-content: center;
    position: relative;
    .background {
      position: absolute;
      z-index: -1;
      width: 100%;
      bottom: 48px;
      left: 0;
      display: flex;
      justify-content: center;
    }
  }
  .services-estimation {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 174px;
    height: 48px;
    margin: 0 auto;
    background: linear-gradient(58.62deg, #605bff 0%, #9f5bff 100%);
    border-radius: 12px;
    transition: 600ms all ease-out;
    > p {
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover {
      box-shadow: 0px 10px 28px rgba(159, 91, 255, 0.4);
    }
  }
`

export const SectionServicesHead = styled.div<{ isDark?: boolean }>`
  width: 100%;
  max-width: 588px;
  margin: 0 auto;
  text-align: center;
  .services {
    &-title {
      color: ${({ isDark, theme }) => isDark && theme.colors.white};
      transition: 300ms all ease-out;
    }
    &-desc {
      margin-top: 16px;
      margin-bottom: 40px;
      color: ${({ isDark, theme }) => isDark && theme.colors.white};
      transition: 300ms all ease-out;
    }
  }
`

export const SectionServicesContent = styled.div<{ isDark?: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
  > div {
    background: ${({ theme, isDark }) =>
      isDark ? theme.colors.violetPallet4 : theme.colors.white};
    box-shadow: ${({ theme, isDark }) =>
      isDark ? theme.colors.boxShadowDark : theme.colors.boxShadowLight};
    transition: 300ms all ease-out;
    border-radius: 8px;
    height: 152px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    > p {
      color: ${({ theme }) => theme.colors.grayPallet1};
      margin-top: 12px;
      transition: 300ms all ease-out;
    }
    &:hover {
      box-shadow: 0px 10px 28px ${({ theme }) => theme.colors.violetPallet2};
      > p {
        color: ${({ theme, isDark }) =>
          isDark ? theme.colors.white : theme.colors.blackPallet1};
      }
    }
  }
`
