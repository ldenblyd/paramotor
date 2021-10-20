import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "plugins/prisma";

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    adapter: PrismaAdapter(prisma),
    // Enable debug messages in the console if you are having problems
    debug: false,
  });

export default authHandler;
