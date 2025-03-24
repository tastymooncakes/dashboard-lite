import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.json({message: "Logout successfully!"});

    response.cookies.set("auth_token" , "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(0),
    });

    return response;
}