// GSAP helpers for complex / timeline animations
// Import gsap in the component: import gsap from 'gsap'

import gsap from 'gsap'

/** Fade in elements staggered — useful for list reveals */
export function staggerIn(targets: string | Element[], stagger = 0.06) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.35, stagger, ease: 'power2.out' }
  )
}

/** Pulse scale — useful for biometric / passkey confirmation */
export function pulseScale(target: string | Element) {
  return gsap.timeline()
    .to(target, { scale: 1.08, duration: 0.15, ease: 'power1.out' })
    .to(target, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.4)' })
}

/** Shake — error / failed auth feedback */
export function shake(target: string | Element) {
  const keyframes = { x: [-8, 8, -6, 6, -3, 3, 0] as number[] }
  return gsap.to(target, {
    keyframes,
    duration: 0.4,
    ease: 'none',
  })
}
