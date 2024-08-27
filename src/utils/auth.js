import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const {
  auth,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: "Iv23liHOBgOpEheY9SBI",
      clientSecret: "7021c442ee9edcda51f9674d80d73ec7454b7473",
    }),
    Google,
  ],
});
