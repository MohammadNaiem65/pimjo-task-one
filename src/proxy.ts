import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req: NextRequest) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const privateRoutes = ["/dashboard"];
  const authRoutes = ["/sign-in", "/sign-up"];

  //   Check if the user is trying to access a private route
  const isPrivate = privateRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );

  //   If user is not logged in & trying to access a private route → redirect to login
  if (!isLoggedIn && isPrivate) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Check if current path is auth-related
  const isAuthRoute = authRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );

  // Redirect authenticated users to visit auth related routes
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Otherwise allow access
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
