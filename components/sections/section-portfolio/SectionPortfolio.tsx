import BaseText from '../../common/BaseText'
import BaseTitle from '../../common/BaseTitle'
import {
  SectionPortfolioContent,
  SectionPortfolioHead,
  SectionPortfolioWrapper,
} from './SectionPortfolio.styled'
import portfolioData from '../../../data/portfolio.json'
import NextImage from 'next/image'
import { useContext } from 'react'
import { CustomThemeContext } from '../../../pages/_app'

const SectionPortfolio = () => {
  const { isDark } = useContext(CustomThemeContext)

  return (
    <SectionPortfolioWrapper id="section-portfolio" isDark={isDark}>
      <div className="container-md">
        <SectionPortfolioHead isDark={isDark}>
          <BaseTitle type="mode2" className="portfolio-title">
            Our Portfolio
          </BaseTitle>
          <BaseText className="portfolio-desc">
            By partnering with Datalite you will receive professional services
            in the following technologies.
          </BaseText>
        </SectionPortfolioHead>
        <SectionPortfolioContent isDark={isDark}>
          {portfolioData.map((item, idx) => (
            <div key={idx}>
              <NextImage
                src={item.image}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          ))}
        </SectionPortfolioContent>
      </div>
    </SectionPortfolioWrapper>
  )
}

export default SectionPortfolio
