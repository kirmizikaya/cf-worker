/*import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const deviceType = url.searchParams.get('_cf_deviceType') || 'desktop';

  const response = NextResponse.next();
  response.headers.set('x-device-type', deviceType);

  if (url.searchParams.has('_cf_deviceType')) {
    url.searchParams.delete('_cf_deviceType');
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ['/', '/(.*)'],
};
*/

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const device = url.searchParams.get('device');

  if (device) {
    // URL'den `device` parametresini kaldır
    url.searchParams.delete('device');

    // Cihaz bilgisini header olarak ilet
    const res = NextResponse.rewrite(url);
    res.headers.set('x-device', device);

    return res;
  }

  return NextResponse.next();
}

