import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const authToken = req.cookies.get('auth_token');
        if (!authToken) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        const response = await fetch('https://dia-backend.numbersprotocol.io/api/v3/auth/users/profile/', {
            method: 'GET',
            headers: {
                'Authorization': `token ${authToken.value}`,
            }
        });

        if (!response.ok) {
            return NextResponse.json({ message: 'Could not get user profile'}, { status: 500});
        }
        const userProfile = await response.json();
        return NextResponse.json(userProfile);
    } catch (error) {
        return NextResponse.json({ message: 'Error'} , {status: 500});
    }
}