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

  export async function POST(request:Request) {
    return NextResponse.json(
        { error: "Method not allowed" },
        {
          status: 405
        }
      );
  }