import { type NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ["/admin", "/admin/portfolio", "/admin/services", "/admin/users"]
const authRoutes = ["/login", "/signup"]
const publicRoutes = ["/", "/services", "/about", "/portfolio", "/career", "/contact"]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const sessionToken = req.cookies.get("sessionToken")?.value

  // Allow all public routes
  if(publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

   if (authRoutes.includes(pathname) && sessionToken) {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  // If user is not logged in and tries to access protected routes, redirect to login
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
  }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}