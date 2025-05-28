'use client'  // error.tsx 必须是客户端组件

import { useEffect } from 'react'

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('Caught an error:', error)
    }, [error])

    return (
        <div style={{ padding: 20 }}>
            <h1>哎呀，页面出错了！</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>重试</button>
        </div>
    )
}
