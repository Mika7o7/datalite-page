import styled from 'styled-components'

export const SectionPortfolioWrapper = styled.section<{ isDark?: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.violetPallet3 : theme.colors.white};
  transition: 300ms all ease-out;
`

export const SectionPortfolioHead = styled.div<{ isDark?: boolean }>`
  width: 100%;
  max-width: 588px;
  margin: 0 auto;
  text-align: center;
  .portfolio {
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
export const SectionPortfolioContent = styled.div<{ isDark?: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
  > div {
    position: relative;
    height: 280px;
    filter: drop-shadow(
      ${({ theme, isDark }) =>
        isDark ? theme.colors.boxShadowDark : theme.colors.boxShadowLight}
    );
    transition: 300ms all ease-out;
    border-radius: 8px;
    overflow: hidden;
  }
`
