import {withAuth} from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req){
        console.log('withaout')
        console.log(req)
    }
)

export const config = {matcher : ['/account']}