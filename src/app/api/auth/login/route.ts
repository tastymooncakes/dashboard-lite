import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        const response = await fetch('https://dia-backend.numbersprotocol.io/api/v3/auth/token/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData?.message || 'Login Failed');
        }
        const data = await response.json();
        const { auth_token } = data;

        const res = NextResponse.json(data);
        res.cookies.set('auth_token', auth_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
        });

        return res;
    } catch (error) {
        console.error('Login Failed:', error)

        return NextResponse.json(
            {message: 'Login Failed'},
            { status: 500 }
        )
    }
}