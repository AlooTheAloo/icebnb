import { NextRequest, NextResponse } from "next/server";
import { modifyPost } from "../../../lib/db/posts";

export async function GET(request:NextRequest) {
    return NextResponse.json(
        { error: "Not allowed" },
        {
          status: 405
        }
    );
}
export async function POST(request:Request) {
  const formData = (await request.formData())
  const res = await modifyPost(formData);
  return NextResponse.json(
    {
      ok: res
    }
  );
}
