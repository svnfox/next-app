'use client'

export default function Loading() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#111',
            color: '#0ef',
            fontSize: '1.5rem',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <div style={{
                width: '3rem',
                height: '3rem',
                border: '4px solid #0ef',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }} />
            <p>加载中，请稍候...</p>

            <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg) }
          to { transform: rotate(360deg) }
        }
      `}</style>
        </div>
    )
}
