// middleware-modules/auth.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function authMiddleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const token = request.cookies.get('token')?.value
        if (!token) {
            const url = new URL('/login', request.url)
            return NextResponse.redirect(url)
        }
    }
    return null
}
