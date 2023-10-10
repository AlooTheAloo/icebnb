import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import { createPost } from "../../../lib/db/posts";

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
  const res = await createPost(formData);
  return NextResponse.json(
    {
      ok: res
    }
  );
}
