import { NextResponse } from "next/server";

export default function middleWare(request){
    return NextResponse.redirect(new URL("/about", request.url))
}
export const config = {
    matcher : "/"
}














