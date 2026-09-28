import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

interface IOSNavBarProps {
  title?: string
  showBack?: boolean
  backLabel?: string
  rightAction?: React.ReactNode
}

export default function IOSNavBar({
  title,
  showBack = false,
  backLabel = 'Back',
  rightAction,
}: IOSNavBarProps) {
  const navigate = useNavigate()

  return (
    <div
      style={{
        paddingTop: 'calc(var(--safe-top) + 8px)',
        background: 'var(--ios-surface)',
        borderBottom: '0.5px solid var(--ios-separator)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 8px 12px',
          minHeight: 44,
        }}
      >
        {/* Left */}
        <div style={{ minWidth: 80 }}>
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                color: 'var(--ios-blue)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 17,
                padding: '4px 8px',
              }}
            >
              <ChevronLeftIcon style={{ width: 20, height: 20 }} />
              {backLabel}
            </button>
          )}
        </div>

        {/* Title */}
        {title && (
          <span
            style={{
              fontFamily: 'var(--ios-font)',
              fontSize: 17,
              fontWeight: 600,
              color: 'var(--ios-label)',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {title}
          </span>
        )}

        {/* Right */}
        <div style={{ minWidth: 80, display: 'flex', justifyContent: 'flex-end' }}>
          {rightAction}
        </div>
      </div>
    </div>
  )
}
