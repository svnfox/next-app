// app/global-error.tsx
'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <html>
        <body>
        <h2>Something went wrong globally!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
        </body>
        </html>
    )
}
