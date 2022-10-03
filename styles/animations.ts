import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
}
