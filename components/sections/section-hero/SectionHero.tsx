import {
  HeroBackground,
  HeroContent,
  SectionHeroWrapper,
} from './SectionHero.styled'
import NextImage from 'next/image'
import BaseTitle from '../../common/BaseTitle'
import BaseText from '../../common/BaseText'
import { Link } from 'react-scroll'
import { useContext } from 'react'
import { CustomThemeContext } from '../../../pages/_app'

const SectionHero = () => {
  const { isDark } = useContext(CustomThemeContext)

  return (
    <SectionHeroWrapper id="section-hero">
      <NextImage
        src="/static/images/hero-back.jpg"
        layout="fill"
        priority
        objectFit="cover"
        quality={100}
      />
      <HeroBackground isDark={isDark} />

      <div className="container-md">
        <HeroContent>
          <BaseTitle type="mode1" className="hero-title">
            Outsource Your Development
          </BaseTitle>
          <BaseText className="hero-desc">
            Outsource Your Development at Affordable Prices to Senior Engineers
            in Armenia
          </BaseText>
          <Link
            className="hero-estimation"
            activeClass="active"
            to="section-contact"
            spy={true}
            smooth={true}
            offset={-88}
          >
            <BaseText type="mode1" fw={700}>
              Free Estimation
            </BaseText>
          </Link>
        </HeroContent>
      </div>
    </SectionHeroWrapper>
  )
}

export default SectionHero
