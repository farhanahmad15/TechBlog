import {withAuth} from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req){
     console.log(req.nextauth.token)   
    }
)

export const config = {matcher : ['/account/:path*']}