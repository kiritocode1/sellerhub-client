import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


const isPublicRoute = createRouteMatcher(["/site(.*)", "/api/uploadthing(.*)", "/agency/sign-in(.*)","/agency/sign-up(.*)"] );
export default clerkMiddleware((auth, request) => {
	if (!isPublicRoute(request)) {
		auth().protect()
	}
	const session_id = auth().sessionId;
	// hack for afterauth
	if (session_id) {
		const url = request.nextUrl.clone();
		const searchParams = url.searchParams.toString();
		const hostname = request.headers;

		const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

		// if subdomain exists
		const subdomain = hostname.get("host")?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`).filter(Boolean)[0];

		if (subdomain) {
			return NextResponse.rewrite(new URL(`/${subdomain}${pathWithSearchParams}`));
		}

		if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
			return NextResponse.redirect(new URL("/agency/sign-in", request.url));
		}

		if (url.pathname === "/" || url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN) { 
			return NextResponse.rewrite(new URL("/site", request.url));
		}

		if (url.pathname.startsWith("/agency") || url.pathname.startsWith("/subaccount")) {
			return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, request.url));
		 }
	}
});



// export default clerkMiddleware();	

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
