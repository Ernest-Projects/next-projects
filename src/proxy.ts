import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    console.log("request: ", request);
    const token = request.cookies.get('token')?.value;

    if(!token && request.nextUrl.pathname.startsWith("/profile/your-username")) { // * if we in profile and token doesn't exsist
        return NextResponse.redirect(new URL('/', request.url));
    }

if (token) {
    console.log("Hey! Seems token working!");
}
    return NextResponse.next(); 
}