import { NextResponse } from "next/server";
import { deletePost } from "../../../lib/db/posts";

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

export interface buyJSONData{
    postID:string    
}

export async function POST(request:Request) {    
    const post:buyJSONData = await request.json().catch();
    return NextResponse.json(
        {
            ok : await deletePost(post.postID)
        }
    );
}