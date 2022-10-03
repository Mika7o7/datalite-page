import styled from 'styled-components'

export const SectionExpertiseWrapper = styled.section<{ isDark?: boolean }>`
  padding: 102px 0;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.violetPallet5 : theme.colors.grayPallet2};
  transition: 300ms all ease-out;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  background-image: url('/static/images/expertise-back.png');
  background-position: center;
  background-size: contain;
`
export const SectionExpertiseHead = styled.div<{ isDark?: boolean }>`
  width: 100%;
  max-width: 588px;
  margin: 0 auto;
  text-align: center;
  .expertise {
    &-title {
      color: ${({ isDark, theme }) => isDark && theme.colors.white};
      transition: 300ms all ease-out;
    }
    &-desc {
      margin-top: 16px;
      margin-bottom: 32px;
      color: ${({ isDark, theme }) => isDark && theme.colors.white};
      transition: 300ms all ease-out;
    }
    &-estimation {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 208px;
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
  }
`
export const SectionExpertiseContent = styled.div<{ isDark?: boolean }>`
  margin-top: 40px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 48px;
  > div {
    background: ${({ theme, isDark }) =>
      isDark ? theme.colors.violetPallet4 : theme.colors.white};
    box-shadow: ${({ theme, isDark }) =>
      isDark ? theme.colors.boxShadowDark : theme.colors.boxShadowLight};
    transition: 300ms all ease-out;
    border-radius: 8px;
    height: 440px;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;

    > .block_name {
      text-align: center;
      justify-content: center;
      width: 340px;
      border-radius: 0 0 8px 8px;
      color: ${({ theme, isDark }) =>
      isDark ? theme.colors.white : theme.colors.violetPallet4};
      height: 100px;
      background: ${({ theme, isDark }) =>
      isDark ? theme.colors.violetPallet1 : theme.colors.white};
    }
    > p {
      color: ${({ theme }) => theme.colors.grayPallet1};
      margin-top: 8px;
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
