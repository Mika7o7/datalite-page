import { useState, useEffect } from 'react'

type SSRRect = {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
  x: number
  y: number
}
const EmptySSRRect: SSRRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
}

export const useScroll = () => {
  //   const [lastScrollTop, setLastScrollTop] = useState<number>(0)
  const [bodyOffset, setBodyOffset] = useState<DOMRect | SSRRect>(
    typeof window === 'undefined' || !window.document
      ? EmptySSRRect
      : document.body.getBoundingClientRect()
  )
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top)
  //   const [scrollDirection, setScrollDirection] = useState<
  //     'down' | 'up' | undefined
  //   >()

  const listener = () => {
    setBodyOffset(
      typeof window === 'undefined' || !window.document
        ? EmptySSRRect
        : document.body.getBoundingClientRect()
    )
    setScrollY(-bodyOffset.top)
    // setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up')
    // setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return {
    scrollY,
    // scrollDirection,
  }
}
