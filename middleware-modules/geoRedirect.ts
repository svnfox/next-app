// middleware-modules/geoRedirect.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function geoRedirectMiddleware(request: NextRequest) {
    // 假设基于 IP 做重定向
    // ...
    return null
}
