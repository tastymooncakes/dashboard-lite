import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("auth_token");

    if (token && req.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/main/dashboard", req.url));
    }

    if (!token && req.nextUrl.pathname === "/main/dashboard") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/main/dashboard/:path*"]
};