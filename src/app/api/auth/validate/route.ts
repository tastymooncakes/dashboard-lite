import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const authToken = (await cookies()).get("auth_token")?.value;

    if (!authToken) {
        return NextResponse.json({message: "Not Authenticated"}, {status: 401});
    }

    return NextResponse.json({message: "Authenticated"}, {status: 200});
}