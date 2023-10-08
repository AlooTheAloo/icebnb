import { NextRequest, NextResponse } from "next/server"
import { UserModel, createUserByUsername } from "../../../lib/db/users";

export async function GET(
request: Request,
{ params }: { params: { slug: string } }
) {
return NextResponse.json(
    { error: "Not allowed" },
    {
        status: 405
    }
);
}

export async function POST(request:Request) {    
    const model:UserModel = await request.json().catch();
    return NextResponse.json(
        {
            userID: await createUserByUsername(model.username) 
        }
    );
}