import { NextResponse } from "next/server";

export async function GET(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            return NextResponse.json({ message: "Users not found" }, { status: 404 });
        }

        const users = await response.json();
        return NextResponse.json(users);

    }
    catch(error){
        return NextResponse.json({
            message:"Something went wrong!!!"
        },{
            status:500
        });
    }
}