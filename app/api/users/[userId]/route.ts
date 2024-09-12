import { NextResponse } from "next/server"

const data = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Fox"
    }
]

export async function GET(request: Request, context: any) {
    const { params } = context

    const user = data.filter(x => params.userId === x.id.toString())

    return NextResponse.json({
        user
    })

}