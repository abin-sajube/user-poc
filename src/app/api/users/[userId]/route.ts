import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userId: string }> } 
) {
    try {
        const { userId } = await params; 

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const user = await response.json();
        return NextResponse.json(user);

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!!!" }, { status: 500 });
    }
}
