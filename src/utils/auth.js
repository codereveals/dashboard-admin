import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./connectToDb";
import { User } from "@/models/user";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: "Iv23liHOBgOpEheY9SBI",
      clientSecret: "7021c442ee9edcda51f9674d80d73ec7454b7473",
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn callback triggered", { user, account, profile });

      // try {
      //   if (account.provider === "github") {
      //     await connectToDb();

      //     let dbUser = await User.findOne({ email: profile.email });
      //     if (!dbUser) {
      //       dbUser = new User({
      //         username: profile.login,
      //         email: profile.email,
      //         image: profile.avatar_url,
      //       });
      //       await dbUser.save();
      //       console.log("User saved in the database!");
      //     }
      //   }
      //   return true;
      // } catch (error) {
      //   console.error("Error in signIn callback:", error);
      //   return false; // Deny access if there's an error
      // }
      return true;
    },
  },
});
