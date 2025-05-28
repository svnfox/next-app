'use client'

import { useEffect } from 'react'

export default function error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error('捕获错误:', error)
    }, [error])

    return (
        <div>
            <h2>局部错误页面</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>重试</button>
        </div>
    )
}
