import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import IOSButton from '../components/IOSButton'
import { fadeIn } from '../motion/transitions'

export default function Home() {
  const navigate = useNavigate()

  return (
    <motion.div {...fadeIn} style={{
      height: '100%',
      background: 'var(--ios-bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'calc(var(--safe-top) + 40px) 32px calc(var(--safe-bottom) + 40px)',
    }}>
      {/* Logo area */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 72,
          height: 72,
          background: 'var(--brand-red)',
          borderRadius: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          fontSize: 36,
        }}>
          🏦
        </div>
        <h1 style={{
          fontFamily: 'var(--ios-font)',
          fontSize: 'var(--ios-text-title1)',
          fontWeight: 700,
          color: 'var(--ios-label)',
          margin: 0,
        }}>
          Westpac
        </h1>
      </div>

      {/* CTA */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <IOSButton onClick={() => navigate('/login')} fullWidth>
          Log in
        </IOSButton>
        <IOSButton onClick={() => navigate('/passkey')} variant="secondary" fullWidth>
          Sign in with Passkey
        </IOSButton>
      </div>
    </motion.div>
  )
}
