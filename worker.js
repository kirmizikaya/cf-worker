export default {
  async fetch(request) {
    const url = new URL(request.url);
    const ua = request.headers.get('user-agent') || '';

    let deviceType = 'desktop';
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobileapp/i.test(ua)) {
      deviceType = 'mweb';
    }

    if (!url.searchParams.has('_cf_deviceType')) {
      url.searchParams.set('_cf_deviceType', deviceType);
      return Response.redirect(url.toString(), 307);
    }

    return fetch('https://cf-device-layout.vercel.app' + url.pathname + '?' + url.searchParams.toString(), {
      headers: request.headers
    });
  },
};
