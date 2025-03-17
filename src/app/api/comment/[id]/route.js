import { getAuthSesstion } from "@/utilities/auth";
import prisma from "@/utilities/connect";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

// export const GET = async (req, { params }) => {

//     const { slug } = params
//     try {

//         const post = await prisma.post.findUnique({
//             where: { slug },
//             include: { User: true }
//         })
//         return new NextResponse(JSON.stringify(post, { status: 200 }))
//     } catch (error) {
//         console.log(error);
//         return new NextResponse(
//             JSON.stringify({ message: "no posts found!" }, { status: 500 })
//         )
//     }
// }



export const DELETE = async (requset, { params }, response) => {
    const session = await getAuthSesstion();

    console.log(session)
    console.log(requset)
    if (requset.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    const { id } = params
    console.log("requset.query => : ", id)

    try {
        if (!session) {
            return response.status(401).json({ error: "Unauthorized" })
        }

        const commentId = typeof id === "string" ? id : Number(id);
        const comment = await prisma.comment.findUnique({ where: { id: commentId } });

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        await prisma.comment.delete({ where: { id: commentId } });

        return new NextResponse(JSON.stringify("comment deleted", { status: 200 }))

    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        )
    }
}







