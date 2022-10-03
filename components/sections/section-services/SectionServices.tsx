import BaseText from '../../common/BaseText'
import BaseTitle from '../../common/BaseTitle'
import {
  SectionServicesContent,
  SectionServicesHead,
  SectionServicesWrapper,
} from './SectionServices.styled'
import servicesData from '../../../data/services.json'
import NextImage from 'next/image'
import { Link } from 'react-scroll'
import { useContext } from 'react'
import { CustomThemeContext } from '../../../pages/_app'
import ContactUs from '../../contactComponent/ContactComponent'

const SectionServices = () => {
  const { isDark } = useContext(CustomThemeContext)

  return (
    <SectionServicesWrapper className="section-services" isDark={isDark}>
      <div className="container-lg">
        <div className="background">
          <NextImage
            src="/static/images/services-back.png"
            width={1908}
            height={614}
            quality={100}
          />
        </div>
        <div className="container-md">
          <SectionServicesHead isDark={isDark}>
            <BaseTitle type="mode2" className="services-title">
            Our Expertise 
            </BaseTitle>
            <BaseText className="services-desc">
            By partnering with Datalite you will receive professional services
            in the following technologies.
            </BaseText>
          </SectionServicesHead>
          <SectionServicesContent isDark={isDark}>
            {servicesData.map((service, idx) => (
              <div key={idx}>
                <NextImage
                  src={service.icon}
                  width={48}
                  height={48}
                  quality={100}
                />
                <BaseText fw={600}>{service.title}</BaseText>
              </div>
            ))}
          </SectionServicesContent>
          <ContactUs />
         
        </div>
      </div>
    </SectionServicesWrapper>
  )
}

export default SectionServices
