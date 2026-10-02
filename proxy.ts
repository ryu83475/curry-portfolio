import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 公開する静的ファイル・Next.jsの内部リソースは認証しない
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/curryshop/") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const auth = request.headers.get("authorization");

  // if (auth) {
  //   const [username, password] = atob(auth.split(" ")[1]).split(":");

  //   if (
  //     username === process.env.AUTH_USER &&
  //     password === process.env.AUTH_PASSWORD
  //   ) {
  //     return NextResponse.next();
  //   }
  // }

  // return new NextResponse("Authentication required", {
  //   status: 401,
  //   headers: {
  //     "WWW-Authenticate": 'Basic realm="Secure Area"',
  //   },
  // });
}
