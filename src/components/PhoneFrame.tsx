// iPhone 15 Pro device chrome — wraps each screen for client demos
// Set SHOW_FRAME=false to go full-screen

interface PhoneFrameProps {
  children: React.ReactNode
}

const SHOW_FRAME = true

export default function PhoneFrame({ children }: PhoneFrameProps) {
  if (!SHOW_FRAME) {
    return <>{children}</>
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        style={{
          width: 393,
          height: 852,
          borderRadius: 50,
          background: '#1a1a1a',
          boxShadow: '0 0 0 2px #3a3a3a, 0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.08)',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 126,
            height: 37,
            background: '#000',
            borderRadius: 20,
            zIndex: 100,
          }}
        />

        {/* Screen area */}
        <div
          style={{
            position: 'absolute',
            inset: 4,
            borderRadius: 46,
            overflow: 'hidden',
            background: 'var(--ios-bg, #f2f2f7)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
