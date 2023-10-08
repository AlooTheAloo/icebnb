import { NextRequest, NextResponse } from "next/server"
import { getUserByID } from "../../../../lib/db/users";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug;
    console.log("GET request! with param " + slug);

    const resp = await getUserByID(slug); 
    return NextResponse.json({
        user : resp 
    })
  }

  export async function POST(request:NextRequest) {
    return NextResponse.json(
        { error: "Not allowed" },
        {
          status: 405
        }
      );
  }
