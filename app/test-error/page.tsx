'use client'

import { useState } from 'react'

// app/about/page.tsx
import { Metadata } from 'next';

export default function Page() {
    const [explode, setExplode] = useState(false)
    if (explode) throw new Error('手动触发错误')

    return <button onClick={() => setExplode(true)}>点我触发错误</button>
}
