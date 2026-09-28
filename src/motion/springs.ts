// iOS-calibrated spring configs for Framer Motion

export const iosSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
}

export const iosSpringGentle = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 32,
}

export const iosSpringBouncy = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
  mass: 0.8,
}

export const iosSheetSpring = {
  type: 'spring' as const,
  stiffness: 350,
  damping: 45,
}
