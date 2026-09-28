// Framer Motion page transition variants — iOS push/slide style

import { iosSpring } from './springs'

export const slideFromRight = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: iosSpring },
  exit: { x: '-30%', opacity: 0, transition: { duration: 0.2 } },
}

export const slideFromBottom = {
  initial: { y: '100%' },
  animate: { y: 0, transition: iosSpring },
  exit: { y: '100%', transition: { duration: 0.25 } },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

export const scaleUp = {
  initial: { scale: 0.92, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: iosSpring },
  exit: { scale: 0.92, opacity: 0, transition: { duration: 0.15 } },
}
