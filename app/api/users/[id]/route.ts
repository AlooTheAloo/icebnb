import { NextRequest, NextResponse } from "next/server";

type routeParams = { 
  id:string
}

// To handle a GET request to /api
export async function GET(req:NextRequest, { params }: { params:routeParams }) {
  // Do whatever you want
  return NextResponse.json({ message: "the id is " + params.id }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req:NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}