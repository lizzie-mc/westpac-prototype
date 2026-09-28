import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomSheet from '../components/BottomSheet'
import IOSButton from '../components/IOSButton'
import IOSNavBar from '../components/IOSNavBar'
import { slideFromRight } from '../motion/transitions'

export default function Login() {
  const navigate = useNavigate()
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <motion.div {...slideFromRight} style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ios-surface)', position: 'relative' }}>
      <IOSNavBar title="Sign In" showBack backLabel="Back" />

      <div style={{ flex: 1, padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label style={{ fontFamily: 'var(--ios-font)', fontSize: 'var(--ios-text-footnote)', color: 'var(--ios-label-secondary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Customer ID
          </label>
          <input
            placeholder="Enter your Customer ID"
            style={{
              width: '100%',
              height: 44,
              background: 'var(--ios-surface-2)',
              border: '0.5px solid var(--ios-separator)',
              borderRadius: 'var(--ios-radius-input)',
              padding: '0 14px',
              fontFamily: 'var(--ios-font)',
              fontSize: 'var(--ios-text-body)',
              color: 'var(--ios-label)',
              marginTop: 6,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label style={{ fontFamily: 'var(--ios-font)', fontSize: 'var(--ios-text-footnote)', color: 'var(--ios-label-secondary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              height: 44,
              background: 'var(--ios-surface-2)',
              border: '0.5px solid var(--ios-separator)',
              borderRadius: 'var(--ios-radius-input)',
              padding: '0 14px',
              fontFamily: 'var(--ios-font)',
              fontSize: 'var(--ios-text-body)',
              color: 'var(--ios-label)',
              marginTop: 6,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <IOSButton onClick={() => navigate('/dashboard')} fullWidth>
          Log in
        </IOSButton>

        <IOSButton onClick={() => setSheetOpen(true)} variant="ghost" fullWidth>
          Forgot password?
        </IOSButton>
      </div>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Reset Password" snapHeight={0.5}>
        <p style={{ fontFamily: 'var(--ios-font)', color: 'var(--ios-label-secondary)', fontSize: 'var(--ios-text-body)' }}>
          Enter your registered email address and we'll send you a reset link.
        </p>
        <input
          placeholder="Email address"
          style={{
            width: '100%',
            height: 44,
            background: 'var(--ios-surface-2)',
            border: '0.5px solid var(--ios-separator)',
            borderRadius: 'var(--ios-radius-input)',
            padding: '0 14px',
            fontFamily: 'var(--ios-font)',
            fontSize: 'var(--ios-text-body)',
            outline: 'none',
            boxSizing: 'border-box',
            marginBottom: 16,
          }}
        />
        <IOSButton onClick={() => setSheetOpen(false)} fullWidth>
          Send reset link
        </IOSButton>
      </BottomSheet>
    </motion.div>
  )
}
