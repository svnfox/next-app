// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { authMiddleware } from './middleware-modules/auth'
import { geoRedirectMiddleware } from './middleware-modules/geoRedirect'

export function middleware(request: NextRequest) {
    // 依次调用不同中间件函数，依赖返回值判断
    const authResult = authMiddleware(request)
    if (authResult) return authResult

    const geoResult = geoRedirectMiddleware(request)
    if (geoResult) return geoResult

    return NextResponse.next()
}
