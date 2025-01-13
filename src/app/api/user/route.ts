import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";

const userScheme = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8, 'Password must be atleast 8 characters long')
})

export async function POST(req: Request){
    try {
        const body = await req.json();
        const { email, username, password } = userScheme.parse(body);

        //check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        });

        if (existingUserByEmail){
            return NextResponse.json({ user: null, message: "User with this email already exists"}, { status: 409 })
        }

        //check if username already exists
        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username }
        });

        if (existingUserByUsername){ 
            return NextResponse.json({ user: null, message: "User with this username already exists"}, { status: 409 })
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}