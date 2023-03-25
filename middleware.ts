import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
  const cok = request.cookies.get("_auth");

  if (request.nextUrl.pathname.startsWith("/profile")) {
    return cok ? NextResponse.next() : NextResponse.rewrite(new URL("/404", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}