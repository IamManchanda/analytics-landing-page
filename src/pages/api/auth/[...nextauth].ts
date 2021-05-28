import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { handleVerifyPassword } from "../../../utils/auth";
import { connectToDb } from "../../../utils/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDb();

        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          // @ts-ignore
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await handleVerifyPassword(
          // @ts-ignore
          credentials.password,
          user.password,
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();

        return {
          email: user.email,
        };
      },
    }),
  ],
});
