import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        data: [
            {
                date: "today",
                amount: "12,313",
                rise: "2%"
            }
        ]
    })
}

export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data
    })
}