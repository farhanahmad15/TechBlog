'use server'
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { FormEvent } from "react";


export async function signup(prevState:any,formData: FormData){
    try {
       
        return {message:'Successfully signed in.'}
    } catch (error) {
        return{message: `${error}`}
    }
}