import { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import bcrypt from "bcrypt"
import dbConnect from "@/lib/dbConnect"
import { users } from "@/model/user";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text", placeholder: "example@gmail.com"},
                password: {label: "Password", type: "password", placeholder: "********"}
            },
            async authorize(credentials: any): Promise<any>{
                await dbConnect()
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            {email: credentials.identifier},
                            {password: credentials.identifier},
                        ]
                    })
                    if (!user) {
                        throw new Error("No user find with this email.")
                    }
                } catch (err: any){
                    throw new Error(err)
                }
            }
        })
    ]
}