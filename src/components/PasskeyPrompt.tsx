// Simulates iOS Face ID / passkey system prompt
// Appears as a modal overlay — not a bottom sheet

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { pulseScale } from '../motion/gsap'
import IOSButton from './IOSButton'

type PasskeyState = 'idle' | 'scanning' | 'success' | 'error'

interface PasskeyPromptProps {
  open: boolean
  onSuccess: () => void
  onCancel: () => void
  state?: PasskeyState
  accountName?: string
}

export default function PasskeyPrompt({
  open,
  onSuccess,
  onCancel,
  state = 'idle',
  accountName = 'Lizzie Teo',
}: PasskeyPromptProps) {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state === 'success' && iconRef.current) {
      pulseScale(iconRef.current)
    }
  }, [state])

  const iconColor =
    state === 'success' ? 'var(--ios-green)' :
    state === 'error' ? 'var(--ios-red)' :
    'var(--ios-blue)'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="passkey-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'flex-end',
            padding: '0 0 var(--safe-bottom)',
          }}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 380, damping: 42 } }}
            exit={{ y: 60, opacity: 0 }}
            style={{
              width: '100%',
              background: 'var(--ios-surface)',
              borderRadius: '16px 16px 0 0',
              padding: '24px 24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {/* Face ID icon */}
            <div ref={iconRef} style={{ fontSize: 48, lineHeight: 1 }}>
              {state === 'success' ? '✅' : state === 'error' ? '❌' : '🔐'}
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--ios-font)',
                fontSize: 'var(--ios-text-headline)',
                fontWeight: 600,
                color: 'var(--ios-label)',
                margin: '0 0 4px',
              }}>
                Sign in with Passkey
              </p>
              <p style={{
                fontFamily: 'var(--ios-font)',
                fontSize: 'var(--ios-text-subhead)',
                color: 'var(--ios-label-secondary)',
                margin: 0,
              }}>
                {accountName}
              </p>
            </div>

            {state === 'scanning' && (
              <p style={{
                fontFamily: 'var(--ios-font)',
                fontSize: 'var(--ios-text-subhead)',
                color: iconColor,
                margin: 0,
              }}>
                Scanning...
              </p>
            )}

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              <IOSButton onClick={onSuccess} fullWidth>
                {state === 'scanning' ? 'Authenticating…' : 'Use Face ID'}
              </IOSButton>
              <IOSButton onClick={onCancel} variant="ghost" fullWidth>
                Cancel
              </IOSButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
