import { getAuthSesstion } from "@/utilities/auth";
import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

    const { searchParams } = new URL(req.url);

    const postSlug = searchParams.get("postSlug");

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug }),
            },
            include: { User: true },
        });

        return new NextResponse(JSON.stringify(comments, { status: 200 }))

    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        )
    }
}

export const POST = async (requset) => {

    const session = await getAuthSesstion();


    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        )
    }


    try {
        const body = await requset.json();
        console.log("body from comment post method: ", body)
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        });

        return new NextResponse(JSON.stringify(comment, { status: 200 }))

    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        )
    }
}