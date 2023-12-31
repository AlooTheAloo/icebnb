import { NextRequest, NextResponse } from "next/server"
import { getUserIDByUsername } from "../../../../lib/db/users";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug;
    return NextResponse.json({
        user : await getUserIDByUsername(slug) 
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