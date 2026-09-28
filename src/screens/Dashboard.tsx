import { motion } from 'framer-motion'
import { useState } from 'react'
import BottomSheet from '../components/BottomSheet'
import IOSButton from '../components/IOSButton'
import IOSNavBar from '../components/IOSNavBar'
import { fadeIn } from '../motion/transitions'

const accounts = [
  { name: 'Everyday Account', bsb: '032-089', number: '••• 4521', balance: '$4,210.50' },
  { name: 'Savings Account', bsb: '032-089', number: '••• 7832', balance: '$18,430.00' },
]

export default function Dashboard() {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <motion.div {...fadeIn} style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ios-bg)', position: 'relative' }}>
      <IOSNavBar title="Accounts" />

      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {accounts.map((acct) => (
          <motion.div
            key={acct.number}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSheetOpen(true)}
            style={{
              background: 'var(--ios-surface)',
              borderRadius: 'var(--ios-radius-card)',
              padding: '16px',
              cursor: 'pointer',
              boxShadow: 'var(--ios-shadow-card)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontFamily: 'var(--ios-font)', fontSize: 'var(--ios-text-headline)', fontWeight: 600, color: 'var(--ios-label)', margin: '0 0 4px' }}>
                  {acct.name}
                </p>
                <p style={{ fontFamily: 'var(--ios-font)', fontSize: 'var(--ios-text-footnote)', color: 'var(--ios-label-secondary)', margin: 0 }}>
                  BSB {acct.bsb} · {acct.number}
                </p>
              </div>
              <p style={{ fontFamily: 'var(--ios-font)', fontSize: 'var(--ios-text-title3)', fontWeight: 700, color: 'var(--ios-label)', margin: 0 }}>
                {acct.balance}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Quick Actions" snapHeight={0.45}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <IOSButton variant="secondary" fullWidth>Transfer Money</IOSButton>
          <IOSButton variant="secondary" fullWidth>Pay Anyone</IOSButton>
          <IOSButton variant="secondary" fullWidth>View Statements</IOSButton>
          <IOSButton variant="destructive" fullWidth onClick={() => setSheetOpen(false)}>Cancel</IOSButton>
        </div>
      </BottomSheet>
    </motion.div>
  )
}
