import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import { getServerSession } from "next-auth";

// const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
}

export const getAuthSesstion = () => getServerSession(authOptions)