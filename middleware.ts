import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Block development routes in production
  if (process.env.NODE_ENV === 'production') {
    if (pathname === '/design-system' || pathname === '/motion-lab') {
      return NextResponse.rewrite(new URL('/not-found', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/design-system', '/motion-lab'],
};
