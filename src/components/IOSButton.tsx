import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'destructive' | 'ghost'
type Size = 'lg' | 'md' | 'sm'

interface IOSButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: Variant
  size?: Size
  disabled?: boolean
  fullWidth?: boolean
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'var(--brand-red)',
    color: '#fff',
  },
  secondary: {
    background: 'var(--ios-surface-2)',
    color: 'var(--ios-blue)',
  },
  destructive: {
    background: 'var(--ios-destructive)',
    color: '#fff',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ios-blue)',
  },
}

const sizeStyles: Record<Size, React.CSSProperties> = {
  lg: { height: 54, fontSize: 17, padding: '0 24px', borderRadius: 'var(--ios-radius-button)' },
  md: { height: 44, fontSize: 16, padding: '0 20px', borderRadius: 'var(--ios-radius-button)' },
  sm: { height: 34, fontSize: 14, padding: '0 14px', borderRadius: 'var(--ios-radius-full)' },
}

export default function IOSButton({
  children,
  onClick,
  variant = 'primary',
  size = 'lg',
  disabled = false,
  fullWidth = false,
}: IOSButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.97, opacity: disabled ? 1 : 0.85 }}
      transition={{ duration: 0.1 }}
      onClick={!disabled ? onClick : undefined}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        fontFamily: 'var(--ios-font)',
        fontWeight: 600,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        width: fullWidth ? '100%' : 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: -0.3,
      }}
    >
      {children}
    </motion.button>
  )
}
