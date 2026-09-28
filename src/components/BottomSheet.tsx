// iOS-style bottom sheet with drag-to-dismiss
// Usage:
//   const [open, setOpen] = useState(false)
//   <BottomSheet open={open} onClose={() => setOpen(false)} title="Sheet Title">
//     ...content
//   </BottomSheet>

import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import { iosSheetSpring } from '../motion/springs'

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  /** Snap height as % of viewport — default 0.6 */
  snapHeight?: number
}

export default function BottomSheet({
  open,
  onClose,
  title,
  children,
  snapHeight = 0.6,
}: BottomSheetProps) {
  const y = useMotionValue(0)
  const opacity = useTransform(y, [0, 300], [1, 0])

  function handleDragEnd(_: unknown, info: { offset: { y: number }; velocity: { y: number } }) {
    if (info.offset.y > 80 || info.velocity.y > 400) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--sheet-backdrop)',
              zIndex: 40,
              backdropFilter: 'blur(2px)',
            }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            key="sheet"
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{
              y,
              opacity,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: `${snapHeight * 100}%`,
              background: 'var(--ios-surface)',
              borderRadius: 'var(--ios-radius-sheet) var(--ios-radius-sheet) 0 0',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--ios-shadow-sheet)',
              paddingBottom: 'var(--safe-bottom)',
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0, transition: iosSheetSpring }}
            exit={{ y: '100%', transition: { duration: 0.25 } }}
          >
            {/* Drag handle */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '12px 0 4px',
                cursor: 'grab',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 5,
                  borderRadius: 3,
                  background: 'var(--sheet-handle-color)',
                }}
              />
            </div>

            {/* Title */}
            {title && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '4px 16px 12px',
                  fontFamily: 'var(--ios-font)',
                  fontSize: 'var(--ios-text-headline)',
                  fontWeight: 600,
                  color: 'var(--ios-label)',
                  flexShrink: 0,
                  borderBottom: '0.5px solid var(--ios-separator)',
                }}
              >
                {title}
              </div>
            )}

            {/* Content */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch' as any,
                padding: '16px',
              }}
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
