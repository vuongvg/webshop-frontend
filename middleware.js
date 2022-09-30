import { NextResponse } from 'next/server';

export function middleware(req) {
    if (req.cookies.get('login')) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/login', req.url));
    }
}
 
export const config = { 
    matcher: [
    '/user-dashboard/:path*',
    '/wishlist/:path*',
    '/cart/:path*',
    '/checkout/:path*'
    ],   
  }  
