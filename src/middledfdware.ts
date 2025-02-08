// /* eslint-disable @typescript-eslint/no-explicit-any */
// // import { NextRequest, NextResponse } from "next/server";
// // import { getTokenFromLocalStorage } from "./utils/localStorage";
// // import { authKey } from "./constant/authKey";
// // import { jwtDecode } from "jwt-decode";

// // const protectedRoutes = ["/tasks"];
// // const publicRoutes = ["/login", "/signup", "/"];

// export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   // const path = req.nextUrl.pathname;
//   // const isProtectedRoute = protectedRoutes.includes(path);
//   // const isPublicRoute = publicRoutes.includes(path);
//   // 3. Decrypt the session from the cookie
//   // const cookie = (await cookies()).get('session')?.value
//   // const session = await decrypt(cookie)
//   //   let decodeData;
//   //   if (accessToken) {
//   //     decodeData = jwtDecode(accessToken) as any;
//   //   }
//   // 4. Redirect to /login if the user is not authenticated
//   //   if (isProtectedRoute) {
//   //     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   //   }

//   // 5. Redirect to /dashboard if the user is authenticated
//   //   if (isPublicRoute && !req.nextUrl.pathname.startsWith("/tasks")) {
//   //     return NextResponse.redirect(new URL("/tasks", req.nextUrl));
//   //   }

//   return NextResponse.next();
// }

// // Routes Middleware should not run on
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
