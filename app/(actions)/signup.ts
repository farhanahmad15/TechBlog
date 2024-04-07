'use server'
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { FormEvent } from "react";


export async function signup(prevState:any,formData: FormData){
    try {
        const newuser = await prisma.user.upsert({
            where:{uid: formData.get('email')!.toString()},
            create:{
                email: formData.get('email')!.toString(),
                password: formData.get('password')!.toString(),
                name: formData.get('firstName')!.toString()+(formData.get('lastName') ? " "+formData.get('lastName'):""),
                uid: formData.get('email')?.toString() || "email",
                provider: "Credentials"

            },
            update:{}
         })
         redirect('/signin')
        return {message:'Successfully signed in.'}
    } catch (error) {
        return{message: `${error}`}
    }
}