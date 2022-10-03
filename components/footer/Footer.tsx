import React from 'react'
import BaseText from '../common/BaseText'
import {
  FooterAlt,
  FooterLogo,
  FooterMain,
  FooterNav,
  FooterScrollTop,
  FooterWrapper,
} from './Footer.styled'
import NextImage from 'next/image'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMain>
        <div className="container-md">
          <FooterLogo>
            <Link to="section-hero" spy={true} smooth={true} offset={0}>
              <NextImage
                src="/logo.jpg"
                width={173}
                height={56}
                priority
                quality={100}
              />
            </Link>
            <BaseText type="mode2">
              Outsource Your Development at Affordable Prices to Senior
              Engineers in Armenia
            </BaseText>
          </FooterLogo>

          <FooterNav>
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
          </FooterNav>
          <FooterScrollTop
            to="section-hero"
            spy={true}
            smooth={true}
            offset={0}
          >
            <BaseText type="mode1" fw={700}>
              Scroll to top
            </BaseText>

            <NextImage
              src="/static/icons/scroll-to-top.svg"
              width={20}
              height={20}
            />
          </FooterScrollTop>
        </div>
      </FooterMain>

      <FooterAlt>
        <BaseText type="mode2" fw={600}>
          © 2022 Datalite LLC . All rights reserved
        </BaseText>
      </FooterAlt>
    </FooterWrapper>
  )
}

export default Footer
