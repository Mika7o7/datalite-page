import React, { createContext, useCallback, useState } from 'react'
import { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { fadeIn } from '../styles/animations'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme'
import { GlobalStyles } from '../styles/globalStyles'

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

export const CustomThemeContext = createContext<{
  toggleTheme?: () => void
  isDark?: boolean
}>({})

export default function App({ Component, pageProps, router }: AppProps) {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.DARK)

  const toggleTheme = useCallback(() => {
    setTheme((prev) =>
      prev === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK
    )
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CustomThemeContext.Provider
        value={{ toggleTheme, isDark: theme === ThemeType.DARK }}
      >
        <GlobalStyles />
        <motion.div
          key={router.route}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Component {...pageProps} />
        </motion.div>
      </CustomThemeContext.Provider>
    </ThemeProvider>
  )
}
