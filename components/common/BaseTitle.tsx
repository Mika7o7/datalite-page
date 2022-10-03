import styled, { css } from 'styled-components'

type BaseTitleProps = {
  textTransform?: string
  fw?: number
  type?: 'mode1' | 'mode2'
}

const BaseTitle = styled.p<BaseTitleProps>`
  text-transform: ${(props) => props.textTransform || 'capitalize'};
  color: ${({ theme, color }) => color || theme.colors.blackPallet1};
  font-weight: ${(props) => props.fw || 400};
  font-family: ${({ theme }) => theme.typography.archivo};

  ${(props) => {
    switch (props.type) {
      case 'mode1':
        return css`
          font-size: ${props.theme.typography.titles.mode1.fontSize};
          line-height: ${props.theme.typography.titles.mode1.lineHeight};
        `
      case 'mode2':
        return css`
          font-size: ${props.theme.typography.titles.mode2.fontSize};
          line-height: ${props.theme.typography.titles.mode2.lineHeight};
        `
      default:
        return css`
          font-size: ${props.theme.typography.titles.default.fontSize};
          line-height: ${props.theme.typography.titles.default.lineHeight};
        `
    }
  }}
`

export default BaseTitle
