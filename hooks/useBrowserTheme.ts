import { useCallback, useEffect, useState } from 'react'

export const useBrowserTheme = () => {
  const hasWindow = typeof window !== 'undefined'

  const getMatchMedia = useCallback(() => {
    if (hasWindow) return window.matchMedia('(prefers-color-scheme: dark)')
  }, [hasWindow])

  const [isDarkTheme, setIsDarkTheme] = useState(
    hasWindow ? getMatchMedia()?.matches : false
  )

  const themeListener = (e: {
    matches:
      | boolean
      | ((prevState: boolean | undefined) => boolean | undefined)
      | undefined
  }) => setIsDarkTheme(e.matches)

  useEffect(() => {
    const mq = getMatchMedia()
    mq?.addEventListener('change', themeListener)
    return () => mq?.addEventListener('change', themeListener)
  }, [getMatchMedia])

  return isDarkTheme
}
