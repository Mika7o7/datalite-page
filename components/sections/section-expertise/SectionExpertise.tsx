import { Link } from 'react-scroll'
import BaseText from '../../common/BaseText'
import BaseTitle from '../../common/BaseTitle'
import {
  SectionExpertiseContent,
  SectionExpertiseHead,
  SectionExpertiseWrapper,
} from './SectionExpertise.styled'
import expertiseData from '../../../data/expertise.json'
import NextImage from 'next/image'
import { useContext } from 'react'
import { CustomThemeContext } from '../../../pages/_app'

const SectionExpertise = () => {
  const { isDark } = useContext(CustomThemeContext)

  return (
    <SectionExpertiseWrapper id="section-expertise" isDark={isDark}>
      <div className="container-md">
        <SectionExpertiseHead isDark={isDark}>
          <BaseTitle type="mode2" className="expertise-title">
           Software Development Services
          </BaseTitle>
          <BaseText className="expertise-desc">
          We are a Software Development Company with more than 10 years of
              experience. We offer full-cycle web development services for
              business.
          </BaseText>
          
        </SectionExpertiseHead>
        <SectionExpertiseContent isDark={isDark}>
          {expertiseData.map((item, idx) => (
            <div key={idx}>
              <div className='block_name'>
                <p>name of contener</p>
              </div>
              <NextImage src={item.icon} width={48} height={48} quality={100} />
              <BaseText fw={600}>{item.title}</BaseText>
            </div>
          ))}
        </SectionExpertiseContent>
      </div>
    </SectionExpertiseWrapper>
  )
}

export default SectionExpertise
