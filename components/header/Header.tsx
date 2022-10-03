import { FC, useContext } from 'react'
import {
  HeaderEstimation,
  HeaderLogo,
  HeaderNav,
  HeaderWrapper,
} from './Header.styled'
import { Link } from 'react-scroll'
import NextImage from 'next/image'
import BaseText from '../common/BaseText'
import { CustomThemeContext } from '../../pages/_app'

export type HeaderProps = {
  whiteHeader: boolean
}

const Header: FC<HeaderProps> = ({ whiteHeader }) => {
  const { toggleTheme, isDark } = useContext(CustomThemeContext)

  return (
    <HeaderWrapper whiteHeader={whiteHeader}>
      <div className="container-md">
        <HeaderLogo to="section-hero" spy={true} smooth={true} offset={0}>
          <NextImage
            src="/logo.jpg"
            width={173}
            height={56}
            priority
            quality={100}
          />
        </HeaderLogo>

        <HeaderNav className="header-nav">
          <Link
            activeClass="active"
            to="section-services"
            spy={true}
            smooth={true}
            offset={-88}
          >
            <BaseText fw={600}>Services</BaseText>
          </Link>
          <Link
            activeClass="active"
            to="section-expertise"
            spy={true}
            smooth={true}
            offset={-88}
          >
            <BaseText fw={600}>Expertise</BaseText>
          </Link>
          <Link
            activeClass="active"
            to="section-portfolio"
            spy={true}
            smooth={true}
            offset={-88}
          >
            <BaseText fw={600}>Portfolio</BaseText>
          </Link>
        </HeaderNav>
        <HeaderEstimation className="header-estimation">
          <Link
            activeClass="active"
            to="section-contact"
            spy={true}
            smooth={true}
            offset={-88}
          >
            <BaseText fw={700}>Contact with us</BaseText>
          </Link>
        </HeaderEstimation>
        
        <div className="theme-mode" onClick={toggleTheme}>
          {isDark ? (
            <NextImage
              src={
                whiteHeader
                  ? `/static/icons/dark-colored.svg`
                  : `/static/icons/dark.svg`
              }
              width={48}
              height={48}
            />
          ) : (
            <NextImage
              src={
                whiteHeader
                  ? `/static/icons/light-colored.svg`
                  : `/static/icons/light.svg`
              }
              width={48}
              height={48}
            />
          )}
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
