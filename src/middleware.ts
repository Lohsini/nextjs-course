import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  //   const pathname = request.nextUrl.pathname;

  // 導向別的網頁的功能 有兩種方式：1.純導向新網頁 2.需要登入token的頁面

  //   // Handle root path
  //   if (pathname === "/") {
  //     return NextResponse.redirect(new URL("/en", request.url));
  //   }

  //   const cookieStore = await cookies();
  //   const accessToken = cookieStore.get("token")?.value;
  //   if (!accessToken) {
  //     return NextResponse.redirect(new URL(`/en/verify`, request.url));
  //   }

  return NextResponse.next();
}

// 需要經過驗證的頁面打在這
export const config = {
  matcher: ["/"],
};
