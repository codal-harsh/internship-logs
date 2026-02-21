import { NextResponse } from "next/server";

export default function proxy(request) {
  console.log("Hi");
  return;
}

export const config = {
  matcher: ["/app", "/profile/:path*","/settings", "/api"],
};
