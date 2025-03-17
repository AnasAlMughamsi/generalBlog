import { getAuthSesstion } from "@/utilities/auth";
import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

export const GET = async (requset) => {

    const { searchParams } = new URL(requset.url);
    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 3;
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { categorySlug: cat })
        }
    }
    try {
        if (!page && !cat) {
            const AllPosts = await prisma.post.findMany();
            return new NextResponse(
                JSON.stringify({ posts: AllPosts }, { status: 200 })
            )
        }
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),

        ]);
        return new NextResponse(
            JSON.stringify({ posts, count }, { status: 200 })
        )

    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "no posts found!" }, { status: 500 })
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
        console.log(requset)
        const body = await requset.json();
        console.log("body from comment post method: ", body);

        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
        });

        return new NextResponse(JSON.stringify(post, { status: 200 }))

    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        )
    }
}


