import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for the /fund section
  if (request.nextUrl.pathname.startsWith('/fund')) {
    // Check for authentication
    const authHeader = request.headers.get('authorization');
    
    // Simple basic auth check
    if (!authHeader || !isValidAuth(authHeader)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="American Apex Search Fund"',
        },
      });
    }
  }

  return NextResponse.next();
}

function isValidAuth(authHeader: string): boolean {
  try {
    const [type, credentials] = authHeader.split(' ');
    
    if (type !== 'Basic') {
      return false;
    }
    
    const decoded = Buffer.from(credentials, 'base64').toString();
    const [username, password] = decoded.split(':');
    
    // Get current time in HHMM format (24hr)
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTimePassword = hours + minutes;
    
    // Username can be anything, password must match current time
    return password === currentTimePassword;
  } catch {
    return false;
  }
}

export const config = {
  matcher: '/fund/:path*',
};