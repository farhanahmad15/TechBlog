import {withAuth} from 'next-auth/middleware'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req){
    //  console.log(req.nextauth.token?.role)   
    //  console.log(req.nextauth.token?.provider)   
    //  console.log(req.nextauth.token?.id) 
    //  console.log(req.nextUrl.pathname); 
    //  console.log(req.url)
     if(req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'Admin'){
        return NextResponse.rewrite(new URL('/error?error=You+do+not+have+the+required+permissions', req.url))
     }
     
    }
)

export const config = {matcher : ['/account/:path*', '/admin']}