import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useScroll } from '../../hooks/useScroll'
import Footer from '../footer/Footer'
import Header from '../header/Header'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollY } = useScroll()
  const [whiteHeader, setWhiteHeader] = useState(false)

  useEffect(() => {
    if (scrollY > 500) {
      setWhiteHeader(true)
    } else {
      setWhiteHeader(false)
    }
  }, [scrollY])

  return (
    <LayoutWrapper>
      <Header whiteHeader={whiteHeader} />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  .container-lg {
    width: 100%;
    max-width: 1920px;
  }
  .container-md {
    width: 100%;
    max-width: 1352px;
    padding: 0 32px;
  }
`

export default Layout
