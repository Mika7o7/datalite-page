import styled from 'styled-components'

export const SectionHeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  .container-md {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
  }
`
export const HeroBackground = styled.div<{ isDark?: boolean }>`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme, isDark }) =>
    isDark ? theme.colors.gradientDark : theme.colors.gradientLight};
  transition: 300ms all ease-in-out;
`
export const HeroContent = styled.div`
  .hero {
    &-title {
      width: 100%;
      max-width: 546px;
      color: ${({ theme }) => theme.colors.white};
    }
    &-desc {
      margin-top: 16px;
      margin-bottom: 32px;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.75;
      width: 100%;
      max-width: 440px;
    }
    &-estimation {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 240px;
      height: 56px;
      background: linear-gradient(58.62deg, #605bff 0%, #9f5bff 100%);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 12px;
      > p {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
