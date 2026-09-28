import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IOSButton from '../components/IOSButton'
import IOSNavBar from '../components/IOSNavBar'
import PasskeyPrompt from '../components/PasskeyPrompt'
import { slideFromRight } from '../motion/transitions'

export default function Passkey() {
  const navigate = useNavigate()
  const [promptOpen, setPromptOpen] = useState(false)

  return (
    <motion.div {...slideFromRight} style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ios-surface)', position: 'relative' }}>
      <IOSNavBar title="Passkey" showBack />

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        gap: 24,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 72 }}>🔐</div>

        <div>
          <h2 style={{
            fontFamily: 'var(--ios-font)',
            fontSize: 'var(--ios-text-title2)',
            fontWeight: 700,
            color: 'var(--ios-label)',
            margin: '0 0 8px',
          }}>
            Sign in with Passkey
          </h2>
          <p style={{
            fontFamily: 'var(--ios-font)',
            fontSize: 'var(--ios-text-body)',
            color: 'var(--ios-label-secondary)',
            margin: 0,
          }}>
            Use Face ID or Touch ID to sign in securely — no password needed.
          </p>
        </div>

        <IOSButton onClick={() => setPromptOpen(true)} fullWidth>
          Continue with Face ID
        </IOSButton>
      </div>

      <PasskeyPrompt
        open={promptOpen}
        onSuccess={() => { setPromptOpen(false); navigate('/dashboard') }}
        onCancel={() => setPromptOpen(false)}
      />
    </motion.div>
  )
}
