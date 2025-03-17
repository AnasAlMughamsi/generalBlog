import prisma from "@/utilities/connect";
import { IncrementalCache } from "next/dist/server/lib/incremental-cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

    const { slug } = params
    try {

        const post = await prisma.post.update({
            where: { slug },
            data: { view: { increment: 1 } },
            include: { User: true }
        })
        return new NextResponse(JSON.stringify(post, { status: 200 }))
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "no posts found!" }, { status: 500 })
        )
    }
}

