import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const device = request.headers.get("x-device") || "unknown";

  const response = NextResponse.next();
  response.headers.set("x-device", device); // SSR tarafına taşı

  return response;
}
