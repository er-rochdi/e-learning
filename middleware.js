// middleware.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
    console.log('request.nextUrl');
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get('isAuthenticated');

  if (request.nextUrl.pathname.startsWith('/courses')) {
    if (!isAuthenticated || isAuthenticated.value !== 'true') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/courses/:path*', 
};