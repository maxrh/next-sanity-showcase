import { NextResponse } from 'next/server'

export function middleware(request) {
    const pathname = new URL(request.url).pathname;

    // Store current request url in a custom header, only if it's not an asset request
    if (!request.url.includes('_next/static/')) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-url', pathname);

        return NextResponse.next({
            request: {
                // Apply new request headers
                headers: requestHeaders,
            }
        });
    }

    // Continue the request without modifying headers for other cases
    return NextResponse.next();
}