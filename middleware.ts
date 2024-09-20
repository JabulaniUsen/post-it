import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware(( auth, req ) => {
  if (isProtectedRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    // '/'
])
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)','/(api|trpc)(.*)',
  ],
};